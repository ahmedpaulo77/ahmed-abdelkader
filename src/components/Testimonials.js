import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    name: 'سارة محمد',
    text: 'خسرت 18 كيلو في 4 شهور بفضل برنامج Hayah Clinic. الدكتور أحمد مجدي محترف جداً والمتابعة ممتازة.',
    rating: 5,
    service: 'برنامج التخسيس',
  },
  {
    name: 'أحمد حسن',
    text: 'بعد عملية الركبة، التأهيل في العيادة رجّعني للحركة الطبيعية. فريق العلاج الطبيعي متميز.',
    rating: 5,
    service: 'علاج طبيعي',
  },
  {
    name: 'نورا إبراهيم',
    text: 'جلسات LPG غيّرت شكل جسمي بدون أي ألم. أنصح أي حد عايز نتائج حقيقية.',
    rating: 5,
    service: 'جلسات LPG',
  },
  {
    name: 'محمد علي',
    text: 'فرع التجمع الخامس قريب من بيتي والخدمة في مستوى عالي. احترافية من أول زيارة.',
    rating: 5,
    service: 'استشارة عامة',
  },
];

function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">آراء المرضى</span>
          <h2 className="section-title">ماذا يقول مرضانا؟</h2>
          <p className="section-subtitle">
            ثقة آلاف المرضى هي أكبر دليل على جودة خدماتنا
          </p>
        </div>

        <div ref={ref} className="testimonials__grid fade-in">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonials__card">
              <div className="testimonials__stars">
                {'★'.repeat(item.rating)}
              </div>
              <p className="testimonials__text">"{item.text}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
