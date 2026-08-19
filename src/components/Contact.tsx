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
            <a
              href="https://www.instagram.com/svanejenta/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label={lang === 'no' ? 'Følg Svanejenta på Instagram (åpnes i ny fane)' : 'Follow Svanejenta on Instagram (opens in a new tab)'}
            >
              {t.cta}
            </a>
          </div>
          <nav className="contact__social" aria-label={lang === 'no' ? 'Sosiale medier' : 'Social media'}>
            <a
              href="https://www.instagram.com/svanejenta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === 'no' ? 'Instagram – Svanejenta (åpnes i ny fane)' : 'Instagram – Svanejenta (opens in a new tab)'}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/marit.gsamuelsen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === 'no' ? 'Facebook – Marit G. Samuelsen (åpnes i ny fane)' : 'Facebook – Marit G. Samuelsen (opens in a new tab)'}
            >
              Facebook
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
