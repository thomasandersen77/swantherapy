import { useLang } from '../App';
import { translations } from '../content/translations';
import './Hero.css';

export default function Hero() {
  const { lang } = useLang();
  const t = translations.hero[lang];

  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <img
            src="/images/svanejenta-logo.jpg"
            alt="Svanejenta logo – gullfarget svane"
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
