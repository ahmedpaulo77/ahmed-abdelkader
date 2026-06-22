import './Footer.css';

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
              <li><a href="#about">عن العيادة</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#branches">فروعنا</a></li>
              <li><a href="#bmi">حاسبة BMI</a></li>
              <li><a href="#booking">احجز موعد</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>فروعنا</h4>
            <ul>
              <li>📍 بنها — القليوبية</li>
              <li>📍 التجمع الخامس — القاهرة</li>
              <li>📍 الشيخ زايد — 6 أكتوبر</li>
            </ul>
          </div>

          <div className="footer__social">
            <h4>تابعنا</h4>
            <div className="footer__social-links">
              <a
                href="https://web.facebook.com/Elhayadietclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/reel/C-gQopPsY7N/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
              >
                Instagram
              </a>
            </div>
            <p className="footer__hours">
              🕐 السبت - الخميس: 9 ص - 9 م
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
