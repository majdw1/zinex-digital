
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('[data-animate]').forEach(function(el) {
    var delay = parseFloat(el.getAttribute('data-delay') || '0');
    gsap.fromTo(el,
      {opacity: 0, y: 24},
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      }
    );
  });
}
