/* ==========================================================================
   PLACEMENTPREP - CELEBRATORY CONFETTI ENGINE
   Lightweight, high-performance canvas celebration physics for passed exams
   ========================================================================== */

(function () {
  window.CelebrationConfetti = {
    trigger() {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.inset = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '3000';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;

      const colors = ['#6366F1', '#06B6D4', '#10B981', '#F59E0B', '#F43F5E', '#8B5CF6'];
      const particles = [];
      const particleCount = 120;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: width / 2,
          y: height / 2 + 50,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.7) * 22,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1,
          decay: Math.random() * 0.015 + 0.008
        });
      }

      function update() {
        ctx.clearRect(0, 0, width, height);

        let activeParticles = 0;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.opacity <= 0) continue;

          activeParticles++;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.45; // gravity
          p.vx *= 0.98; // air resistance
          p.rotation += p.rotationSpeed;
          p.opacity -= p.decay;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }

        if (activeParticles > 0) {
          requestAnimationFrame(update);
        } else {
          canvas.remove();
        }
      }

      update();
    }
  };
})();
