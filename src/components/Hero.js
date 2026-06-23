import React from 'react';
import { messages, waLink } from '../utils/whatsapp';
import './Hero.css';
import clinicImg from '../images/1.jpg';

// استيراد الأيكونز الجديدة للـ Hero
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa6';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-pattern"></div>
        <div className="hero__bg-gradient"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__badge">✦ عيادة متخصصة في التخسيس والعلاج الطبيعي</span>
          <h1 className="hero__title">
            Hayah Clinic
            <span className="hero__title-accent">د. أحمد مجدي</span>
          </h1>
          <p className="hero__desc">
            رحلتك نحو حياة صحية تبدأ هنا. برامج تخسيس علمية، علاج طبيعي متقدم،
            وتأهيل شامل — في 3 فروع ببنها والتجمع الخامس والشيخ زايد.
          </p>
          <div className="hero__actions">
            <a href="#booking" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <FaCalendarCheck />
              احجز استشارتك
            </a>
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaWhatsapp size={20} />
              تواصل عبر واتساب
            </a>
          </div>
        </div>

        {/* الكارد المرئي ممتد ومدمج مع الباكجروند فوقها بطريقة غير مقسومة */}
        <div className="hero__visual">
          <img
            src={clinicImg}
            alt="Hayah Clinic"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;