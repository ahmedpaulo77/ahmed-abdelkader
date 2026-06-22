const PHONE = '201000000000';

export const messages = {
  general: 'مرحباً، أريد حجز استشارة في Hayah Clinic - د. أحمد مجدي',
  diet: 'أريد الاستفسار عن برنامج التخسيس والمتابعة مع د. أحمد مجدي',
  physio: 'أريد الاستفسار عن جلسات العلاج الطبيعي والتأهيل',
  lpg: 'أريد الاستفسار عن جلسات LPG وتكسير الدهون',
  banha: 'أريد حجز موعد في فرع بنها - Hayah Clinic',
  tagamoa: 'أريد حجز موعد في فرع التجمع الخامس - Hayah Clinic',
  zayed: 'أريد حجز موعد في فرع الشيخ زايد - Hayah Clinic',
  bmi: (result, category) =>
    `أجريت حساب BMI في موقع Hayah Clinic ونتيجتي ${result} (${category})، أريد استشارة مع د. أحمد مجدي`,
  booking: (date, time, branch, service) =>
    `تم اختيار موعد في Hayah Clinic:\n📅 ${date}\n🕐 ${time}\n📍 فرع ${branch}\n💼 ${service}\nأريد تأكيد الموعد`,
};

export const waLink = (msg) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const PHONE_NUMBER = PHONE;
