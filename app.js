const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.quote', {y:'0%', duration: 3, stagger: 0.05});
tl.to('.slider', {y:'-100%', duration: 1.5, delay: 0.5});
tl.to('.beginning', {y: '-100%', duration: 1}, "-=1");
tl.fromTo('.name', {opacity:0}, {opacity: 1, duration:1});
tl.fromTo('.pp', {opacity:0}, {opacity: 1, duration:1}, "-=1");
tl.fromTo('.icons', {opacity:0}, {opacity: 1, duration:1});
tl.fromTo('.navbar', {opacity:0}, {opacity: 1, duration:1});

var navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    var targetId = this.getAttribute('href').substring(1);

    var targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
