import React, { useState, useEffect } from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { messages, waLink } from '../utils/whatsapp';
import './Services.css';

import {
  FaScaleBalanced,
  FaDumbbell,
  FaBullseye,
  FaWandMagicSparkles,
  FaBone,
  FaPersonRunning,
  FaHeartPulse,
  FaUtensils,
  FaPersonBreastfeeding,
  FaCircleCheck,
  FaXmark,
  FaWhatsapp,
  FaClock,
  FaUserCheck,
} from 'react-icons/fa6';

const PUB = process.env.PUBLIC_URL;

const services = [
  {
    id: 'diet',
    img: PUB + '/images/s1.jpg',
    icon: <FaScaleBalanced />,
    title: 'برامج التخسيس والتغذية العلاجية',
    desc: 'خطط غذائية علمية مخصصة مع متابعة دورية لتحقيق وزن مثالي صحي.',
    messageKey: 'diet',
    details: {
      fullDesc: 'نقدم في Hayah Clinic برامج تخسيس علمية مخصصة تعتمد على تحليل مكونات الجسم (InBody) لتصميم خطة غذائية تناسب جسمك وحالتك الصحية تماماً. الهدف مش بس نزول الرقم على الميزان — الهدف تغيير أسلوب حياتك بالكامل.',
      benefits: [
        'تحليل كامل لمكونات الجسم بدقة علمية',
        'خطة غذائية مرنة تناسب روتينك اليومي',
        'متابعة أسبوعية مع الدكتور',
        'علاج السمنة المصاحبة لأمراض مزمنة',
        'دعم نفسي وتحفيز مستمر',
      ],
      duration: 'متابعة دورية أسبوعية',
      suitable: 'مناسب لكل من يريد خسارة الوزن بشكل صحي وآمن ومستدام.',
    },
  },
  {
    id: 'physio',
    img: PUB + '/images/s2.jpg',
    icon: <FaDumbbell />,
    title: 'العلاج الطبيعي والتأهيل',
    desc: 'جلسات علاج طبيعي متخصصة للتأهيل بعد الإصابات والعمليات الجراحية.',
    messageKey: 'physio',
    details: {
      fullDesc: 'فريق متخصص من أخصائيي العلاج الطبيعي يستخدم أحدث الأجهزة والبروتوكولات العلاجية لمساعدتك في استعادة قوتك وحركتك الطبيعية بأسرع وقت ممكن وبدون ألم.',
      benefits: [
        'علاج الإصابات الرياضية والعمليات الجراحية',
        'تقنيات الموجات فوق الصوتية والليزر العلاجي',
        'تمارين تأهيل مخصصة لكل حالة',
        'تخفيف الآلام المزمنة والحادة',
        'متابعة دقيقة لتقدم الحالة',
      ],
      duration: '45 – 60 دقيقة للجلسة',
      suitable: 'لمن يعاني من إصابات في العضلات والمفاصل أو بعد العمليات الجراحية.',
    },
  },
  {
    id: 'obesity',
    img: PUB + '/images/s3.jpg',
    icon: <FaBullseye />,
    title: 'علاج السمنة والوزن الزائد',
    desc: 'برامج متكاملة لعلاج السمنة باستخدام أحدث البروتوكولات الطبية.',
    messageKey: 'diet',
    details: {
      fullDesc: 'السمنة مرض وليست عيب! في Hayah Clinic نتعامل معها بجدية طبية كاملة من خلال بروتوكولات علاجية متكاملة تشمل التغذية العلاجية والتقنيات الطبية الحديثة تحت إشراف مباشر من د. أحمد محمد.',
      benefits: [
        'تقييم طبي شامل وتحليل دقيق للحالة',
        'برنامج متكامل يجمع الغذاء والأجهزة والأدوية إن لزم',
        'علاج السمنة المصاحبة لسكر وضغط وتكيس',
        'نتائج مضمونة ومستدامة',
        'إشراف طبي مباشر في كل مرحلة',
      ],
      duration: 'برنامج من 1 – 6 شهور حسب الحالة',
      suitable: 'لمن يعاني من زيادة الوزن المفرطة أو السمنة المرضية.',
    },
  },
  {
    id: 'lpg',
    img: PUB + '/images/s4.jpg',
    icon: <FaWandMagicSparkles />,
    title: 'جلسات LPG / تكسير الدهون',
    desc: 'تقنية LPG المتقدمة لتكسير الدهون ونحت الجسم بدون جراحة.',
    messageKey: 'lpg',
    details: {
      fullDesc: 'تقنية LPG الفرنسية الأصلية هي الأكثر طلباً في عياداتنا. تعمل عن طريق تدليك ميكانيكي عميق يكسر خلايا الدهون ويشد الجلد ويحسن الدورة الدموية — كل ده في جلسة واحدة مريحة تماماً.',
      benefits: [
        'نحت الجسم وتنسيق القوام بدون جراحة',
        'التخلص من السيلوليت والترهلات',
        'تنشيط الدورة الدموية واللمفاوية',
        'شد الجلد بعد نزول الوزن',
        'نتائج ملحوظة من الجلسات الأولى',
      ],
      duration: '30 – 45 دقيقة للجلسة',
      suitable: 'مثالي لمن يريد نحت الجسم وتحسين القوام دون الخضوع لأي عملية جراحية.',
    },
  },
  {
    id: 'back',
    img: PUB + '/images/s5.jpg',
    icon: <FaBone />,
    title: 'علاج آلام الظهر والرقبة',
    desc: 'علاج متخصص لآلام العمود الفقري والرقبة بأحدث التقنيات.',
    messageKey: 'physio',
    details: {
      fullDesc: 'آلام الظهر والرقبة من أكثر المشاكل شيوعاً في عصرنا. في Hayah Clinic نعالج جذر المشكلة مش بس الأعراض — بتقنيات متقدمة وبروتوكول علاجي مخصص لكل حالة.',
      benefits: [
        'تشخيص دقيق بالفحص السريري والأشعة',
        'علاج ديسك الظهر والرقبة بدون جراحة',
        'جلسات TENS والموجات الصدمية العلاجية',
        'تمارين تقوية عضلات الظهر',
        'إرشادات تصحيح الوضعية اليومية',
      ],
      duration: '45 دقيقة للجلسة',
      suitable: 'لمن يعاني من ألم الظهر المزمن، الديسك، أو آلام الرقبة والكتف.',
    },
  },
  {
    id: 'rehab',
    img: PUB + '/images/s6.jpg',
    icon: <FaPersonRunning />,
    title: 'التأهيل بعد الإصابات',
    desc: 'برامج تأهيل شاملة للعودة للحياة الطبيعية بعد الإصابات.',
    messageKey: 'physio',
    details: {
      fullDesc: 'برامج التأهيل في Hayah Clinic مصممة لإعادتك للحياة الطبيعية بأسرع وقت ممكن — سواء كنت رياضياً محترفاً أو شخص عادي. كل برنامج مخصص 100% لحالتك.',
      benefits: [
        'تأهيل ما بعد عمليات الركبة والكتف والورك',
        'برامج العودة للرياضة للرياضيين المحترفين',
        'تأهيل إصابات الأوتار والأربطة',
        'استخدام التكنولوجيا الحديثة في التأهيل',
        'متابعة دقيقة كل خطوة',
      ],
      duration: '60 دقيقة للجلسة',
      suitable: 'لمن مر بإصابة أو عملية جراحية ويريد العودة لحياته الطبيعية.',
    },
  },
  {
    id: 'joints',
    img: PUB + '/images/s7.jpg',
    icon: <FaHeartPulse />,
    title: 'علاج خشونة المفاصل',
    desc: 'علاج فعّال لخشونة المفاصل وتخفيف الألم وتحسين الحركة.',
    messageKey: 'physio',
    details: {
      fullDesc: 'خشونة المفاصل مش لازم تعيشها للأبد! مع بروتوكول العلاج المتكامل في Hayah Clinic، بنخفف الألم بشكل ملحوظ ونحسن نطاق الحركة ونوقف تدهور الحالة.',
      benefits: [
        'تخفيف الألم والالتهاب بشكل فوري',
        'تحسين نطاق حركة المفصل',
        'إبطاء تدهور الغضاريف',
        'علاج بدون جراحة أو مسكنات دائمة',
        'إرشادات حماية المفاصل يومياً',
      ],
      duration: '45 دقيقة للجلسة',
      suitable: 'لمن يعاني من خشونة الركبة أو الورك أو أي مفصل آخر.',
    },
  },
  {
    id: 'nutrition',
    img: PUB + '/images/s8.jpg',
    icon: <FaUtensils />,
    title: 'استشارات تغذية ومتابعة',
    desc: 'استشارات غذائية دورية مع خطط متابعة شخصية لكل مريض.',
    messageKey: 'diet',
    details: {
      fullDesc: 'مش بس دايت — ده أسلوب حياة جديد! استشاراتنا الغذائية بتبني علاقة صحية مع الأكل وبتعلمك إزاي تاكل صح في كل مكان وكل وقت بدون حرمان.',
      benefits: [
        'تقييم غذائي شامل من البداية',
        'خطة مرنة تناسب ظروفك وميزانيتك',
        'بدائل غذائية عملية للأكلات المفضلة',
        'تعليم مبادئ التغذية السليمة',
        'دعم ومتابعة مستمرة',
      ],
      duration: 'جلسات متابعة دورية',
      suitable: 'لكل شخص يريد تحسين علاقته بالطعام وتبني عادات غذائية صحية.',
    },
  },
  {
    id: 'pregnancy',
    img: PUB + '/images/s9.jpg',
    icon: <FaPersonBreastfeeding />,
    title: 'برامج ما قبل وبعد الولادة',
    desc: 'برامج متخصصة للحفاظ على وزن صحي قبل وبعد الولادة.',
    messageKey: 'diet',
    details: {
      fullDesc: 'رحلة الأمومة جميلة وبنريد تكون صحية كمان! برامجنا المتخصصة بتساعدك تحافظي على وزنك الصحي أثناء الحمل وبعده مع الحفاظ التام على صحتك وصحة طفلك.',
      benefits: [
        'إدارة الوزن بأمان كامل أثناء الحمل',
        'تغذية مثالية للأم والجنين',
        'برنامج استعادة الوزن بعد الولادة',
        'علاج ترهلات ما بعد الولادة',
        'دعم نفسي وتغذوي متكامل',
      ],
      duration: 'برنامج متكامل ومستمر',
      suitable: 'للسيدات أثناء فترة الحمل أو بعد الولادة.',
    },
  },
];

