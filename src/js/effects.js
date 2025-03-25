import * as THREE from 'three';

export function initEffects() {
    // Nexus HUD Typing
    const hud = document.querySelector('.hud-data');
    if (hud) {
        new Typed(hud, {
            strings: ['Initializing Nexus...', 'Systems Online', 'Luxury Activated'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }

    // Circuit Streams with Pulse
    const streams = document.querySelector('.circuit-streams');
    if (streams) {
        for (let i = 0; i < 20; i++) {
            const stream = document.createElement('div');
            stream.className = 'circuit-stream';
            stream.style.cssText = `
                position: absolute;
                width: 3px;
                height: ${Math.random() * 250 + 100}px;
                background: linear-gradient(to bottom, var(--neon-blue), transparent);
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: stream-flow ${Math.random() * 3 + 2}s infinite, pulse ${Math.random() * 1 + 0.5}s infinite alternate;
            `;
            streams.appendChild(stream);
        }
    }

    // Timeline Nodes
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: var(--cyber-gold);
            border-radius: 50%;
            top: 0;
            left: calc(50% - 10px);
        `;
        item.appendChild(node);
        gsap.to(node, {
            scale: 1.5,
            opacity: 0.5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    });

    // Team Member Holograms
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        const holo = document.createElement('div');
        holo.className = 'member-holo';
        holo.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: radial-gradient(circle, var(--holo-purple) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        card.appendChild(holo);
        card.addEventListener('mouseenter', () => gsap.to(holo, { opacity: 0.3, duration: 0.5 }));
        card.addEventListener('mouseleave', () => gsap.to(holo, { opacity: 0, duration: 0.5 }));
    });

    // Gallery Item Effects
    const galleryItems = document.querySelectorAll('.item-frame');
    galleryItems.forEach(item => {
        const glitch = document.createElement('div');
        glitch.className = 'item-glitch';
        glitch.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="none" stroke="var(--neon-blue)" stroke-width="2"/></svg>');
            opacity: 0;
        `;
        item.appendChild(glitch);
        item.addEventListener('mouseenter', () => {
            gsap.to(glitch, { opacity: 0.5, duration: 0.2 });
            gsap.to(glitch, { x: '+=10', y: '+=10', duration: 0.1, repeat: 3, yoyo: true });
        });
        item.addEventListener('mouseleave', () => gsap.to(glitch, { opacity: 0, duration: 0.2 }));
    });

    // Contact Form Particles
    const formParticles = document.querySelector('.form-particles');
    if (formParticles) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'form-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 5 + 2}px;
                height: ${Math.random() * 5 + 2}px;
                background: var(--flux-green);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            formParticles.appendChild(particle);
            gsap.to(particle, {
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }

    // Additional Styles
    const style = document.createElement('style');
    style.textContent = `
        .circuit-stream { animation: stream-flow linear infinite, pulse ease-in-out infinite alternate; }
        @keyframes stream-flow {
            0% { opacity: 0; transform: translateY(-100%); }
            50% { opacity: 1; }
            100% { opacity: 0; transform: translateY(100%); }
        }
        @keyframes pulse {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}