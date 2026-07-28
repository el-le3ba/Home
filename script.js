// اللعبة - El Le3ba | تفاعلات بسيطة للصفحة

// سنة الفوتر أوتوماتيك
document.getElementById('year').textContent = new Date().getFullYear();

// الهيدر بياخد حدود لما تنزل
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ظهور العناصر تدريجياً مع التمرير
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el, i) => {
  // تأخير بسيط متدرّج للعناصر جنب بعض
  el.style.transitionDelay = `${(i % 6) * 60}ms`;
  io.observe(el);
});
