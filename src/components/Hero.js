import React from 'react';
import { Link } from 'react-router-dom';
import { messages, waLink } from '../utils/whatsapp';
import './Hero.css';
import clinicImg from '../images/1.jpg';

import { FaWhatsapp, FaCalendarCheck, FaStar, FaUserDoctor, FaLocationDot } from 'react-icons/fa6';

// 10 particles for the background drift
const PARTICLES = Array.from({ length: 10 });

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Animated background layers */}
      <div className="hero__bg">
        <div className="hero__bg-pattern"></div>
        <div className="hero__bg-gradient"></div>
      </div>

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map((_, i) => (
          <span key={i} className="hero__particle"></span>
        ))}
      </div>

      <div className="container hero__content">

        {/* ── Text column ── */}
        <div className="hero__text">
          <span className="hero__badge">
            ✦ عيادة متخصصة في التخسيس والعلاج الطبيعي
          </span>

          <h1 className="hero__title">
            Hayah Clinic
            <span className="hero__title-accent">د. أحمد مجدي</span>
          </h1>

          <p className="hero__desc">
            رحلتك نحو حياة صحية تبدأ هنا. برامج تخسيس علمية، علاج طبيعي متقدم،
            وتأهيل شامل — في 3 فروع ببنها والتجمع الخامس والشيخ زايد.
          </p>

          <div className="hero__actions">
            <Link to="/booking" className="btn btn-gold">
              <FaCalendarCheck />
              احجز استشارتك
            </Link>
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp size={20} />
              تواصل عبر واتساب
            </a>
          </div>

          {/* Mini stats row */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">+15</span>
              <span className="hero__stat-label">سنة خبرة</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">+10k</span>
              <span className="hero__stat-label">مريض سعيد</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">3</span>
              <span className="hero__stat-label">فروع</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">+50</span>
              <span className="hero__stat-label">أخصائي</span>
            </div>
          </div>
        </div>

        {/* ── Visual column ── */}
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img src={clinicImg} alt="Hayah Clinic — د. أحمد مجدي" />
          </div>

          {/* Floating card 1 — rating */}
          <div className="hero__float-card hero__float-card--1">
            <span className="hero__float-icon">
              <FaStar style={{ color: '#f5c842' }} />
            </span>
            <div className="hero__float-label">
              <strong>4.9 / 5</strong>
              <small>تقييم المرضى</small>
            </div>
            <div className="hero__ping">
              <div className="hero__ping-dot"></div>
            </div>
          </div>

          {/* Floating card 2 — patients */}
          <div className="hero__float-card hero__float-card--2">
            <span className="hero__float-icon">
              <FaUserDoctor style={{ color: '#7dd3fc' }} />
            </span>
            <div className="hero__float-label">
              <strong>+10,000 مريض</strong>
              <small>تحت رعايتنا</small>
            </div>
          </div>

          {/* Floating card 3 — branches */}
          <div className="hero__float-card hero__float-card--3">
            <span className="hero__float-icon">
              <FaLocationDot style={{ color: '#86efac' }} />
            </span>
            <div className="hero__float-label">
              <strong>3 فروع</strong>
              <small>بنها · التجمع · زايد</small>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">scroll</span>
        <div className="hero__scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;
