document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation
    gsap.to('.navbar', {
        background: 'rgba(0, 0, 0, 1)',
        duration: 0.5,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Hero Section Animation
    gsap.from('.animated-text', {
        duration: 2,
        y: '100%',
        opacity: 0,
        ease: 'power4.out'
    });

    gsap.to('.subtitle', {
        duration: 1.5,
        opacity: 1,
        y: -20,
        delay: 1,
        ease: 'power3.out'
    });

    // Geometric Elements (Inspired by bleibtgleich.com)
    const geometric = document.querySelector('.geometric-overlay');
    for (let i = 0; i < 8; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.cssText = `
            position: absolute;
            width: ${50 + Math.random() * 150}px;
            height: ${50 + Math.random() * 150}px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            transform: rotate(${Math.random() * 360}deg);
        `;
        geometric.appendChild(shape);

        gsap.to(shape, {
            duration: 10 + Math.random() * 10,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotation: Math.random() * 720,
            repeat: -1,
            yoyo: true,
            ease: 'none'
        });
    }

    // Parallax Effect (Inspired by yourbana.com)
    gsap.to('.parallax-bg', {
        y: '-40%',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        }
    });

    // Works Section Animation (Inspired by 247artists.com)
    gsap.from('.work-item', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.parallax-section',
            start: 'top 80%'
        }
    });

    // Contact Section Animation
    gsap.from('.contact-section .section-title, .contact-section .lead, .contact-section .btn', {
        duration: 1.5,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        }
    });
});