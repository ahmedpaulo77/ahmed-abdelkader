import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Results.css';

// مصفوفة البيانات بالمسارات الجديدة للصور المدمجة
const beforeAfter = [
  { id: 1, image: process.env.PUBLIC_URL + '/images/1.jpg', kg: '18 كيلو', months: '4 شهور' },
  { id: 2, image: process.env.PUBLIC_URL + '/images/2.jpg', kg: '12 كيلو', months: '3 شهور' },
  { id: 3, image: process.env.PUBLIC_URL + '/images/3.jpg', kg: '22 كيلو', months: '5 شهور' },
  { id: 4, image: process.env.PUBLIC_URL + '/images/4.jpg', kg: '15 كيلو', months: '4 شهور' },
];

// معرفات فيديوهات اليوتيوب
const videos = [
  { id: 'YOUTUBE_ID_1', title: 'د. أحمد مجدي — نصائح التخسيس الصحي' },
  { id: 'YOUTUBE_ID_2', title: 'د. أحمد مجدي — العلاج الطبيعي والتأهيل' },
];

function Results() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <div className="page-wrapper">
      {/* قسم قبل وبعد */}
      <section className="section results">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">نتائج حقيقية</span>
            <h2 className="section-title">قبل وبعد</h2>
            <p className="section-subtitle">نتائج مرضانا تتكلم عن نفسها</p>
          </div>

          <div ref={ref1} className="results__grid fade-in">
            {beforeAfter.map((item) => (
              <div key={item.id} className="results__card">
                <div className="results__images">
                  <div className="results__img-wrap">
                    <img
                      src={item.image}
                      alt={`نتيجة حالة رقم ${item.id}`}
                      onError={(e) => { 
                        e.target.parentElement.style.background = '#f0f0f0'; 
                        e.target.style.display = 'none'; 
                      }}
                    />
                  </div>
                </div>
                <div className="results__info">
                  <strong>خسارة {item.kg}</strong>
                  <span>في {item.months}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الفيديوهات */}
      <section className="section videos">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">من د. أحمد مجدي</span>
            <h2 className="section-title">فيديوهات طبية</h2>
            <p className="section-subtitle">معلومات وتوعية صحية مباشرة من الدكتور</p>
          </div>

          <div ref={ref2} className="videos__grid fade-in">
            {videos.map((video) => (
              <div key={video.id} className="videos__card">
                <div className="videos__embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '300px', borderRadius: '12px' }}
                  ></iframe>
                </div>
                <p style={{ textAlign: 'center', marginTop: '12px', fontWeight: '600', color: '#333' }}>
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Results;