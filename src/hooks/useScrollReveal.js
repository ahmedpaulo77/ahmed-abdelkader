import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — يضيف class 'visible' لما العنصر يظهر في الشاشة
 * @param {number} threshold  — نسبة الظهور قبل ما يتفعّل (افتراضي 0.12)
 * @param {string} animation  — اسم الـ class اللي هيتضاف (افتراضي 'fade-in')
 */
export function useScrollReveal(threshold = 0.12, animation = 'fade-in') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // أضف الـ animation class لو مش موجود
    if (!el.classList.contains(animation)) {
      el.classList.add(animation);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, animation]);

  return ref;
}

/**
 * useStaggerReveal — لكل الـ children بـ delay متصاعد
 * يرجع ref تحطه على الـ parent
 */
export function useStaggerReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children);

    // ضيف initial hidden state لكل child
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(40px)';
      child.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useSlideReveal — slide من اليمين أو الشمال
 * @param {'right'|'left'} direction
 */
export function useSlideReveal(direction = 'right', threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromX = direction === 'right' ? '60px' : '-60px';
    el.style.opacity = '0';
    el.style.transform = `translateX(${fromX})`;
    el.style.transition = 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateX(0)';
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, threshold]);

  return ref;
}

/**
 * useScaleReveal — scale من صغير لكبير
 */
export function useScaleReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'scale(0.88)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'scale(1)';
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