/* ══════════════════════════════════════════════
   Service Modal
══════════════════════════════════════════════ */
function ServiceModal({ service, onClose }) {
  // إغلاق بـ ESC
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
    <div className="svc-overlay" onClick={onClose}>
      <div className="svc-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">

        {/* Close */}
        <button className="svc-modal__close" onClick={onClose} aria-label="إغلاق">
          <FaXmark />
        </button>

        {/* Image */}
        <div className="svc-modal__img-wrap">
          <img
            src={service.img}
            alt={service.title}
            className="svc-modal__img"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="svc-modal__img-overlay">
            <span className="svc-modal__icon">{service.icon}</span>
          </div>
        </div>

        {/* Body */}
        <div className="svc-modal__body">
          <h2 className="svc-modal__title">{service.title}</h2>
          <p className="svc-modal__desc">{service.details.fullDesc}</p>

          {/* Benefits */}
          <div className="svc-modal__section">
            <h4 className="svc-modal__section-title">
              <FaCircleCheck className="svc-modal__section-icon" />
              أبرز الفوائد والنتائج
            </h4>
            <ul className="svc-modal__benefits">
              {service.details.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Info grid */}
          <div className="svc-modal__info-grid">
            <div className="svc-modal__info-box">
              <FaClock className="svc-modal__info-icon" />
              <strong>المدة</strong>
              <p>{service.details.duration}</p>
            </div>
            <div className="svc-modal__info-box">
              <FaUserCheck className="svc-modal__info-icon" />
              <strong>لمن هو مناسب؟</strong>
              <p>{service.details.suitable}</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={waLink(messages[service.messageKey])}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp svc-modal__cta"
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
   Services Page
══════════════════════════════════════════════ */
function Services() {
  const [activeService, setActiveService] = useState(null);

  const headerRef = useScrollReveal();
  const gridRef   = useStaggerReveal();

  return (
    <section id="services" className="section services">
      <div className="container">

        <div ref={headerRef} className="section-header fade-in">
          <span className="section-tag">خدماتنا</span>
          <h2 className="section-title">خدمات طبية متكاملة</h2>
          <p className="section-subtitle">
            اضغط على أي خدمة لمعرفة تفاصيلها الكاملة
          </p>
        </div>

        <div ref={gridRef} className="services__grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="services__card"
              onClick={() => setActiveService(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveService(service)}
              aria-label={`عرض تفاصيل ${service.title}`}
            >
              {/* Image */}
              <div className="services__img-wrap">
                <img
                  src={service.img}
                  alt={service.title}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="services__img-overlay" aria-hidden="true">تفاصيل أكثر</div>
              </div>

              {/* Content */}
              <div className="services__body">
                <span className="services__icon">{service.icon}</span>
                <h3 className="services__title">{service.title}</h3>
                <p className="services__desc">{service.desc}</p>
                <span className="services__link">اعرف أكثر ←</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  );
}

export default Services;
