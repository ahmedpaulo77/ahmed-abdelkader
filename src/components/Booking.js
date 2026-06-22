import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { messages, waLink } from '../utils/whatsapp';
import './Booking.css';

const branches = [
  { id: 'banha', name: 'بنها' },
  { id: 'tagamoa', name: 'التجمع الخامس' },
  { id: 'zayed', name: 'الشيخ زايد' },
];

const services = [
  'برنامج التخسيس',
  'العلاج الطبيعي',
  'جلسات LPG',
  'استشارة تغذية',
  'علاج آلام الظهر',
  'تأهيل بعد إصابة',
];

const timeSlots = [
  '9:00 ص', '10:00 ص', '11:00 ص', '12:00 م',
  '1:00 م', '2:00 م', '3:00 م', '4:00 م',
  '5:00 م', '6:00 م', '7:00 م', '8:00 م',
];

function getAvailableDates() {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 5) {
      dates.push(d);
    }
  }
  return dates;
}

function formatDate(date) {
  return date.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function Booking() {
  const ref = useScrollReveal();
  const [step, setStep] = useState(1);
  const [branch, setBranch] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const availableDates = getAvailableDates();
  const branchName = branches.find((b) => b.id === branch)?.name || '';

  const canProceed = () => {
    switch (step) {
      case 1: return !!branch;
      case 2: return !!service;
      case 3: return !!date;
      case 4: return !!time;
      case 5: return name.trim().length >= 2 && phone.trim().length >= 10;
      default: return false;
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!canProceed()) return;
    setConfirmed(true);
  };

  const resetBooking = () => {
    setStep(1);
    setBranch('');
    setService('');
    setDate(null);
    setTime('');
    setName('');
    setPhone('');
    setConfirmed(false);
  };

  if (confirmed) {
    const dateStr = formatDate(date);
    return (
      <section id="booking" className="section booking">
        <div className="container">
          <div className="booking__success">
            <div className="booking__success-icon">✅</div>
            <h2>تم الحجز بنجاح!</h2>
            <p>شكراً {name}، تم تسجيل موعدك بنجاح</p>
            <div className="booking__success-details">
              <div><span>📍 الفرع:</span> {branchName}</div>
              <div><span>💼 الخدمة:</span> {service}</div>
              <div><span>📅 التاريخ:</span> {dateStr}</div>
              <div><span>🕐 الوقت:</span> {time}</div>
              <div><span>📱 الهاتف:</span> {phone}</div>
            </div>
            <div className="booking__success-actions">
              <a
                href={waLink(messages.booking(dateStr, time, branchName, service))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                أكّد عبر واتساب
              </a>
              <button className="btn btn-outline" onClick={resetBooking}>
                حجز موعد آخر
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section booking">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">احجز موعد</span>
          <h2 className="section-title">احجز استشارتك الآن</h2>
          <p className="section-subtitle">
            اختر الفرع والخدمة والموعد المناسب — خطوات بسيطة وسريعة
          </p>
        </div>

        <div ref={ref} className="booking__wrapper fade-in">
          <div className="booking__steps">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`booking__step-indicator ${step >= s ? 'booking__step-indicator--active' : ''} ${step > s ? 'booking__step-indicator--done' : ''}`}
              >
                <span>{step > s ? '✓' : s}</span>
              </div>
            ))}
          </div>

          <div className="booking__content">
            {step === 1 && (
              <div className="booking__panel">
                <h3>اختر الفرع</h3>
                <div className="booking__options">
                  {branches.map((b) => (
                    <button
                      key={b.id}
                      className={`booking__option ${branch === b.id ? 'booking__option--selected' : ''}`}
                      onClick={() => setBranch(b.id)}
                    >
                      📍 {b.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="booking__panel">
                <h3>اختر الخدمة</h3>
                <div className="booking__options booking__options--grid">
                  {services.map((s) => (
                    <button
                      key={s}
                      className={`booking__option ${service === s ? 'booking__option--selected' : ''}`}
                      onClick={() => setService(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="booking__panel">
                <h3>اختر التاريخ</h3>
                <div className="booking__calendar">
                  {availableDates.slice(0, 14).map((d) => {
                    const key = d.toISOString();
                    const isSelected = date && d.toDateString() === date.toDateString();
                    return (
                      <button
                        key={key}
                        className={`booking__date ${isSelected ? 'booking__date--selected' : ''}`}
                        onClick={() => setDate(d)}
                      >
                        <span className="booking__date-day">
                          {d.toLocaleDateString('ar-EG', { weekday: 'short' })}
                        </span>
                        <span className="booking__date-num">{d.getDate()}</span>
                        <span className="booking__date-month">
                          {d.toLocaleDateString('ar-EG', { month: 'short' })}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="booking__panel">
                <h3>اختر الوقت</h3>
                <div className="booking__times">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      className={`booking__time ${time === t ? 'booking__time--selected' : ''}`}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="booking__panel">
                <h3>بياناتك</h3>
                <form className="booking__form" onSubmit={handleConfirm}>
                  <div className="booking__input-group">
                    <label htmlFor="name">الاسم الكامل</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="أدخل اسمك"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="booking__input-group">
                    <label htmlFor="phone">رقم الموبايل</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="booking__summary">
                    <h4>ملخص الحجز</h4>
                    <p>📍 {branchName} · 💼 {service}</p>
                    <p>📅 {date ? formatDate(date) : ''} · 🕐 {time}</p>
                  </div>
                  <button type="submit" className="btn btn-gold booking__confirm-btn">
                    تأكيد الحجز
                  </button>
                </form>
              </div>
            )}
          </div>

          {step < 5 && (
            <div className="booking__nav">
              {step > 1 && (
                <button className="btn btn-outline" onClick={() => setStep(step - 1)}>
                  السابق
                </button>
              )}
              <button
                className="btn btn-primary"
                disabled={!canProceed()}
                onClick={() => setStep(step + 1)}
              >
                التالي
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;
