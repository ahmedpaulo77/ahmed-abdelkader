import React, { useState, useEffect } from 'react';
import {
  FaWhatsapp, FaXmark, FaCircleCheck,
  FaClock, FaUserCheck, FaStar,
} from 'react-icons/fa6';
import { messages, waLink } from '../utils/whatsapp';
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollReveal';
import './ObesityService.css';

const PUB = process.env.PUBLIC_URL;

const obesityData = [
  {
    id: 'lpg',
    title: 'جلسات LPG ونحت الجسم',
    shortDesc: 'أحدث تقنية فرنسية لشد الترهلات وتنسيق القوام بدون أي ألم.',
    img: PUB + '/images/s4.jpg',
    badge: 'الأكثر طلباً',
    badgeColor: '#c8973a',
    fullDesc: 'تقنية LPG الفرنسية الأصلية — الأكثر طلباً في عياداتنا. تعمل عن طريق تدليك ميكانيكي عميق يكسر خلايا الدهون ويشد الجلد ويحسن الدورة الدموية. جلسة مريحة تماماً بدون أي ألم أو توقف عن العمل.',
    benefits: [
      'نحت الجسم وتنسيق القوام بدون جراحة',
      'التخلص من السيلوليت والترهلات',
      'تنشيط الدورة الدموية واللمفاوية',
      'شد الجلد بعد نزول الوزن أو الولادة',
      'نتائج ملحوظة من الجلسات الأولى',
    ],
    duration: '30 – 45 دقيقة للجلسة',
    suitable: 'مثالي لمن يريد نحت الجسم وشد الترهلات دون تدخل جراحي.',
  },
  {
    id: 'cryo',
    title: 'تقنية كرايو لتجميد الدهون',
    shortDesc: 'تفتيت الدهون الموضعية العنيدة عن طريق التبريد الآمن.',
    img: PUB + '/images/s11.jpg',
    badge: 'تقنية عالمية',
    badgeColor: '#2d8cff',
    fullDesc: 'كرايوليبوليسيس — تقنية التجميد المعتمدة عالمياً لإزالة الدهون الموضعية العنيدة. تعمل على تجميد خلايا الدهون والتخلص منها نهائياً بدون أي جراحة أو تخدير أو تعافي.',
    benefits: [
      'تجميد الخلايا الدهنية والتخلص منها نهائياً',
      'يستهدف مناطق محددة كالبطن والأرداف والخاصرة',
      'بديل آمن تماماً لشفط الدهون',
      'لا يوجد وقت تعافي — تعود لحياتك فوراً',
      'نتائج مستدامة وطويلة الأمد',
    ],
    duration: '50 دقيقة للمنطقة الواحدة',
    suitable: 'ممتاز لمن لديهم وزن قريب من المثالي مع دهون موضعية عنيدة.',
  },
  {
    id: 'cavitation',
    title: 'جلسات الكافيتاسيون والـ RF',
    shortDesc: 'إذابة الدهون العميقة بالموجات فوق الصوتية مع شد فوري للجلد.',
    img: PUB + '/images/s12.jpg',
    badge: 'نتائج سريعة',
    badgeColor: '#22c55e',
    fullDesc: 'تقنية مدمجة تجمع بين الكافيتاسيون (الموجات فوق الصوتية) والـ RF (الترددات الراديوية) — لتكسير الدهون العميقة وشد الجلد في نفس الوقت. نتائج ملموسة من أول جلسة.',
    benefits: [
      'تكسير جدران الخلايا الدهنية وتحويلها لسائل يخرجه الجسم',
      'شد الجلد المترهل ومنع ظهور علامات التمدد',
      'ملاحظة فرق في المقاسات من الجلسات الأولى',
      'تحفيز إنتاج الكولاجين لبشرة أكثر شباباً',
      'مناسب لجميع مناطق الجسم',
    ],
    duration: '40 دقيقة للجلسة',
    suitable: 'مناسب لجميع الأعمار لتفتيت طبقات الدهون السميكة وشد الجلد.',
  },
  {
    id: 'diet-plans',
    title: 'أنظمة التغذية العلاجية',
    shortDesc: 'أنظمة غذائية علمية مرنة مصممة خصيصاً لجسمك وحالتك الصحية.',
    img: PUB + '/images/s13.jpg',
    badge: 'متابعة أسبوعية',
    badgeColor: '#a855f7',
    fullDesc: 'مش بس دايت — ده تغيير حياة! أنظمتنا الغذائية العلاجية مبنية على تحليل علمي دقيق لجسمك وحالتك الصحية، مصممة لتكون مرنة وعملية تناسب أسلوب حياتك الحقيقي.',
    benefits: [
      'تحليل كامل لمكونات الجسم (InBody) بدقة',
      'دايت صحي مشبع بدون حرمان',
      'علاج السمنة المصاحبة لسكر وضغط وتكيس المبايض',
      'خطة مرنة تناسب العزومات والسفر',
      'متابعة أسبوعية دقيقة مع الدكتور',
    ],
    duration: 'متابعة دورية أسبوعية',
    suitable: 'لكل شخص يريد نزول الوزن بشكل صحي وآمن وتغيير أسلوب حياته.',
  },
  {
    id: 'mesotherapy',
    title: 'حقن الميزوثيرابي الموضعي',
    shortDesc: 'حقن مواد فيتامينية وطبية آمنة لإذابة مقاسات الأماكن العنيدة.',
    img: PUB + '/images/s14.jpg',
    badge: 'تركيز دقيق',
    badgeColor: '#ef4444',
    fullDesc: 'تقنية الميزوثيرابي تستخدم حقناً دقيقاً لمواد طبية ومغذيات مباشرة في طبقات الجلد الوسطى لإذابة الدهون الموضعية وتحسين مظهر الجلد بدقة عالية.',
    benefits: [
      'إذابة الدهون في الذراعين والظهر واللغد بدقة',
      'تحسين مظهر وملمس الجلد في المنطقة المعالجة',
      'حقن آمن ومصرح به طبياً بدون تخدير كامل',
      'نتائج واضحة في المقاسات',
      'مناسب للمناطق الصغيرة والمحددة',
    ],
    duration: '15 – 20 دقيقة للجلسة',
    suitable: 'لمن لديهم تراكمات دهون في جيوب محددة لا تستجيب للدايت التقليدي.',
  },
  {
    id: 'maintenance',
    title: 'برامج تثبيت الوزن والمحافظة',
    shortDesc: 'مرحلة ما بعد الوصول للوزن المثالي لضمان عدم ارتداد الدهون مجدداً.',
    img: PUB + '/images/s15.jpg',
    badge: 'حماية النتيجة',
    badgeColor: '#0ea5e9',
    fullDesc: 'الوصول للوزن المثالي مجرد نصف الرحلة — التثبيت هو النجاح الحقيقي! برامجنا المتخصصة تضمن استقرار وزنك لسنوات من خلال إعادة برمجة جسمك وعقلك معاً.',
    benefits: [
      'إعادة برمجة معدلات الحرق في الجسم (Metabolism)',
      'خطط مرنة للعزومات والمناسبات بدون زيادة',
      'تعليم مبادئ الأكل الحدسي والواعي',
      'دعم نفسي لتغيير علاقتك بالطعام',
      'ضمان استقرار الوزن لسنوات طوال',
    ],
    duration: 'برنامج ممتد من 1 – 3 شهور',
    suitable: 'لمن أتم رحلة نزول الوزن بنجاح ويريد تأمين النتيجة بشكل علمي.',
  },
];

