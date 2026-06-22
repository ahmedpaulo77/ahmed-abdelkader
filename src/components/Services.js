import { useScrollReveal } from '../hooks/useScrollReveal';
import { messages, waLink } from '../utils/whatsapp';
import './Services.css';

const services = [
  {
    id: 'diet',
    icon: '⚖️',
    title: 'برامج التخسيس والتغذية العلاجية',
    desc: 'خطط غذائية علمية مخصصة مع متابعة دورية لتحقيق وزن مثالي صحي.',
    messageKey: 'diet',
  },
  {
    id: 'physio',
    icon: '💪',
    title: 'العلاج الطبيعي والتأهيل',
    desc: 'جلسات علاج طبيعي متخصصة للتأهيل بعد الإصابات والعمليات الجراحية.',
    messageKey: 'physio',
  },
  {
    id: 'obesity',
    icon: '🎯',
    title: 'علاج السمنة والوزن الزائد',
    desc: 'برامج متكاملة لعلاج السمنة باستخدام أحدث البروتوكولات الطبية.',
    messageKey: 'diet',
  },
  {
    id: 'lpg',
    icon: '✨',
    title: 'جلسات LPG / تكسير الدهون',
    desc: 'تقنية LPG المتقدمة لتكسير الدهون ونحت الجسم بدون جراحة.',
    messageKey: 'lpg',
  },
  {
    id: 'back',
    icon: '🦴',
    title: 'علاج آلام الظهر والرقبة',
    desc: 'علاج متخصص لآلام العمود الفقري والرقبة بأحدث التقنيات.',
    messageKey: 'physio',
  },
  {
    id: 'rehab',
    icon: '🏃',
    title: 'التأهيل بعد الإصابات',
    desc: 'برامج تأهيل شاملة للعودة للحياة الطبيعية بعد الإصابات.',
    messageKey: 'physio',
  },
  {
    id: 'joints',
    icon: '🦵',
    title: 'علاج خشونة المفاصل',
    desc: 'علاج فعّال لخشونة المفاصل وتخفيف الألم وتحسين الحركة.',
    messageKey: 'physio',
  },
  {
    id: 'nutrition',
    icon: '🥗',
    title: 'استشارات تغذية ومتابعة',
    desc: 'استشارات غذائية دورية مع خطط متابعة شخصية لكل مريض.',
    messageKey: 'diet',
  },
  {
    id: 'pregnancy',
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
