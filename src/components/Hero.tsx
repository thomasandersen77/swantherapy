import { useLang } from '../App';
import { translations } from '../content/translations';
import './Hero.css';

export default function Hero() {
  const { lang } = useLang();
  const t = translations.hero[lang];

  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__content fade-in">
          <p className="hero__eyebrow">Swan Therapy</p>
          <img
            src="/images/svanejenta-logo.jpg"
            alt={lang === 'no' ? 'Svanejenta logo – illustrasjon av svane i gulltone' : 'Svanejenta logo – golden swan emblem'}
            className="hero__logo"
            width={240}
            height={240}
          />
          <h1>{t.heading}</h1>
          <p className="hero__body">{t.body}</p>
          <p className="hero__emphasis">{t.emphasis}</p>
          <div className="hero__actions">
            <a href="#therapy" className="btn btn--primary">{t.cta}</a>
            <a href="#about" className="btn btn--secondary">{t.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
