export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    initScrollReveal();
    initCounter();
  } else {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
  }

  initFaq();
  initHeaderScroll();
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function initCounter() {
  const counters = document.querySelectorAll<HTMLElement>('[data-counter]');

  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const suffix = counter.dataset.counterSuffix ?? '';
    const prefix = counter.dataset.counterPrefix ?? '';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animateCounter(counter, target, prefix, suffix);
          observer.unobserve(counter);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);
  });
}

function animateCounter(
  element: HTMLElement,
  target: number,
  prefix: string,
  suffix: string
) {
  const duration = 1500;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = `${prefix}${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}

function initFaq() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-faq-toggle]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = button.dataset.faqToggle;
      const answer = document.querySelector<HTMLElement>(`[data-faq-answer="${index}"]`);
      const icon = button.querySelector('[data-faq-icon]');
      const isOpen = answer?.classList.contains('is-open');

      document.querySelectorAll('[data-faq-answer]').forEach((item) => {
        item.classList.remove('is-open');
      });
      document.querySelectorAll('[data-faq-toggle]').forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('[data-faq-icon]')?.classList.remove('rotate-45');
      });

      if (!isOpen && answer) {
        answer.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        icon?.classList.add('rotate-45');
      }
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', initAnimations);
