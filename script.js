// ========== MOBILE MENU ==========
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const othersToggle = document.getElementById('othersToggle');
const othersAccordion = document.getElementById('othersAccordion');
const othersIcon = document.getElementById('othersIcon');
const menuItems = document.querySelectorAll('#mobileMenu .menu-item');

function openMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('translate-y-full', 'opacity-0');
  mobileMenu.classList.add('translate-y-0', 'opacity-100');
  menuItems.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    el.classList.remove('opacity-0', 'translate-y-6');
    el.classList.add('opacity-100', 'translate-y-0');
  });
}

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('translate-y-0', 'opacity-100');
  mobileMenu.classList.add('translate-y-full', 'opacity-0');
  menuItems.forEach(el => {
    el.style.transitionDelay = '0s';
    el.classList.add('opacity-0', 'translate-y-6');
    el.classList.remove('opacity-100', 'translate-y-0');
  });
}

menuBtn?.addEventListener('click', () => {
  if (mobileMenu.classList.contains('translate-y-full')) openMobileMenu();
  else closeMobileMenu();
});
mobileClose?.addEventListener('click', closeMobileMenu);
othersToggle?.addEventListener('click', () => {
  if (!othersAccordion) return;
  if (othersAccordion.style.maxHeight && othersAccordion.style.maxHeight !== '0px') {
    othersAccordion.style.maxHeight = '0px';
    othersIcon?.classList.remove('rotate-180');
  } else {
    othersAccordion.style.maxHeight = othersAccordion.scrollHeight + 'px';
    othersIcon?.classList.add('rotate-180');
  }
});

// ========== SCROLL PROGRESS ==========
const scrollProgress = document.getElementById('scrollProgress');
function updateProgress() {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);

// ========== HEADER ==========
const mainHeader = document.getElementById('mainHeader');
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const curr = window.scrollY;
  mainHeader.classList.toggle('scrolled', curr > 80);
  if (curr > lastScrollY && curr > 400) {
    mainHeader.style.transform = 'translateY(-100%)';
  } else {
    mainHeader.style.transform = 'translateY(0)';
  }
  lastScrollY = curr;
});

// ========== PARALLAX SECTIONS ==========
document.querySelectorAll('[data-speed]').forEach(el => {
  const speed = parseFloat(el.dataset.speed) || 1;
  window.addEventListener('scroll', () => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.style.transform = `translate3d(0, ${(window.scrollY * (speed - 1)) * 0.25}px, 0)`;
    }
  });
});

// ========== BANNER PARALLAX ==========
const banner = document.querySelector('.parallax-banner');
if (banner) {
  window.addEventListener('scroll', () => {
    const rect = banner.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      banner.style.transform = `translate3d(0, ${(window.innerHeight - rect.top) * 0.06}px, 0) scale(1.05)`;
    }
  });
}

// ========== CURSOR ==========
const cursor = document.getElementById("cursor-spotlight");
if (cursor) {
  const outer = cursor.querySelector('.outer');
  const inner = cursor.querySelector('.inner');
  let mx = 0, my = 0, ox = 0, oy = 0, ix = 0, iy = 0;
  document.addEventListener("mousemove", e => { mx = e.clientX - 12.5; my = e.clientY - 12.5; });
  function animCursor() {
    ox += (mx - ox) * 0.2; oy += (my - oy) * 0.2;
    ix += (ox - ix) * 0.15; iy += (oy - iy) * 0.15;
    outer.style.transform = `translate3d(${ox}px, ${oy}px, 0)`;
    inner.style.transform = `translate3d(${ix + 10}px, ${iy + 10}px, 0)`;
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => { outer.style.width = '40px'; outer.style.height = '40px'; outer.style.borderColor = '#e09e23'; });
    el.addEventListener('mouseleave', () => { outer.style.width = '25px'; outer.style.height = '25px'; outer.style.borderColor = '#e09e23'; });
  });
}

// ========== HERO SLIDER ==========
const slides = document.querySelectorAll('.hero-slide');
const pagination = document.getElementById('hero-pagination');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

