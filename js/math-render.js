/* ==========================================================================
   PLACEMENTPREP - CENTRALIZED MATHEMATICAL RENDERING UTILITY
   Uses KaTeX for fast, professional LaTeX rendering across all pages.

   Pipeline:
     1. Receive a DOM container (or entire document body)
     2. Walk text nodes, skipping <code>, <pre>, <script>, <style> elements
     3. Detect valid $...$ (inline) and $$...$$ (display) delimiters
     4. Distinguish currency "$50", "$0.023/GB" from math "$X \in \R$"
     5. Render valid LaTeX via KaTeX; leave non-math dollar signs untouched
     6. Apply responsive overflow protection on display equations
   ========================================================================== */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     CONFIGURATION
  ----------------------------------------------------------------------- */
  var KATEX_OPTIONS_INLINE = {
    throwOnError: false,
    errorColor: '#ef4444',
    output: 'html',
    strict: false,
    trust: false,
    macros: {
      '\\R': '\\mathbb{R}',
      '\\N': '\\mathbb{N}',
      '\\Z': '\\mathbb{Z}'
    }
  };

  var KATEX_OPTIONS_DISPLAY = {
    throwOnError: false,
    errorColor: '#ef4444',
    output: 'html',
    strict: false,
    trust: false,
    displayMode: true,
    macros: {
      '\\R': '\\mathbb{R}',
      '\\N': '\\mathbb{N}',
      '\\Z': '\\mathbb{Z}'
    }
  };

  /* -----------------------------------------------------------------------
     HEURISTIC: Is a $...$ expression actually a math expression?
     Returns false for currency patterns like $50, $0.023, $3.30 LPA
  ----------------------------------------------------------------------- */
  function isMathExpression(content) {
    var trimmed = content.trim();

    if (!trimmed) return false;

    // Reject pure numbers / currency: $50, $1,000, $0.023, $3.30 LPA, $100K
    if (/^[\d,]+(\.\d+)?(\s*(LPA|K|M|B|USD|INR|per|\/|GB|MB|ms|s|min|hr).*)?$/i.test(trimmed)) {
      return false;
    }

    // Reject: $0.00-$0.12 per GB style ranges (currency range)
    if (/^\d[\d.,\-\s]*per/i.test(trimmed)) return false;

    // Contains known LaTeX commands -> definitely math
    if (/\\[a-zA-Z]/.test(trimmed)) return true;

    // Contains ^ or _ subscript/superscript operators -> math
    if (/[\^_]/.test(trimmed)) return true;

    // Contains mathematical operators
    if (/[+\-*/=<>]/.test(trimmed)) return true;

    // Contains pipe character (conditional probability, sets): P(y|x), {0|1}
    if (/\|/.test(trimmed)) return true;

    // Bracket interval notation: [0,1], [-1,1], [0, infinity)
    if (/^\[[\d\s,\-\.]+[,\]]/.test(trimmed)) return true;

    // Contains general parentheses with content: f(x), sigma(z)
    if (/[a-zA-Z]\([^)]+\)/.test(trimmed)) return true;

    // Contains curly braces (LaTeX grouping or set notation)
    if (/[{}]/.test(trimmed)) return true;

    // Contains math-style identifiers: X_i, W_0, R^2
    if (/[A-Za-z]\d+/.test(trimmed)) return true;

    // Single letter variables: $x$, $n$, $K$, $y$
    if (/^[A-Za-z]$/.test(trimmed)) return true;

    // Short identifiers (up to 4 chars like $mu$, $pi$, $Gt$, $B$, $r$)
    if (/^[A-Za-z]\w*$/.test(trimmed) && trimmed.length <= 4) return true;

    return false;
  }

  /* -----------------------------------------------------------------------
     SKIP THESE ELEMENTS - never math-render inside them
  ----------------------------------------------------------------------- */
  var SKIP_TAGS = {
    'SCRIPT': true, 'STYLE': true, 'CODE': true, 'PRE': true,
    'TEXTAREA': true, 'INPUT': true, 'SELECT': true, 'OPTION': true,
    'NOSCRIPT': true, 'SVG': true, 'MATH': true
  };

  /* -----------------------------------------------------------------------
     Collect text nodes that are NOT inside skip-tag ancestors.
  ----------------------------------------------------------------------- */
  function collectTextNodes(root) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          var el = node.parentElement;
          while (el) {
            if (SKIP_TAGS[el.tagName]) return NodeFilter.FILTER_REJECT;
            if (el.classList && el.classList.contains('katex')) return NodeFilter.FILTER_REJECT;
            el = el.parentElement;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var nodes = [];
    var node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    return nodes;
  }

  /* -----------------------------------------------------------------------
     Parse a raw text string and split into segments:
       { type: 'text' | 'inline-math' | 'display-math', content: string }
  ----------------------------------------------------------------------- */
  function parseSegments(raw) {
    var segments = [];
    var i = 0;
    var len = raw.length;

    while (i < len) {
      // Look for $$ first (display math)
      if (raw[i] === '$' && i + 1 < len && raw[i + 1] === '$') {
        var start = i + 2;
        var end = raw.indexOf('$$', start);
        if (end !== -1) {
          var dispContent = raw.slice(start, end);
          if (dispContent.trim()) {
            segments.push({ type: 'display-math', content: dispContent });
            i = end + 2;
            continue;
          }
        }
      }

      // Look for $ (inline math)
      if (raw[i] === '$') {
        var j = i + 1;
        // Find closing $ - skip escaped characters
        while (j < len && raw[j] !== '$') {
          if (raw[j] === '\\') j++;
          j++;
        }

        if (j < len && raw[j] === '$') {
          var inlineContent = raw.slice(i + 1, j);
          if (isMathExpression(inlineContent)) {
            segments.push({ type: 'inline-math', content: inlineContent });
            i = j + 1;
            continue;
          }
        }

        // Not math - literal dollar sign
        segments.push({ type: 'text', content: '$' });
        i++;
        continue;
      }

      // Regular text - collect until next $
      var k = i;
      while (k < len && raw[k] !== '$') k++;
      if (k > i) {
        segments.push({ type: 'text', content: raw.slice(i, k) });
      }
      i = k;
    }

    return segments;
  }

  /* -----------------------------------------------------------------------
     Render a single text node that may contain LaTeX delimiters.
  ----------------------------------------------------------------------- */
  function renderTextNode(textNode) {
    var raw = textNode.nodeValue;

    if (!raw || raw.indexOf('$') === -1) return;

    var segments = parseSegments(raw);

    // If all text, nothing to do
    var hasMath = false;
    for (var s = 0; s < segments.length; s++) {
      if (segments[s].type !== 'text') { hasMath = true; break; }
    }
    if (!hasMath) return;

    if (!textNode.parentNode) return;

    var frag = document.createDocumentFragment();

    for (var idx = 0; idx < segments.length; idx++) {
      var seg = segments[idx];
      if (seg.type === 'text') {
        frag.appendChild(document.createTextNode(seg.content));
      } else if (seg.type === 'inline-math') {
        var span = document.createElement('span');
        span.className = 'katex-inline-wrapper';
        try {
          span.innerHTML = window.katex.renderToString(seg.content, KATEX_OPTIONS_INLINE);
        } catch (e) {
          span.textContent = '$' + seg.content + '$';
          span.style.color = '#ef4444';
          span.style.fontFamily = 'var(--font-mono, monospace)';
        }
        frag.appendChild(span);
      } else if (seg.type === 'display-math') {
        var div = document.createElement('div');
        div.className = 'katex-display-wrapper';
        try {
          div.innerHTML = window.katex.renderToString(seg.content, KATEX_OPTIONS_DISPLAY);
        } catch (e) {
          var code = document.createElement('code');
          code.textContent = '$$' + seg.content + '$$';
          code.style.color = '#ef4444';
          div.appendChild(code);
        }
        frag.appendChild(div);
      }
    }

    textNode.parentNode.replaceChild(frag, textNode);
  }

  /* -----------------------------------------------------------------------
     PUBLIC: Render all math in a given container element.
  ----------------------------------------------------------------------- */
  function renderMath(container) {
    if (!container) container = document.body;

    if (typeof window.katex === 'undefined') {
      console.warn('[MathRender] KaTeX not loaded. Math will not be rendered.');
      return;
    }

    var textNodes = collectTextNodes(container);
    // Process in reverse order to preserve tree structure during replacement
    for (var i = textNodes.length - 1; i >= 0; i--) {
      try {
        renderTextNode(textNodes[i]);
      } catch (err) {
        console.warn('[MathRender] Error on text node:', err);
      }
    }
  }

  /* -----------------------------------------------------------------------
     PUBLIC: Render math inside an HTML string, return processed string.
     For dynamic content like quiz explanations.
  ----------------------------------------------------------------------- */
  function renderMathInHTML(htmlString) {
    if (!htmlString || htmlString.indexOf('$') === -1) return htmlString;
    if (typeof window.katex === 'undefined') return htmlString;

    var temp = document.createElement('div');
    temp.innerHTML = htmlString;
    renderMath(temp);
    return temp.innerHTML;
  }

  /* -----------------------------------------------------------------------
     AUTO-INITIALIZE on DOMContentLoaded + MutationObserver for dynamics
  ----------------------------------------------------------------------- */
  function init() {
    renderMath(document.body);

    var observer = new MutationObserver(function(mutations) {
      for (var m = 0; m < mutations.length; m++) {
        var addedNodes = mutations[m].addedNodes;
        for (var n = 0; n < addedNodes.length; n++) {
          var node = addedNodes[n];
          if (node.nodeType === Node.ELEMENT_NODE) {
            var text = node.textContent || '';
            if (text.indexOf('$') !== -1) {
              // Small delay so innerHTML injection completes
              (function(el) {
                setTimeout(function() { renderMath(el); }, 20);
              })(node);
            }
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /* -----------------------------------------------------------------------
     EXPORT
  ----------------------------------------------------------------------- */
  window.MathRender = {
    render: renderMath,
    renderHTML: renderMathInHTML,
    init: init
  };

  /* -----------------------------------------------------------------------
     AUTO-START
  ----------------------------------------------------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
