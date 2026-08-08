# نظام الحجز الحقيقي — دليل الإعداد

الملفات اللي اتضافت/اتعدّلت:

| الملف | التعديل |
|---|---|
| `src/firebase.js` | جديد — تهيئة Firebase |
| `src/services/bookings.js` | جديد — كل عمليات Firestore (إنشاء حجز، تحقق تعارض، تحديث حالة، حذف) |
| `src/components/Booking.js` | بقى بيحفظ الحجز فعلياً في Firestore، وبيعطل الأوقات المحجوزة تلقائياً |
| `src/components/Admin.js` + `Admin.css` | جديد — صفحة `/admin` فيها تسجيل دخول ولوحة إدارة الحجوزات |
| `src/App.js` | إضافة route `/admin` (بدون Navbar/Footer/WhatsApp button) |
| `firestore.rules` | قواعد أمان Firestore الجاهزة للنشر |
| `.env.example` | نموذج لمتغيرات بيئة Firebase |

## خطوات التشغيل

### 1. أنشئ مشروع Firebase
1. روح [console.firebase.google.com](https://console.firebase.google.com) واعمل مشروع جديد
2. من **Build > Firestore Database** اعمل قاعدة بيانات (اختار وضع production)
3. من **Build > Authentication > Sign-in method** فعّل **Email/Password**
4. من نفس الصفحة **Users** أضف يوزر واحد بإيميل وباسورد الدكتور (ده اللي هيدخل بيه على `/admin`)

### 2. اربط بيانات المشروع
1. من **Project Settings > General > Your apps** اعمل Web App جديدة
2. انسخ بيانات الـ config
3. اعمل نسخة من `.env.example` باسم `.env` واملأ القيم

```
cp .env.example .env
```

### 3. انشر قواعد الأمان
انسخ محتوى `firestore.rules` وحطه في **Firestore Database > Rules** في الكونسول، أو استخدم Firebase CLI:

```
firebase deploy --only firestore:rules
```

### 4. شغّل المشروع
```
npm install
npm start
```

### 5. جرّب
- افتح `/#/booking` واعمل حجز — هيتخزن في Firestore فعلياً
- افتح `/#/admin` وسجل دخول بإيميل وباسورد اللي عملته في خطوة 1 — هتشوف الحجز وتقدر تأكده/تلغيه/تمسحه

## ملاحظات مهمة
- بيانات Firebase config (apiKey إلخ) مش سرية فعلياً — الحماية الحقيقية موجودة في `firestore.rules`، فمتقلقش لو ظهرت في الـ bundle بعد الـ build.
- الكود بيتحقق من التعارض (لو 2 حجزوا نفس السلوت في نفس اللحظة) قبل ما يكتب الحجز، فمفيش double booking.
- عشان تبيعه لعميل تاني، غير بس أسماء الفروع في `Booking.js` و`Admin.js`، واعمل مشروع Firebase جديد له.
