import React, { useState, useEffect, useCallback } from 'react';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollReveal';
import './Results.css';

const PUB = process.env.PUBLIC_URL;

const beforeAfter = [
  { id: 1, image: PUB + '/images/1.jpg',      kg: '18 كيلو', months: '4 شهور' },
  { id: 2, image: PUB + '/images/2.jpg',      kg: '12 كيلو', months: '3 شهور' },
  { id: 3, image: PUB + '/images/3.jpg',      kg: '22 كيلو', months: '5 شهور' },
  { id: 4, image: PUB + '/images/4.jpg',      kg: '15 كيلو', months: '4 شهور' },
  { id: 5, image: PUB + '/images/after1.jpg', kg: '20 كيلو', months: '5 شهور' },
  { id: 6, image: PUB + '/images/before1.jpg',kg: '14 كيلو', months: '3 شهور' },
  { id: 7, image: PUB + '/images/before2.jpg',kg: '17 كيلو', months: '4 شهور' },
  { id: 8, image: PUB + '/images/before5.jpg',kg: '10 كيلو', months: '2 شهور' },
];

const videos = [
  {
    id: 1,
    url: 'https://www.facebook.com/share/r/14o5Lp2R4um/',
    title: 'د. أحمد محمد — نصائح التخسيس الصحي',
    thumb: PUB + '/images/1.jpg',
  },
  {
    id: 2,
    url: 'https://www.facebook.com/share/v/1BVhfPp1Bx/',
    title: 'د. أحمد محمد — العلاج الطبيعي والتأهيل',
    thumb: PUB + '/images/2.jpg',
  },
];

/* ════════════════════════════════════════════
   Lightbox Component
   ════════════════════════════════════════════ */
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent]   = useState(startIndex);
  const [animDir, setAnimDir]   = useState(null); // 'next' | 'prev'
  const [isAnim, setIsAnim]     = useState(false);

  const total = images.length;

  const go = useCallback((dir) => {
    if (isAnim) return;
    setAnimDir(dir);
    setIsAnim(true);
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'next'
          ? (prev + 1) % total
          : (prev - 1 + total) % total
      );
      setAnimDir(null);
      setIsAnim(false);
    }, 320);
  }, [isAnim, total]);

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   go('next');   // RTL: left = next
      if (e.key === 'ArrowRight')  go('prev');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [go, onClose]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const item = images[current];

  return (
    <div className="lb-overlay" onClick={onClose}>
      {/* close btn */}
      <button className="lb-close" onClick={onClose} aria-label="إغلاق">✕</button>

      {/* counter */}
      <div className="lb-counter">{current + 1} / {total}</div>

      {/* prev arrow */}
      <button
        className="lb-arrow lb-arrow--prev"
        onClick={(e) => { e.stopPropagation(); go('prev'); }}
        aria-label="السابق"
      >
        ‹
      </button>

      {/* image box */}
      <div
        className={`lb-box ${animDir ? `lb-box--${animDir}` : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current}
          src={item.image}
          alt={`نتيجة ${current + 1}`}
          className="lb-img"
        />
        <div className="lb-caption">
          <span className="lb-caption__badge">🏆 خسارة {item.kg}</span>
          <span className="lb-caption__time">⏱ {item.months}</span>
        </div>
      </div>

      {/* next arrow */}
      <button
        className="lb-arrow lb-arrow--next"
        onClick={(e) => { e.stopPropagation(); go('next'); }}
        aria-label="التالي"
      >
        ›
      </button>

      {/* thumbnail strip */}
      <div className="lb-thumbs" onClick={(e) => e.stopPropagation()}>
        {images.map((img, i) => (
          <button
            key={img.id}
            className={`lb-thumb ${i === current ? 'lb-thumb--active' : ''}`}
            onClick={() => { if (!isAnim) setCurrent(i); }}
          >
            <img src={img.image} alt={`thumb ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   Results Page
   ════════════════════════════════════════════ */
function Results() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const headerRef = useScrollReveal();
  const gridRef   = useStaggerReveal();
  const vidRef    = useScrollReveal();

  return (
    <div className="page-wrapper">

      {/* ── قسم قبل وبعد ── */}
      <section className="section results">
        <div className="container">
          <div ref={headerRef} className="section-header fade-in">
            <span className="section-tag">نتائج حقيقية</span>
            <h2 className="section-title">قبل وبعد</h2>
            <p className="section-subtitle">نتائج مرضانا تتكلم عن نفسها — اضغط على أي صورة لتكبيرها</p>
          </div>

          <div ref={gridRef} className="results__grid">
            {beforeAfter.map((item, i) => (
              <div
                key={item.id}
                className="results__card"
                onClick={() => setLightboxIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(i)}
                aria-label={`عرض نتيجة ${i + 1}`}
              >
                <div className="results__img-wrap">
                  <img
                    src={item.image}
                    alt={`نتيجة حالة رقم ${item.id}`}
                    onError={(e) => {
                      e.target.parentElement.style.background = '#1a3a32';
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* zoom icon overlay */}
                  <div className="results__zoom-icon" aria-hidden="true">🔍</div>
                </div>
                <div className="results__info">
                  <strong>خسارة {item.kg}</strong>
                  <span>{item.months}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── قسم الفيديوهات ── */}
      <section className="section videos">
        <div className="container">
          <div ref={vidRef} className="section-header fade-in">
            <span className="section-tag">من د. أحمد محمد</span>
            <h2 className="section-title">فيديوهات طبية</h2>
            <p className="section-subtitle">معلومات وتوعية صحية مباشرة من الدكتور</p>
          </div>

          <div className="videos__grid">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="videos__card"
                aria-label={`مشاهدة: ${video.title}`}
              >
                <div className="videos__thumb-wrap">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="videos__thumb"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="videos__overlay">
                    <div className="videos__play-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="videos__fb-label">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      شاهد على فيسبوك
                    </span>
                  </div>
                </div>
                <p className="videos__title">{video.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={beforeAfter}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

    </div>
  );
}

export default Results;