/* ══════════════════════════════════════════════
   Obesity Modal
══════════════════════════════════════════════ */
function ObesityModal({ item, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };  
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="ob-overlay" onClick={onClose}>
      <div className="ob-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">

        {/* Close */}
        <button className="ob-modal__close" onClick={onClose} aria-label="إغلاق">
          <FaXmark />
        </button>

        {/* Image */}
        <div className="ob-modal__img-wrap">
          <img
            src={item.img}
            alt={item.title}
            className="ob-modal__img"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="ob-modal__img-overlay" />
          <span
            className="ob-modal__badge"
            style={{ '--badge-color': item.badgeColor }}
          >
            <FaStar style={{ fontSize: '0.7rem' }} />
            {item.badge}
          </span>
        </div>

        {/* Body */}
        <div className="ob-modal__body">
          <h2 className="ob-modal__title">{item.title}</h2>
          <p className="ob-modal__desc">{item.fullDesc}</p>

          {/* Benefits */}
          <div className="ob-modal__section">
            <h4 className="ob-modal__section-title">
              <FaCircleCheck className="ob-modal__check-icon" />
              أبرز الفوائد والنتائج
            </h4>
            <ul className="ob-modal__benefits">
              {item.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Info grid */}
          <div className="ob-modal__info-grid">
            <div className="ob-modal__info-box">
              <FaClock className="ob-modal__info-icon" />
              <strong>مدة الجلسة</strong>
              <p>{item.duration}</p>
            </div>
            <div className="ob-modal__info-box">
              <FaUserCheck className="ob-modal__info-icon" />
              <strong>لمن هو مناسب؟</strong>
              <p>{item.suitable}</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={waLink(`مرحباً عيادة حياة، أود الاستفسار وحجز موعد بخصوص: ${item.title}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp ob-modal__cta"
          >
            <FaWhatsapp />
            استفسر واحجز عبر واتساب
          </a>
        </div>

      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   ObesityService Page
══════════════════════════════════════════════ */
function ObesityService() {
  const [activeModal, setActiveModal] = useState(null);

  const heroRef  = useScrollReveal();
  const gridRef  = useStaggerReveal();

  return (
    <section className="obesity-page">

      {/* Hero header */}
      <div ref={heroRef} className="obesity-hero fade-in">
        <span className="section-tag">التخسيس والسمنة</span>
        <h1 className="obesity-hero__title">برامج وعلاجات السمنة والتخسيس</h1>
        <p className="obesity-hero__subtitle">
          أحدث التقنيات الطبية العالمية وفريق طبي متكامل لمساعدتك في
          الوصول للقوام المثالي بأمان وبدون جراحة.
        </p>
        <p className="obesity-hero__hint">اضغط على أي برنامج لمعرفة تفاصيله الكاملة</p>
      </div>

      <div className="container">
        <div ref={gridRef} className="obesity__grid">
          {obesityData.map((item) => (
            <div
              key={item.id}
              className="obesity__card"
              onClick={() => setActiveModal(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveModal(item)}
              aria-label={`عرض تفاصيل ${item.title}`}
            >
              {/* Image */}
              <div className="obesity__card-img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="obesity__card-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="obesity__card-img-overlay" aria-hidden="true">تفاصيل البرنامج</div>
                <span
                  className="obesity__card-badge"
                  style={{ '--badge-color': item.badgeColor }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="obesity__card-content">
                <h3 className="obesity__card-title">{item.title}</h3>
                <p className="obesity__card-desc">{item.shortDesc}</p>
                <span className="obesity__card-btn">التفاصيل الكاملة ←</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <ObesityModal
          item={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}

export default ObesityService;
