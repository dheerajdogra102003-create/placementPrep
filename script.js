/**
 * PlacementPrep - WebGL 3D & Retro-Cinematic Engine
 * Inspired by Unseen Studio (WebGL Shaders, Film-Grain, Momentum Scrolling & 3D Tilt)
 * Preserves 100% of SyncManager, Theme, Stats, Navigation & Practice functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // =========================================================================
    // 1. INTRO EXPERIENCE (Plays once per session)
    // =========================================================================
    const introScreen = document.getElementById('intro-screen');
    const introSkipBtn = document.getElementById('intro-skip-btn');

    function dismissIntro() {
        if (!introScreen) return;
        introScreen.classList.add('dismissed');
        sessionStorage.setItem('placementprep_intro_seen', 'true');
        setTimeout(() => {
            introScreen.style.display = 'none';
        }, 650);
    }

    if (introScreen) {
        const alreadySeen = sessionStorage.getItem('placementprep_intro_seen');
        if (alreadySeen || prefersReducedMotion) {
            introScreen.style.display = 'none';
        } else {
            const introTimer = setTimeout(dismissIntro, 2300);

            if (introSkipBtn) {
                introSkipBtn.addEventListener('click', () => {
                    clearTimeout(introTimer);
                    dismissIntro();
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !introScreen.classList.contains('dismissed')) {
                    clearTimeout(introTimer);
                    dismissIntro();
                }
            });
        }
    }

    // =========================================================================
    // 2. REAL-TIME 3D & WEBGL SHADER ENGINE
    // =========================================================================
    const canvas = document.getElementById('webgl-canvas');
    let webglRunning = false;

    if (canvas && !prefersReducedMotion) {
        initWebGL();
    }

    function initWebGL() {
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            console.warn('WebGL not supported, falling back to 2D canvas.');
            return;
        }

        webglRunning = true;

        // Vertex Shader GLSL
        const vsSource = `
            attribute vec3 aPosition;
            attribute vec3 aNormal;
            attribute vec2 aTexCoord;

            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;
            uniform vec2 uMouse;
            uniform float uTime;

            varying vec3 vNormal;
            varying vec3 vFragPos;
            varying vec2 vTexCoord;
            varying float vDisp;

            void main() {
                vTexCoord = aTexCoord;
                
                // Subtle interactive wave ripple on vertices
                vec3 pos = aPosition;
                float d = distance(pos.xy, uMouse * 2.0);
                float ripple = sin(pos.x * 2.0 + pos.y * 2.0 + uTime * 1.5) * 0.08;
                pos.z += ripple;
                vDisp = ripple;

                vec4 worldPos = uModelMatrix * vec4(pos, 1.0);
                vFragPos = worldPos.xyz;
                vNormal = mat3(uModelMatrix) * aNormal;

                gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
                gl_PointSize = max(1.5, 4.0 * (1.0 / -gl_Position.z));
            }
        `;

        // Fragment Shader GLSL with Dynamic Lighting, Chromatic Aberration & Grain
        const fsSource = `
            precision mediump float;

            varying vec3 vNormal;
            varying vec3 vFragPos;
            varying vec2 vTexCoord;
            varying float vDisp;

            uniform vec2 uResolution;
            uniform vec2 uMouse;
            uniform float uTime;
            uniform float uScroll;

            // Procedural pseudo-random hash for film grain
            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / uResolution;

                // Dynamic light source tracking mouse
                vec3 lightPos = vec3(uMouse.x * 4.0, uMouse.y * 4.0, 3.5);
                vec3 norm = normalize(vNormal);
                vec3 lightDir = normalize(lightPos - vFragPos);

                // Diffuse lighting
                float diff = max(dot(norm, lightDir), 0.15);

                // Specular highlight
                vec3 viewDir = normalize(vec3(0.0, 0.0, 5.0) - vFragPos);
                vec3 reflectDir = reflect(-lightDir, norm);
                float spec = pow(max(dot(viewDir, reflectDir), 0.0), 16.0) * 0.45;

                // Base palette tint: PlacementPrep Red/Pink accents with dark slate
                vec3 baseColor = mix(vec3(0.09, 0.09, 0.11), vec3(0.9, 0.05, 0.15), vDisp * 2.5 + 0.08);
                vec3 finalColor = (baseColor * diff) + vec3(spec);

                // Simulated Chromatic Aberration toward viewport edges
                float distFromCenter = distance(uv, vec2(0.5));
                float caShift = distFromCenter * 0.0035;
                finalColor.r += caShift * 2.5;
                finalColor.b += caShift * 1.5;

                // Procedural micro-grain overlay
                float grain = (hash(uv + fract(uTime * 0.05)) - 0.5) * 0.04;
                finalColor += grain;

                gl_FragColor = vec4(finalColor, 0.65);
            }
        `;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        // Locations
        const aPositionLoc = gl.getAttribLocation(program, 'aPosition');
        const aNormalLoc = gl.getAttribLocation(program, 'aNormal');
        const aTexCoordLoc = gl.getAttribLocation(program, 'aTexCoord');

        const uModelMatrixLoc = gl.getUniformLocation(program, 'uModelMatrix');
        const uViewMatrixLoc = gl.getUniformLocation(program, 'uViewMatrix');
        const uProjectionMatrixLoc = gl.getUniformLocation(program, 'uProjectionMatrix');
        const uResolutionLoc = gl.getUniformLocation(program, 'uResolution');
        const uMouseLoc = gl.getUniformLocation(program, 'uMouse');
        const uTimeLoc = gl.getUniformLocation(program, 'uTime');
        const uScrollLoc = gl.getUniformLocation(program, 'uScroll');

        // Geometry: 3D Connected Polyhedral Icosahedron Lattice
        const vertices = [];
        const normals = [];
        const texCoords = [];
        const indices = [];

        // Golden ratio for icosahedron vertices
        const t = (1.0 + Math.sqrt(5.0)) / 2.0;
        const baseIco = [
            [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
            [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
            [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
        ];

        // Normalize base icosahedron to sphere radius 1.8
        const icoNorm = baseIco.map(v => {
            const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
            return [v[0]/len * 1.8, v[1]/len * 1.8, v[2]/len * 1.8];
        });

        const icoFaces = [
            [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
            [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
            [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
            [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
        ];

        icoFaces.forEach(face => {
            const v0 = icoNorm[face[0]];
            const v1 = icoNorm[face[1]];
            const v2 = icoNorm[face[2]];

            // Calculate face normal
            const ax = v1[0] - v0[0], ay = v1[1] - v0[1], az = v1[2] - v0[2];
            const bx = v2[0] - v0[0], by = v2[1] - v0[1], bz = v2[2] - v0[2];
            const nx = ay * bz - az * by;
            const ny = az * bx - ax * bz;
            const nz = ax * by - ay * bx;
            const nlen = Math.sqrt(nx*nx + ny*ny + nz*nz) || 1;

            [v0, v1, v2].forEach((v, i) => {
                vertices.push(v[0], v[1], v[2]);
                normals.push(nx/nlen, ny/nlen, nz/nlen);
                texCoords.push(i === 0 ? 0 : (i === 1 ? 1 : 0.5), i === 2 ? 1 : 0);
            });
        });

        // Add 3D floating constellation background particles
        for (let i = 0; i < 60; i++) {
            const px = (Math.random() - 0.5) * 14.0;
            const py = (Math.random() - 0.5) * 10.0;
            const pz = (Math.random() - 0.5) * 8.0 - 2.0;

            vertices.push(px, py, pz);
            vertices.push(px + 0.05, py + 0.05, pz);
            vertices.push(px - 0.05, py - 0.05, pz);

            normals.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
            texCoords.push(0, 0, 1, 0, 0.5, 1);
        }

        const vBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(aPositionLoc);
        gl.vertexAttribPointer(aPositionLoc, 3, gl.FLOAT, false, 0, 0);

        const nBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(aNormalLoc);
        gl.vertexAttribPointer(aNormalLoc, 3, gl.FLOAT, false, 0, 0);

        const tBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(aTexCoordLoc);
        gl.vertexAttribPointer(aTexCoordLoc, 2, gl.FLOAT, false, 0, 0);

        // Simple Matrix Math Helpers
        function mat4Identity() {
            return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
        }

        function mat4Perspective(fovy, aspect, near, far) {
            const f = 1.0 / Math.tan(fovy / 2);
            const nf = 1 / (near - far);
            return [
                f / aspect, 0, 0, 0,
                0, f, 0, 0,
                0, 0, (far + near) * nf, -1,
                0, 0, 2 * far * near * nf, 0
            ];
        }

        function mat4Multiply(a, b) {
            const out = new Array(16);
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    out[i * 4 + j] = 
                        a[i * 4 + 0] * b[0 * 4 + j] +
                        a[i * 4 + 1] * b[1 * 4 + j] +
                        a[i * 4 + 2] * b[2 * 4 + j] +
                        a[i * 4 + 3] * b[3 * 4 + j];
                }
            }
            return out;
        }

        // View & Resize
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            gl.viewport(0, 0, width, height);
        }
        window.addEventListener('resize', resize);
        resize();

        // Mouse & Inertial Momentum Scroll Tracking
        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;
        let scrollY = 0, targetScrollY = 0, scrollVelocity = 0;

        window.addEventListener('mousemove', (e) => {
            targetMouseX = (e.clientX / width) * 2 - 1;
            targetMouseY = -(e.clientY / height) * 2 + 1;
        });

        window.addEventListener('scroll', () => {
            targetScrollY = window.scrollY;
        }, { passive: true });

        // Render Loop with Real-Time Shaders
        let startTime = performance.now();
        let animFrameId = null;

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        function render(now) {
            const time = (now - startTime) * 0.001;

            // Inertial easing for mouse & scroll momentum
            mouseX += (targetMouseX - mouseX) * 0.06;
            mouseY += (targetMouseY - mouseY) * 0.06;
            
            const prevScroll = scrollY;
            scrollY += (targetScrollY - scrollY) * 0.08;
            scrollVelocity = scrollY - prevScroll;

            gl.clearColor(0.05, 0.05, 0.05, 0.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // Matrix setup
            const aspect = width / height;
            const projMat = mat4Perspective(Math.PI / 4, aspect, 0.1, 100.0);

            // Camera moves with inertial scroll velocity
            const cameraY = -(scrollY * 0.0015);
            const viewMat = [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                -mouseX * 0.4, cameraY - mouseY * 0.3, -5.5, 1
            ];

            // Model Matrix: Rotates based on time + mouse displacement
            const rotY = time * 0.35 + mouseX * 1.2;
            const rotX = Math.sin(time * 0.25) * 0.3 + mouseY * 0.8 + (scrollVelocity * 0.02);

            const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

            const modelMat = [
                cosY, sinX * sinY, -cosX * sinY, 0,
                0, cosX, sinX, 0,
                sinY, -sinX * cosY, cosX * cosY, 0,
                0, 0, 0, 1
            ];

            // Uniforms
            gl.uniformMatrix4fv(uModelMatrixLoc, false, new Float32Array(modelMat));
            gl.uniformMatrix4fv(uViewMatrixLoc, false, new Float32Array(viewMat));
            gl.uniformMatrix4fv(uProjectionMatrixLoc, false, new Float32Array(projMat));
            gl.uniform2f(uResolutionLoc, width, height);
            gl.uniform2f(uMouseLoc, mouseX, mouseY);
            gl.uniform1f(uTimeLoc, time);
            gl.uniform1f(uScrollLoc, scrollY);

            // Draw Icosahedron Mesh
            gl.drawArrays(gl.TRIANGLES, 0, icoFaces.length * 3);

            // Draw Constellation Particles
            gl.drawArrays(gl.POINTS, icoFaces.length * 3, 180);

            animFrameId = requestAnimationFrame(render);
        }

        animFrameId = requestAnimationFrame(render);

        // Pause WebGL rendering when page is hidden to conserve GPU/battery
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animFrameId);
            } else {
                startTime = performance.now() - (startTime ? 1000 : 0);
                animFrameId = requestAnimationFrame(render);
            }
        });
    }

    // =========================================================================
    // 3. DYNAMIC HOVER, 3D TILT & SPECULAR SHEEN (Unseen Studio Inspired)
    // =========================================================================
    if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const interactiveCards = document.querySelectorAll('.module-card, .qp-card, .stat-card, .recommended-card');

        interactiveCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Update CSS variables for real-time specular sheen
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);

                // 3D perspective rotation calculation
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotX = ((y - centerY) / centerY) * -5.5;
                const rotY = ((x - centerX) / centerX) * 5.5;

                card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(12px) scale3d(1.015, 1.015, 1.015)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // =========================================================================
    // 4. CUSTOM TRAILING CURSOR (Desktop only)
    // =========================================================================
    const cursor = document.getElementById('custom-cursor');
    if (cursor && !prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const dot = cursor.querySelector('.cursor-dot');
        const ring = cursor.querySelector('.cursor-ring');

        let targetX = -100, targetY = -100;
        let ringX = -100, ringY = -100;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (dot) {
                dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
            }
        });

        function animateRing() {
            ringX += (targetX - ringX) * 0.16;
            ringY += (targetY - ringY) * 0.16;
            if (ring) {
                ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            }
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Scale on hover over interactive targets
        const hoverTargets = document.querySelectorAll('a, button, .module-card, .qp-card, .stat-card, input');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    }

    // =========================================================================
    // 5. THEME INITIALIZATION & TOGGLE
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    function initTheme() {
        const savedTheme = localStorage.getItem('placementPrep_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'dark';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', nextTheme);
                localStorage.setItem('placementPrep_theme', nextTheme);
                localStorage.setItem('placementprep-theme', nextTheme);
                localStorage.setItem('theme', nextTheme);
                localStorage.setItem('prep_theme', nextTheme);
            });
        }
    }
    initTheme();

    // =========================================================================
    // 6. MOBILE NAVIGATION OVERLAY
    // =========================================================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // =========================================================================
    // 7. QUICK PRACTICE SCROLL NAVIGATION
    // =========================================================================
    const qpCards = document.querySelectorAll('.qp-card');
    qpCards.forEach(card => {
        card.addEventListener('click', () => {
            const modulesSection = document.getElementById('modules');
            if (modulesSection) {
                modulesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // =========================================================================
    // 8. SYNC MANAGER & USER PROFILE CONTROLLER
    // =========================================================================
    const navSyncBtn = document.getElementById('nav-sync-btn');
    const navSyncText = document.getElementById('nav-sync-text');
    const syncModal = document.getElementById('sync-modal');
    const syncForm = document.getElementById('sync-form');
    const syncUsernameInput = document.getElementById('sync-username-input');
    const syncModalError = document.getElementById('sync-modal-error');
    const btnCloseSync = document.getElementById('btn-close-sync');
    const btnLogoutSync = document.getElementById('btn-logout-sync');
    const syncLogoutArea = document.getElementById('sync-logout-area');

    // Dashboard Stats Elements
    const statAttempted = document.getElementById('stat-attempted');
    const statCorrect = document.getElementById('stat-correct');
    const statAccuracy = document.getElementById('stat-accuracy');
    const statStreak = document.getElementById('stat-streak');
    const statCompleted = document.getElementById('stat-completed');

    function updateDashboardUI() {
        if (!window.SyncManager) return;

        const username = window.SyncManager.getUsername();
        const stats = window.SyncManager.getGlobalStats();

        // Update Navbar button
        if (navSyncBtn && navSyncText) {
            if (username) {
                navSyncText.textContent = username;
                navSyncBtn.classList.add('synced');
                navSyncBtn.title = `Synced across devices as @${username}`;
            } else {
                navSyncText.textContent = 'Sync Progress';
                navSyncBtn.classList.remove('synced');
                navSyncBtn.title = 'Click to sync your progress across devices';
            }
        }

        // Update Stats values dynamically
        if (statAttempted) statAttempted.textContent = stats.attempted;
        if (statCorrect) statCorrect.textContent = stats.correct;
        if (statAccuracy) statAccuracy.textContent = `${stats.accuracy}%`;
        if (statStreak) statStreak.textContent = stats.streak;
        if (statCompleted) statCompleted.textContent = stats.modulesCompleted;
    }

    // Modal Elements
    const syncCloudStatusBadge = document.getElementById('sync-cloud-status-badge');

    function refreshModalData() {
        if (!window.SyncManager) return;
        const currentUsername = window.SyncManager.getUsername();
        if (syncUsernameInput) syncUsernameInput.value = currentUsername;

        // Cloud status badge
        if (syncCloudStatusBadge) {
            if (window.SyncManager.cloudConnected) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟢 Cloud Connected';
            } else if (currentUsername) {
                syncCloudStatusBadge.className = 'sync-status-badge';
                syncCloudStatusBadge.textContent = '🟡 Syncing...';
            } else {
                syncCloudStatusBadge.className = 'sync-status-badge local';
                syncCloudStatusBadge.textContent = '☁️ Cloud Ready';
            }
        }

        if (syncLogoutArea) {
            if (currentUsername) syncLogoutArea.classList.remove('hidden');
            else syncLogoutArea.classList.add('hidden');
        }
    }

    function openSyncModal() {
        if (!syncModal) return;
        refreshModalData();
        if (syncModalError) {
            syncModalError.classList.add('hidden');
            syncModalError.textContent = '';
        }
        syncModal.classList.remove('hidden');
    }

    if (navSyncBtn && syncModal) {
        navSyncBtn.addEventListener('click', openSyncModal);

        if (btnCloseSync) {
            btnCloseSync.addEventListener('click', () => {
                syncModal.classList.add('hidden');
                sessionStorage.setItem('prep_sync_prompted', 'true');
            });
        }

        // Close on outside click
        syncModal.addEventListener('click', (e) => {
            if (e.target === syncModal) {
                syncModal.classList.add('hidden');
                sessionStorage.setItem('prep_sync_prompted', 'true');
            }
        });

        // Form Submit: Set Username
        if (syncForm) {
            syncForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const username = syncUsernameInput.value.trim();
                const saveBtn = document.getElementById('btn-save-sync');

                try {
                    if (saveBtn) saveBtn.textContent = 'Saving...';
                    if (window.SyncManager) {
                        await window.SyncManager.setUsername(username);
                    }
                    syncModal.classList.add('hidden');
                    sessionStorage.setItem('prep_sync_prompted', 'true');
                    updateDashboardUI();
                    window.SyncManager.showToast(`Saved as @${username}!`);
                } catch (err) {
                    if (syncModalError) {
                        syncModalError.textContent = err.message || 'Error saving user';
                        syncModalError.classList.remove('hidden');
                    }
                } finally {
                    if (saveBtn) saveBtn.textContent = 'Save';
                }
            });
        }

        // Logout/Disconnect
        if (btnLogoutSync) {
            btnLogoutSync.addEventListener('click', () => {
                if (window.SyncManager) {
                    window.SyncManager.logout();
                }
                syncModal.classList.add('hidden');
                updateDashboardUI();
            });
        }
    }

    // Subscribe to SyncManager changes
    if (window.SyncManager) {
        window.SyncManager.subscribe(() => {
            updateDashboardUI();
        });
        updateDashboardUI();

        // Prompt new users on first visit if not logged in
        if (!window.SyncManager.getUsername() && !sessionStorage.getItem('prep_sync_prompted')) {
            setTimeout(() => {
                openSyncModal();
            }, 900);
        }
    }
});
