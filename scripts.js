// GSAP Animations for the Header and Background
window.addEventListener('load', () => {
  // Logo Animation (slides in from the left)
  gsap.from(".logo img", {
      duration: 1.5,
      opacity: 0,
      x: -100,
      ease: "power3.out"
  });

  // Navigation Links Animation (staggered appearance)
  gsap.from(".navbar ul li", {
      duration: 1,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5
  });

  // Background color change on scroll
  window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Hover Animations for Links
  document.querySelectorAll('.navbar ul li a').forEach(link => {
      link.addEventListener('mouseenter', () => {
          gsap.to(link, {y: -5, duration: 0.3, ease: "power1.out"});
      });

      link.addEventListener('mouseleave', () => {
          gsap.to(link, {y: 0, duration: 0.3, ease: "power1.out"});
      });
  });
});
gsap.registerPlugin(ScrollTrigger);

// Animate the Hero Section
gsap.from(".hero-section h1", {
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%", // Start animation when section comes into view
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

// Animate the About Section
gsap.from(".about-section h2, .about-section p", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

// Animate the Projects Section
gsap.from(".projects-section h2, .projects-section p", {
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
    },
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

// Animate the Contact Section
gsap.from(".contact-section h2, .contact-section p", {
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
// first-section-start
// GSAP Animation for the First Section
window.addEventListener('load', () => {
    gsap.from(".text-content h1", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power3.out",
    });

    gsap.from(".text-content p", {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.from(".btn", {
        duration: 1,
        opacity: 0,
        scale: 0.9,
        ease: "back.out(1.7)",
        delay: 0.7,
    });

    gsap.to(".profile-image", {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        delay: 1,
    });
});


// first-section-stop
// second-section-start
// GSAP animation for the skills section with staggered elements
gsap.registerPlugin(ScrollTrigger);

gsap.from(".skills-header h2", {
    scrollTrigger: {
        trigger: ".skills-header",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "power3.out",
});

gsap.from(".skills-header p", {
    scrollTrigger: {
        trigger: ".skills-header",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    duration: 1.4,
    opacity: 0,
    y: 30,
    ease: "power3.out",
});

gsap.from(".skill-item", {
    scrollTrigger: {
        trigger: ".skills-content",
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: true,
    },
    duration: 1.5,
    opacity: 0,
    x: -100,
    stagger: 0.1, // Stagger animation for each skill card
    ease: "power3.out",
});

// second-section-stop

// third-section-start
// GSAP animation for the projects section

gsap.registerPlugin(ScrollTrigger);

gsap.from(".projects-header h2", {
    scrollTrigger: {
        trigger: ".projects-header",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "power3.out",
});

gsap.from(".projects-header p", {
    scrollTrigger: {
        trigger: ".projects-header",
        start: "top 80%",
        toggleActions: "play none none none",
    },
    duration: 1.4,
    opacity: 0,
    y: 30,
    ease: "power3.out",
});

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects-content",
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: true,
    },
    duration: 1.5,
    opacity: 0,
    y: 100,
    stagger: 0.2, // Stagger animation for each project card
    ease: "power3.out",
});

// third-section-stop

// paralax
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "retina_detect": true
});

