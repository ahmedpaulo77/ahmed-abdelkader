import { messages, waLink } from '../utils/whatsapp';
import './Hero.css';

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
            <a href="#booking" className="btn btn-gold">
              احجز استشارتك
            </a>
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.012 2.898a9.825 9.825 0 012.893 7.038c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              تواصل عبر واتساب
            </a>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-item">
              <strong>+15</strong>
              <span>سنة خبرة</span>
            </div>
            <div className="hero__trust-divider"></div>
            <div className="hero__trust-item">
              <strong>3</strong>
              <span>فروع</span>
            </div>
            <div className="hero__trust-divider"></div>
            <div className="hero__trust-item">
              <strong>+10K</strong>
              <span>مريض سعيد</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-icon">🏥</div>
            <h3>مركز طبي متكامل</h3>
            <p>أحدث الأجهزة والبروتوكولات العلاجية</p>
          </div>
          <div className="hero__card hero__card--float1">
            <span>⚖️</span>
            <div>
              <strong>تخسيس</strong>
              <small>برامج مخصصة</small>
            </div>
          </div>
          <div className="hero__card hero__card--float2">
            <span>💪</span>
            <div>
              <strong>علاج طبيعي</strong>
              <small>تأهيل شامل</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
