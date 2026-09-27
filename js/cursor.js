/* ==========================================================================
   PLACEMENTPREP - DUAL-ELEMENT MAGNETIC CURSOR
   Smooth-interpolated magnetic cursor with interactive hover expansion
   ========================================================================== */

(function () {
  // Only initialize on devices with precise pointing devices (mouse)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    });

    // Check for interactive element hovering
    const interactiveSelector = 'a, button, .btn, .module-card, .cbt-option-item, .cbt-palette-btn, input, select';

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        isHovering = true;
        ring?.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        isHovering = false;
        ring?.classList.remove('cursor-hover');
      }
    });

    // Smooth lerp loop for the outer ring
    function render() {
      // Lerp formula: current + (target - current) * factor
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      requestAnimationFrame(render);
    }

    render();
  });
})();
