import React from 'react';
import './Footer.css';

// استيراد أيكونز الفروع، السوشيال ميديا، ومواعيد العمل
import { FaLocationDot, FaFacebook, FaInstagram, FaClock, FaChevronLeft } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">H</span>
              <div>
                <strong>Hayah Clinic</strong>
                <span>Dr. Ahmed Magdy</span>
              </div>
            </div>
            <p className="footer__desc">
              عيادة متخصصة في التخسيس والعلاج الطبيعي — 3 فروع في بنها والتجمع الخامس والشيخ زايد.
            </p>
          </div>

          <div className="footer__links">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#about" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><FaChevronLeft size={10} /> عن العيادة</a></li>
              <li><a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><FaChevronLeft size={10} /> خدماتنا</a></li>
              <li><a href="#branches" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><FaChevronLeft size={10} /> فروعنا</a></li>
              <li><a href="#bmi" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><FaChevronLeft size={10} /> حاسبة BMI</a></li>
              <li><a href="#booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><FaChevronLeft size={10} /> احجز موعد</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>فروعنا</h4>
            <ul>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <FaLocationDot style={{ color: 'var(--color-primary, #b8860b)' }} /> بنها — القليوبية
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <FaLocationDot style={{ color: 'var(--color-primary, #b8860b)' }} /> التجمع الخامس — القاهرة
              </li>
              <li style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <FaLocationDot style={{ color: 'var(--color-primary, #b8860b)' }} /> الشيخ زايد — 6 أكتوبر
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <h4>تابعنا</h4>
            <div className="footer__social-links" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <a
                href="https://web.facebook.com/Elhayadietclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 12px', background: '#1877f2', color: '#fff', borderRadius: '8px', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                <FaFacebook size={18} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/reel/C-gQopPsY7N/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 12px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#fff', borderRadius: '8px', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                <FaInstagram size={18} /> Instagram
              </a>
            </div>
            <p className="footer__hours" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <FaClock style={{ color: 'var(--color-primary, #b8860b)' }} /> السبت - الخميس: 9 ص - 9 م
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Hayah Clinic - Dr. Ahmed Magdy. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;