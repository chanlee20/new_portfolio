const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y:'0%', duration: 1, stagger: 0.05});
tl.to('.slider', {y:'-100%', duration: 1.5, delay: 0.5});
tl.to('.beginning', {y: '-100%', duration: 1}, "-=1");
tl.fromTo('.name', {opacity:0}, {opacity: 1, duration:1});
tl.fromTo('.pp', {opacity:0}, {opacity: 1, duration:1}, "-=1");
tl.fromTo('.icons', {opacity:0}, {opacity: 1, duration:1});
tl.fromTo('.navbar', {opacity:0}, {opacity: 1, duration:1});
