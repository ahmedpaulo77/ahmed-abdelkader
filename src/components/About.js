import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref} className="about__grid fade-in">
          <div className="about__image">
            <div className="about__image-frame">
              <div className="about__image-placeholder">
                <span>👨‍⚕️</span>
                <p>د. أحمد مجدي</p>
              </div>
            </div>
            <div className="about__experience-badge">
              <strong>+15</strong>
              <span>سنة خبرة</span>
            </div>
          </div>

          <div className="about__content">
            <span className="section-tag">عن العيادة</span>
            <h2 className="section-title about__title">Hayah Clinic — رؤية صحية متكاملة</h2>
            <p className="about__text">
              Hayah Clinic تحت إشراف د. أحمد مجدي، من أبرز المراكز المتخصصة في التخسيس
              والعلاج الطبيعي في مصر. نقدم برامج علمية مبنية على أحدث الأبحاث الطبية،
              مع فريق متكامل وأجهزة حديثة في 3 فروع استراتيجية.
            </p>
            <p className="about__text">
              نؤمن أن كل مريض له قصة مختلفة، ولذلك نصمم خطة علاجية فردية تناسب
              احتياجاته — سواء كان هدفه خسارة الوزن، التأهيل بعد إصابة، أو
              تحسين جودة حياته.
            </p>

            <div className="about__features">
              <div className="about__feature">
                <span className="about__feature-icon">🎯</span>
                <div>
                  <h4>خطط علاجية مخصصة</h4>
                  <p>برنامج فريد لكل مريض بناءً على حالته الصحية</p>
                </div>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">🔬</span>
                <div>
                  <h4>أحدث التقنيات</h4>
                  <p>أجهزة LPG وتقنيات علاج طبيعي متقدمة</p>
                </div>
              </div>
              <div className="about__feature">
                <span className="about__feature-icon">📍</span>
                <div>
                  <h4>3 فروع في مصر</h4>
                  <p>بنها · التجمع الخامس · الشيخ زايد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
