import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaVideo } from 'react-icons/fa6'; // استيراد أيقونة الفيديو لزوم
import './Navbar.css';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'عن العيادة' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/obesity', label: 'التخسيس والسمنة' },
  { href: '/results', label: 'قبل وبعد' },
  { href: '/branches', label: 'فروعنا' },
  { href: '/bmi', label: 'حاسبة BMI' },
  { href: '/booking', label: 'احجز موعد' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">H</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Hayah Clinic</span>
            <span className="navbar__logo-sub">Dr. Ahmed Magdy</span>
          </div>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={location.pathname === link.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* سكشن الأزرار التفاعلية الـ CTA */}
        <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* زرار دخول Zoom مخصص - استبدل الرابط برابط غرفتك الخاص في زوم */}
          <a 
            href="https://zoom.us/j/YOUR_ZOOM_MEETING_ID" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn navbar__zoom-btn"
            title="دخول عيادة زوم الافتراضية"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#2d8cff', /* لون زوم الأزرق الرسمي */
              color: '#ffffff',
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}
          >
            <FaVideo />
            إستشارة زووم
          </a>

          <Link to="/booking" className="btn btn-gold navbar__cta">
            احجز الآن
          </Link>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;