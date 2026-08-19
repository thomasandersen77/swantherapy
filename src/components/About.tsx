import { useLang } from '../App';
import { translations } from '../content/translations';
import './About.css';

export default function About() {
  const { lang } = useLang();
  const t = translations.about[lang];

  return (
    <section id="about" className="section section--alt">
      <div className="container about fade-in">
        <h2>{t.heading}</h2>
        <div className="about__text">
          {t.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </section>
  );
}
