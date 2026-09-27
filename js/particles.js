/* ==========================================================================
   PLACEMENTPREP - INTERACTIVE PARTICLE CONSTELLATION CANVAS
   High-performance ambient particle backdrop responding smoothly to mouse
   ========================================================================== */

(function () {
  class ParticleNetwork {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.mouse = { x: null, y: null, radius: 150 };
      this.animationFrameId = null;
      this.numParticles = 55;

      this.init();
    }

    init() {
      this.resize();
      window.addEventListener('resize', () => this.resize());

      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });

      window.addEventListener('mouseout', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });

      this.createParticles();
      this.animate();
    }

    resize() {
      if (!this.canvas) return;
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;

      // Adjust particle count for smaller screens
      if (this.width < 768) {
        this.numParticles = 25;
      } else {
        this.numParticles = 55;
      }
    }

    createParticles() {
      this.particles = [];
      for (let i = 0; i < this.numParticles; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1,
          baseColor: Math.random() > 0.5 ? 'rgba(99, 102, 241, ' : 'rgba(6, 182, 212, '
        });
      }
    }

    animate() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.width, this.height);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const maxDistance = 140;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > this.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.height) p.vy *= -1;

        // Mouse interaction
        if (this.mouse.x !== null) {
          const dx = this.mouse.x - p.x;
          const dy = this.mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.mouse.radius) {
            const force = (this.mouse.radius - dist) / this.mouse.radius;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Draw particle dot
        const dotAlpha = isDark ? 0.6 : 0.35;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = p.baseColor + dotAlpha + ')';
        this.ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.22 : 0.12);
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  window.ParticleNetwork = ParticleNetwork;
})();
