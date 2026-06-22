import { useScrollReveal } from '../hooks/useScrollReveal';
import './Stats.css';

const stats = [
  { number: '+15', label: 'سنة خبرة', icon: '🏆' },
  { number: '+10,000', label: 'مريض سعيد', icon: '😊' },
  { number: '3', label: 'فروع', icon: '📍' },
  { number: '+50', label: 'أخصائي وطبيب', icon: '👨‍⚕️' },
];

function Stats() {
  const ref = useScrollReveal();

  return (
    <section className="stats">
      <div className="container">
        <div ref={ref} className="stats__grid fade-in">
          {stats.map((stat) => (
            <div key={stat.label} className="stats__item">
              <span className="stats__icon">{stat.icon}</span>
              <strong className="stats__number">{stat.number}</strong>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
