import { useLang } from '../App';
import { translations } from '../content/translations';
import './Contact.css';

export default function Contact() {
  const { lang } = useLang();
  const t = translations.contact[lang];

  return (
    <section id="contact" className="section section--alt contact">
      <div className="container fade-in">
        <div className="contact__inner">
          <h2>{t.heading}</h2>
          {t.body.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <div className="contact__actions">
            <button className="btn btn--primary" type="button">
              {t.cta}
            </button>
          </div>
          <nav className="contact__social" aria-label="Social links">
            {/* Placeholder links – replace hrefs when ready */}
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
