/* ==========================================================================
   PLACEMENTPREP - QUESTION BANK: BROWSER FUNDAMENTALS
   URL lifecycle, Critical Rendering Path, Web Storage, HTTP status & DOM
   ========================================================================== */

(function () {
  window.BROWSER_QUESTIONS = [
    {
      id: 'browser-001',
      question: 'When a user enters `https://www.example.com` into a browser address bar and presses Enter, which of the following represents the correct chronological sequence of internal browser and networking operations before the page renders?',
      codeSnippet: '',
      options: [
        'TCP Handshake -> HTTP GET Request -> DNS Resolution -> TLS Handshake -> DOM Construction',
        'DNS Resolution -> TCP Handshake -> TLS Handshake -> HTTP GET Request -> DOM Construction',
        'HTTP GET Request -> DNS Resolution -> TCP Handshake -> Render Tree Construction -> CSSOM',
        'TLS Handshake -> DNS Resolution -> TCP Handshake -> HTTP GET Request -> Paint'
      ],
      correctAnswer: 1,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'Critical Rendering Path',
      explanation: 'The accurate lifecycle is: (1) Browser checks cache & executes DNS Resolution to find IP for `www.example.com`. (2) Initiates TCP 3-Way Handshake with the server IP on port 443. (3) Executes TLS cryptographic handshake to establish secure encryption. (4) Sends HTTP GET request for index.html. (5) Browser receives bytes, tokenizes HTML into DOM nodes, and begins Critical Rendering Path.',
      wrongOptionExplanations: {
        '0': 'TCP and TLS handshakes cannot start before knowing the destination IP address via DNS.',
        '2': 'An HTTP request cannot be transmitted over the network without establishing an underlying TCP connection first.',
        '3': 'TLS handshake requires an established TCP transport connection and destination IP address.'
      },
      realWorldApplication: 'Understanding browser networking milestones (DNS, Connect, SSL, TTFB) is critical for Web Vitals performance optimization and CDN edge-routing tuning.',
      placementTip: 'Standard interview question: "What happens when you type google.com?" Always follow order: DNS -> TCP -> TLS -> HTTP Request -> Response -> DOM/CSSOM Parsing.'
    },
    {
      id: 'browser-002',
      question: 'In the browser\'s Critical Rendering Path (CRP), which two intermediate tree structures must the rendering engine construct and combine before it can calculate the geometry (Layout/Reflow) of visible elements on the screen?',
      codeSnippet: '',
      options: [
        'DOM Tree (Document Object Model) and CSSOM (CSS Object Model) combined into the Render Tree',
        'AST (Abstract Syntax Tree) and Bytecode Array combined into the V8 Heap Tree',
        'HTTP Packet Stream and WebSocket Buffer combined into the Canvas Texture',
        'Virtual DOM and Shadow DOM combined into the Fiber Tree'
      ],
      correctAnswer: 0,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'DOM & CSSOM Construction',
      explanation: 'The browser parser processes HTML into the DOM tree and parses CSS stylesheets into the CSSOM tree. The browser engine combines DOM and CSSOM into the "Render Tree" (containing only visible nodes, excluding `<head>` or `display: none;`). The engine then runs "Layout" (computing element coordinates/sizes) followed by "Paint" and "Composite".',
      wrongOptionExplanations: {
        '1': 'AST and bytecode are internal artifacts of JavaScript JavaScript engines (like V8/SpiderMonkey), not the layout rendering tree.',
        '2': 'Packet streams are network transport buffers, unrelated to geometric layout trees.',
        '3': 'Virtual DOM and Fiber trees are client-side library abstractions (e.g. React), not native browser rendering engine primitives.'
      },
      realWorldApplication: 'Modifying styles that alter element geometry (such as `width`, `height`, `margin`) triggers expensive Layout/Reflow operations across the entire DOM tree, causing frame drops (jank).',
      placementTip: 'Sequence: HTML -> DOM; CSS -> CSSOM; DOM + CSSOM -> Render Tree -> Layout (geometry) -> Paint (pixels) -> Composite (layer stacking).'
    },
    {
      id: 'browser-003',
      question: 'A web developer needs to store user preference settings on the client side. The requirements state: (1) Data must persist even when the browser tab or entire window is closed and reopened. (2) Data must NOT be automatically transmitted over the network in every subsequent HTTP request header. Which storage mechanism should be selected?',
      codeSnippet: '',
      options: [
        'HTTP Cookies (`document.cookie`)',
        'Session Storage (`sessionStorage`)',
        'Local Storage (`localStorage`)',
        'IndexedDB in ephemeral memory mode'
      ],
      correctAnswer: 2,
      difficulty: 'Easy',
      type: 'comparison',
      topic: 'Cookies vs Web Storage',
      explanation: '`localStorage` stores key-value pairs persistently across browser sessions without an expiration date (unlike `sessionStorage` which is cleared when the tab closes). Crucially, unlike HTTP Cookies (which are sent to the server in the `Cookie:` header with every single HTTP request), `localStorage` data remains strictly local to client JavaScript.',
      wrongOptionExplanations: {
        '0': 'HTTP Cookies have a small 4KB limit and are automatically sent to the server with every HTTP request, wasting bandwidth.',
        '1': '`sessionStorage` is destroyed immediately when the browser tab is closed.',
        '3': 'IndexedDB is an asynchronous object database designed for large complex datasets, overkill for simple key-value preference settings.'
      },
      realWorldApplication: '`localStorage` is standard for caching client-side UI themes (dark/light mode), offline form drafts, and non-sensitive localized UI preferences.',
      placementTip: 'Cookies = Transmitted with every request (4KB). SessionStorage = Tab lifetime only (5MB). LocalStorage = Persistent until cleared (5-10MB, client-only).'
    },
    {
      id: 'browser-004',
      question: 'A client sends an HTTP request to an API endpoint. The server responds with HTTP Status Code `403 Forbidden`. What does this status code specifically communicate to the client application?',
      codeSnippet: '',
      options: [
        'The requested URL does not exist on the server.',
        'The client has not provided authentication credentials (unauthenticated).',
        'The server understands the client\'s identity, but the client lacks sufficient authorization permissions to access the resource.',
        'The server encountered an unhandled internal exception or database crash.'
      ],
      correctAnswer: 2,
      difficulty: 'Medium',
      type: 'conceptual',
      topic: 'HTTP Response Codes',
      explanation: 'HTTP `403 Forbidden` indicates the server knows who the client is (authenticated), but the client is not authorized/permitted to access the target resource. In contrast, `401 Unauthorized` specifically indicates the client has NOT authenticated or provided valid credentials.',
      wrongOptionExplanations: {
        '0': 'A non-existent URL returns `404 Not Found`.',
        '1': 'Unauthenticated requests return `401 Unauthorized` (which includes `WWW-Authenticate` challenge headers).',
        '3': 'Unhandled internal exceptions return `500 Internal Server Error`.'
      },
      realWorldApplication: 'Role-Based Access Control (RBAC) in enterprise APIs returns 401 when a JWT token is expired/missing, and 403 when a regular user tries to access `/api/admin/deleteUser`.',
      placementTip: 'Frequent interview trap: 401 = Not Authenticated (Who are you?). 403 = Not Authorized (I know who you are, but you cannot enter!).'
    },
    {
      id: 'browser-005',
      question: 'A JavaScript single-page application hosted on `https://app.company.com` attempts an asynchronous `fetch()` request to `https://api.external.com/data`. The request fails in the browser with an error citing the "Same-Origin Policy". Which of the following responses from `api.external.com` will instruct the browser to permit the response?',
      codeSnippet: '',
      options: [
        'Setting HTTP header `Access-Control-Allow-Origin: https://app.company.com` (or `*`) on the server response',
        'Setting `Content-Type: application/javascript` in the client request',
        'Adding `mode: "no-cors"` to the client fetch call so it can read JSON data',
        'Clearing browser cache and DNS flush'
      ],
      correctAnswer: 0,
      difficulty: 'Hard',
      type: 'debugging',
      topic: 'CORS & Same-Origin',
      explanation: 'The Same-Origin Policy (SOP) blocks client scripts from reading HTTP responses from a different origin (different protocol, domain, or port). Cross-Origin Resource Sharing (CORS) is a server-side mechanism. The destination server must explicitly include the header `Access-Control-Allow-Origin` allowing the requesting origin in order for the browser to share the response with JavaScript.',
      wrongOptionExplanations: {
        '1': 'Request `Content-Type` does not grant cross-origin access permissions.',
        '2': '`mode: "no-cors"` results in an "opaque" response where JavaScript cannot read the status or body content.',
        '3': 'CORS is a browser security protocol enforced on the client, not a DNS or local caching issue.'
      },
      realWorldApplication: 'CORS misconfigurations are among the top support tickets in full-stack web development when separating frontends (Vercel/S3) from microservice backends.',
      placementTip: 'CORS errors can ONLY be resolved by the destination server returning appropriate `Access-Control-Allow-Origin` headers (or proxying requests).'
    }
  ];
})();
