import { useScrollReveal } from '../hooks/useScrollReveal';
import { messages, waLink } from '../utils/whatsapp';
import './Services.css';

const PUB = process.env.PUBLIC_URL;

const services = [
  {
    id: 'diet',
    img: PUB + '/images/s1.jpg',
    icon: '⚖️',
    title: 'برامج التخسيس والتغذية العلاجية',
    desc: 'خطط غذائية علمية مخصصة مع متابعة دورية لتحقيق وزن مثالي صحي.',
    messageKey: 'diet',
  },
  {
    id: 'physio',
    img: PUB + '/images/s2.jpg',
    icon: '💪',
    title: 'العلاج الطبيعي والتأهيل',
    desc: 'جلسات علاج طبيعي متخصصة للتأهيل بعد الإصابات والعمليات الجراحية.',
    messageKey: 'physio',
  },
  {
    id: 'obesity',
    img: PUB + '/images/s3.jpg',
    icon: '🎯',
    title: 'علاج السمنة والوزن الزائد',
    desc: 'برامج متكاملة لعلاج السمنة باستخدام أحدث البروتوكولات الطبية.',
    messageKey: 'diet',
  },
  {
    id: 'lpg',
    img: PUB + '/images/s4.jpg',
    icon: '✨',
    title: 'جلسات LPG / تكسير الدهون',
    desc: 'تقنية LPG المتقدمة لتكسير الدهون ونحت الجسم بدون جراحة.',
    messageKey: 'lpg',
  },
  {
    id: 'back',
    img: PUB + '/images/s5.jpg',
    icon: '🦴',
    title: 'علاج آلام الظهر والرقبة',
    desc: 'علاج متخصص لآلام العمود الفقري والرقبة بأحدث التقنيات.',
    messageKey: 'physio',
  },
  {
    id: 'rehab',
    img: PUB + '/images/s6.jpg',
    icon: '🏃',
    title: 'التأهيل بعد الإصابات',
    desc: 'برامج تأهيل شاملة للعودة للحياة الطبيعية بعد الإصابات.',
    messageKey: 'physio',
  },
  {
    id: 'joints',
    img: PUB + '/images/s7.jpg',
    icon: '🦵',
    title: 'علاج خشونة المفاصل',
    desc: 'علاج فعّال لخشونة المفاصل وتخفيف الألم وتحسين الحركة.',
    messageKey: 'physio',
  },
  {
    id: 'nutrition',
    img: PUB + '/images/s8.jpg',
    icon: '🥗',
    title: 'استشارات تغذية ومتابعة',
    desc: 'استشارات غذائية دورية مع خطط متابعة شخصية لكل مريض.',
    messageKey: 'diet',
  },
  {
    id: 'pregnancy',
    img: PUB + '/images/s9.jpg',
    icon: '🤰',
    title: 'برامج ما قبل وبعد الولادة',
    desc: 'برامج متخصصة للحفاظ على وزن صحي قبل وبعد الولادة.',
    messageKey: 'diet',
  },
];

function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">خدماتنا</span>
          <h2 className="section-title">خدمات طبية متكاملة</h2>
          <p className="section-subtitle">
            نقدم مجموعة شاملة من خدمات التخسيس والعلاج الطبيعي بأعلى معايير الجودة
          </p>
        </div>

        <div ref={ref} className="services__grid fade-in">
          {services.map((service) => (
            <div key={service.id} className="services__card">
              <div style={{ height: '180px', overflow: 'hidden', borderRadius: '12px 12px 0 0', background: '#f5f5f5' }}>
                <img
                  src={service.img}
                  alt={service.title}
                  onError={(e) => { e.target.style.display = 'none'; }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <span className="services__icon">{service.icon}</span>
                <h3 className="services__title">{service.title}</h3>
                <p className="services__desc">{service.desc}</p>
                <a
                  href={waLink(messages[service.messageKey])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__link"
                >
                  استفسر عبر واتساب ←
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;