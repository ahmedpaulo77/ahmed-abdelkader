import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { messages, waLink } from '../utils/whatsapp';
import './BMI.css';

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'نقص وزن', color: '#3498db', advice: 'يُنصح باستشارة لتقييم حالتك الغذائية' };
  if (bmi < 25) return { label: 'وزن طبيعي', color: '#27ae60', advice: 'ممتاز! حافظ على نمط حياتك الصحي' };
  if (bmi < 30) return { label: 'زيادة وزن', color: '#f39c12', advice: 'يُنصح ببرنامج تخسيس مخصص' };
  return { label: 'سمنة', color: '#e74c3c', advice: 'يُنصح باستشارة عاجلة مع د. أحمد مجدي' };
}

function BMI() {
  const ref = useScrollReveal();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h || w <= 0 || h <= 0) return;

    const bmi = (w / (h * h)).toFixed(1);
    const category = getBMICategory(parseFloat(bmi));
    setResult({ bmi, ...category });
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <section id="bmi" className="section bmi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">حاسبة BMI</span>
          <h2 className="section-title">اعرف مؤشر كتلة جسمك</h2>
          <p className="section-subtitle">
            احسب BMI مجاناً واعرف وضعك الصحي — ثم احجز استشارة مخصصة
          </p>
        </div>

        <div ref={ref} className="bmi__wrapper fade-in">
          <form className="bmi__form" onSubmit={calculate}>
            <div className="bmi__input-group">
              <label htmlFor="weight">الوزن (كجم)</label>
              <input
                id="weight"
                type="number"
                placeholder="مثال: 75"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="20"
                max="300"
                required
              />
            </div>
            <div className="bmi__input-group">
              <label htmlFor="height">الطول (سم)</label>
              <input
                id="height"
                type="number"
                placeholder="مثال: 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="100"
                max="250"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary bmi__calc-btn">
              احسب الآن
            </button>
          </form>

          {result && (
            <div className="bmi__result">
              <div className="bmi__gauge">
                <div className="bmi__gauge-circle" style={{ '--bmi-color': result.color }}>
                  <span className="bmi__gauge-value">{result.bmi}</span>
                  <span className="bmi__gauge-label">BMI</span>
                </div>
              </div>
              <div className="bmi__result-info">
                <h3 style={{ color: result.color }}>{result.label}</h3>
                <p>{result.advice}</p>
                <div className="bmi__scale">
                  <div className="bmi__scale-bar">
                    <div
                      className="bmi__scale-marker"
                      style={{
                        left: `${Math.min(Math.max((parseFloat(result.bmi) - 15) / 25 * 100, 0), 100)}%`,
                        background: result.color,
                      }}
                    ></div>
                  </div>
                  <div className="bmi__scale-labels">
                    <span>نقص</span>
                    <span>طبيعي</span>
                    <span>زيادة</span>
                    <span>سمنة</span>
                  </div>
                </div>
                <div className="bmi__result-actions">
                  <a
                    href={waLink(messages.bmi(result.bmi, result.label))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    احجز استشارة بناءً على نتيجتك
                  </a>
                  <button type="button" className="btn btn-outline" onClick={reset}>
                    إعادة الحساب
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BMI;
