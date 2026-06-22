import { useScrollReveal } from '../hooks/useScrollReveal';
import { messages, waLink } from '../utils/whatsapp';
import './Branches.css';

const branches = [
  {
    id: 'banha',
    name: 'فرع بنها',
    address: 'بنها، القليوبية — مركز Hayah Clinic الرئيسي',
    hours: 'السبت - الخميس: 9 ص - 9 م',
    messageKey: 'banha',
    mapUrl: 'https://maps.google.com/?q=Banha,Egypt',
  },
  {
    id: 'tagamoa',
    name: 'فرع التجمع الخامس',
    address: 'التجمع الخامس، القاهرة الجديدة',
    hours: 'السبت - الخميس: 9 ص - 9 م',
    messageKey: 'tagamoa',
    mapUrl: 'https://maps.google.com/?q=Fifth+Settlement,Cairo',
  },
  {
    id: 'zayed',
    name: 'فرع الشيخ زايد',
    address: 'الشيخ زايد، 6 أكتوبر',
    hours: 'السبت - الخميس: 9 ص - 9 م',
    messageKey: 'zayed',
    mapUrl: 'https://maps.google.com/?q=Sheikh+Zayed+City,Egypt',
  },
];

function Branches() {
  const ref = useScrollReveal();

  return (
    <section id="branches" className="section branches">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">فروعنا</span>
          <h2 className="section-title">3 فروع لخدمتكم</h2>
          <p className="section-subtitle">
            نوفر لكم أقرب فرع — في بنها والتجمع الخامس والشيخ زايد
          </p>
        </div>

        <div ref={ref} className="branches__grid fade-in">
          {branches.map((branch) => (
            <div key={branch.id} className="branches__card">
              <div className="branches__header">
                <span className="branches__icon">📍</span>
                <h3 className="branches__name">{branch.name}</h3>
              </div>
              <p className="branches__address">{branch.address}</p>
              <p className="branches__hours">🕐 {branch.hours}</p>
              <div className="branches__actions">
                <a
                  href={waLink(messages[branch.messageKey])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp branches__btn"
                >
                  احجز في هذا الفرع
                </a>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline branches__btn"
                >
                  عرض على الخريطة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Branches;
