import React, { useState } from 'react';
import { FaWhatsapp, FaXmark, FaCircleCheck } from 'react-icons/fa6';
import { messages, waLink } from '../utils/whatsapp';
import './ObesityService.css';

const PUB = process.env.PUBLIC_URL;

const obesityData = [
  {
    id: 'lpg',
    title: 'جلسات LPG ونحت الجسم',
    shortDesc: 'أحدث تقنية فرنسية لشد الترهلات وتنسيق القوام بدون أي ألم.',
    img: PUB + '/images/s4.jpg', // تأكد من وجود الصور في فولدر الـ public بنفس الأسماء أو غيرها
    badge: 'الأكثر طلباً',
    fullDetails: {
      benefits: ['نحت الخصر وتنسيق القوام بالكامل', 'التخلص من السيلوليت وتحسين مرونة الجلد', 'تنشيط الدورة الدموية واللمفاوية'],
      duration: 'من 30 إلى 45 دقيقة للجلسة',
      suitability: 'مناسب لمن يعانون من ترهلات بعد نزول الوزن أو الولادة.',
    }
  },
  {
    id: 'cryo',
    title: 'تقنية كرايو لتجميد الدهون',
    shortDesc: 'تفتيت الدهون الموضعية العنيدة عن طريق التبريد الآمن.',
    img: PUB + '/images/s3.jpg',
    badge: 'تقنية عالمية',
    fullDetails: {
      benefits: ['تجميد الخلايا الدهنية والتخلص منها نهائياً', 'يستهدف مناطق محددة مثل البطن والأرداف', 'بديل آمن تماماً لعمليات شفط الدهون'],
      duration: '50 دقيقة للمنطقة الواحد',
      suitability: 'ممتاز لمن يملكون وزناً قريباً من المثالي مع وجود سمنة موضعية عنيدة.',
    }
  },
  {
    id: 'cavitation',
    title: 'جلسات الكافيتاسيون والـ RF',
    shortDesc: 'إذابة الدهون العميقة بالموجات فوق الصوتية مع شد فوري للجلد.',
    img: PUB + '/images/s1.jpg',
    badge: 'نتائج سريعة',
    fullDetails: {
      benefits: ['تكسير جدران الخلايا الدهنية وتحويلها لسائل يتخلص منه الجسم', 'شد الجلد المترهل ومنع ظهور علامات التمدد بفضل الـ RF', 'ملاحظة فرق في المقاسات من الجلسات الأولى'],
      duration: '40 دقيقة للجلسة',
      suitability: 'مناسب لجميع الأعمار لتفتيت طبقات الدهون السميكة.',
    }
  },
  {
    id: 'diet-plans',
    title: 'أنظمة التغذية العلاجية',
    shortDesc: 'أنظمة غذائية علمية مرنة مصممة خصيصاً لجسمك وحالتك الصحية.',
    img: PUB + '/images/s8.jpg',
    badge: 'متابعة أسبوعية',
    fullDetails: {
      benefits: ['تحليل كامل لمكونات الجسم (InBody) بدقة وبشكل دوري', 'دايت صحي مشبع بدون حرمان مبني على أسلوب حياتك', 'علاج السمنة المصاحبة لأمراض مثل السكر والضغط وتكيس المبايض'],
      duration: 'متابعة دورية مستمرة',
      suitability: 'لكل شخص يريد نزول الوزن بشكل صحي وآمن وتغيير أسلوب حياته.',
    }
  },
  {
    id: 'mesotherapy',
    title: 'حقن الميزوثيرابي الموضعي',
    shortDesc: 'حقن مواد فيتامينية وطبية آمنة لإذابة مقاسات الأماكن العنيدة.',
    img: PUB + '/images/s5.jpg',
    badge: 'تركيز دقيق',
    fullDetails: {
      benefits: ['إذابة الدهون في الذراعين، الظهر، أو اللغد بدقة عالية', 'تحسين مظهر الجلد الخارجي للمنطقة المحقونة', 'حقن آمن ومصرح به طبياً بدون تخدير'],
      duration: '15 دقيقة للجلسة',
      suitability: 'لمن لديهم تراكمات دهون بجيوب محددة في الجسم لا تنزل بالدايت التقليدي.',
    }
  },
  {
    id: 'maintenance',
    title: 'برامج تثبيت الوزن والمحافظة',
    shortDesc: 'مرحلة ما بعد الوصول للوزن المثالي لضمان عدم ارتداد الدهون مجدداً.',
    img: PUB + '/images/s6.jpg',
    badge: 'حماية النتيجة',
    fullDetails: {
      benefits: ['إعادة برمجة معدلات الحرق في الجسم (Metabolism)', 'خطط مرنة تناسب العزومات والسفر بدون زيادة وزن', 'دعم نفسي وتوجيهي لضمان استقرار الوزن لسنوات طوال'],
      duration: 'برنامج ممتد من شهر إلى 3 شهور',
      suitability: 'لكل من أتم رحلة نزول الوزن بنجاح ويريد تأمين النتيجة.',
    }
  }
];

function ObesityService() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="obesity-page">
      <div className="obesity-hero">
        <h1 className="obesity-hero__title">برامج وعلاجات السمنة والتخسيس</h1>
        <p className="obesity-hero__subtitle">أحدث التقنيات الطبية العالمية وفريق طبي متكامل لمساعدتك في الوصول للقوام المثالي بأمان وبدون جراحة.</p>
      </div>

      <div className="container">
        {/* شبكة الكروت الاحترافية */}
        <div className="obesity__grid">
          {obesityData.map((item) => (
            <div key={item.id} className="obesity__card">
              <div className="obesity__card-img-wrap">
                <img src={item.img} alt={item.title} className="obesity__card-img" onError={(e) => e.target.src = 'https://via.placeholder.com/400x250?text=Hayah+Clinic'} />
                <span className="obesity__card-badge">{item.badge}</span>
              </div>
              <div className="obesity__card-content">
                <h3 className="obesity__card-title">{item.title}</h3>
                <p className="obesity__card-desc">{item.shortDesc}</p>
                <button className="obesity__card-btn" onClick={() => setActiveModal(item)}>
                  التفاصيل الطبية والمعلومات ←
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الـ Popup الشفاف الاحترافي عند الضغط على الكارت */}
      {activeModal && (
        <div className="obesity-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="obesity-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="obesity-modal-close" onClick={() => setActiveModal(null)}>
              <FaXmark />
            </button>
            
            <div className="obesity-modal-header">
              <h2>{activeModal.title}</h2>
              <span className="modal-badge-info">{activeModal.badge}</span>
            </div>

            <div className="obesity-modal-body">
              <div className="modal-info-section">
                <h4><FaCircleCheck className="modal-check-icon" /> أبرز الفوائد والنتائج:</h4>
                <ul>
                  {activeModal.fullDetails.benefits.map((b, index) => <li key={index}>{b}</li>)}
                </ul>
              </div>

              <div className="modal-info-grid">
                <div className="modal-info-box">
                  <strong>مدة الجلسة التقريبية:</strong>
                  <p>{activeModal.fullDetails.duration}</p>
                </div>
                <div className="modal-info-box">
                  <strong>لمن هذا البرنامج؟</strong>
                  <p>{activeModal.fullDetails.suitability}</p>
                </div>
              </div>
            </div>

            <div className="obesity-modal-footer">
              <a 
                href={waLink(`مرحباً عيادة حياة، أود الاستفسار وحجز موعد بخصوص: ${activeModal.title}`)}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp modal-wa-btn"
              >
                <FaWhatsapp />
                استفسر واحجز عبر واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ObesityService;