if (pagination) {
  let index = 0, autoplay;
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot';
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    pagination.appendChild(dot);
  });
  const dots = document.querySelectorAll('.hero-dot');

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === i);
      const video = slide.querySelector('video');
      if (video) { idx === i ? video.play().catch(() => {}) : video.pause(); }
      const img = slide.querySelector('img');
      if (img) {
        if (idx === i) { img.style.animation = 'none'; img.offsetHeight; img.style.animation = 'kenBurns 8s ease-in-out forwards'; }
        else { img.style.animation = 'none'; img.style.transform = 'scale(1)'; }
      }
    });
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
    index = i;
  }

  function nextSlideFn() { showSlide((index + 1) % slides.length); }
  function prevSlideFn() { showSlide((index - 1 + slides.length) % slides.length); }
  function goToSlide(i) { showSlide(i); resetAutoplay(); }
  function resetAutoplay() { clearInterval(autoplay); autoplay = setInterval(nextSlideFn, 6000); }

  nextBtn?.addEventListener('click', () => { nextSlideFn(); resetAutoplay(); });
  prevBtn?.addEventListener('click', () => { prevSlideFn(); resetAutoplay(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { prevSlideFn(); resetAutoplay(); }
    if (e.key === 'ArrowRight') { nextSlideFn(); resetAutoplay(); }
  });
  showSlide(0);
  autoplay = setInterval(nextSlideFn, 6000);
}

// ========== SCROLL REVEAL ==========
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(el => revealObserver.observe(el));

// ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target);
    const delay = parseInt(el.dataset.delay) || 0;
    setTimeout(() => {
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 40);
    }, delay);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ========== SCROLL CONTAINERS ==========
document.querySelectorAll('.scroll-section, #filmScroller').forEach(section => {
  const container = section.classList.contains('scroll-section') ? section.querySelector('.scroll-container') : section;
  const leftBtn = section.parentElement?.querySelector('.scroll-left') || section.closest('div')?.querySelector('.scroll-left');
  const rightBtn = section.parentElement?.querySelector('.scroll-right') || section.closest('div')?.querySelector('.scroll-right');
  if (container && leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => container.scrollBy({ left: -350, behavior: 'smooth' }));
    rightBtn.addEventListener('click', () => container.scrollBy({ left: 350, behavior: 'smooth' }));
  }
});

// ========== FLIP TEXT ==========
const flipObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); flipObserver.unobserve(entry.target); } });
}, { threshold: 0.4 });
document.querySelectorAll('[data-flip]').forEach(el => flipObserver.observe(el));

// ========== MARQUEE ==========
const imageSets = {
  a: ["public_optimized/ml1.webp", "public_optimized/ml2.webp", "public_optimized/ml3.webp", "public_optimized/ml4.webp", "public_optimized/ml5.webp", "public_optimized/ml6.webp", "public_optimized/ml7.webp", "public_optimized/ml8.webp", "public_optimized/ml9.webp", "public_optimized/ml10.webp", "public_optimized/ml11.webp", "public_optimized/ml13.webp", "public_optimized/ml14.webp"],
  b: ["public_optimized/rr1.webp", "public_optimized/rr2.webp", "public_optimized/rr3.webp", "public_optimized/rr4.webp", "public_optimized/rr5.webp", "public_optimized/rr6.webp", "public_optimized/rr7.webp", "public_optimized/rr8.webp"],
};
const tracks = document.querySelectorAll(".marquee-track");
const archiveButtons = document.querySelectorAll(".archive-btn");

function renderSet(key) {
  tracks.forEach(track => {
    track.innerHTML = "";
    [...imageSets[key], ...imageSets[key]].forEach(src => {
      const item = document.createElement("div");
      item.className = "marquee-item";
      item.innerHTML = `<img src="${src}" loading="lazy" />`;
      track.appendChild(item);
    });
  });
}
archiveButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    archiveButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSet(btn.dataset.set);
  });
});
if (tracks.length > 0) renderSet("a");

// ========== LENIS SMOOTH SCROLL ==========
const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), orientation: 'vertical', smoothWheel: true });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// ========== HERO MOUSE GLOW ==========
const heroGlow = document.getElementById('heroGlow');
const heroSection = document.getElementById('heroSection');
if (heroGlow && heroSection) {
  heroSection.addEventListener('mousemove', e => {
    const rect = heroSection.getBoundingClientRect();
    heroGlow.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
    heroGlow.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
  });
}

// ========== IMAGE CLIP REVEAL ==========
const revealClipObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('active'); revealClipObserver.unobserve(entry.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal-clip').forEach(el => revealClipObserver.observe(el));

// ========== MAGNETIC BUTTONS ==========
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => backToTop.classList.toggle('active', window.scrollY > 1000));
  backToTop.addEventListener('click', () => { if (window.lenis) { lenis.scrollTo(0); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } });
}
