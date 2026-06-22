import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'عن العيادة' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#branches', label: 'فروعنا' },
  { href: '#bmi', label: 'حاسبة BMI' },
  { href: '#booking', label: 'احجز موعد' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-icon">H</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Hayah Clinic</span>
            <span className="navbar__logo-sub">Dr. Ahmed Magdy</span>
          </div>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#booking" className="btn btn-gold navbar__cta">
          احجز الآن
        </a>

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
