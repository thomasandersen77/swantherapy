import { useLang } from '../App';
import { translations } from '../content/translations';
import './About.css';

const pippiImage = 'pippi_01';
const pippiSizes = '(max-width: 640px) 100vw, 400px';
const pippiSrcSet = (ext: 'webp' | 'jpg') =>
  [640, 1024, 1600].map((w) => `/images/${pippiImage}-${w}.${ext} ${w}w`).join(', ');

export default function About() {
  const { lang } = useLang();
  const t = translations.about[lang];
  const pippiAlt = lang === 'no' ? 'Pippi, svanen' : 'Pippi, the swan';

  return (
    <section id="about" className="section section--alt">
      <div className="container about fade-in">
        <h2>{t.heading}</h2>
        <div className="about__text">
          {t.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div className="meet_pippi">
          <h2>{t.meetPippiHeading}</h2>
          <div className="meet_pippi__text">
            {t.meetPippiParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <picture>
            <source type="image/webp" srcSet={pippiSrcSet('webp')} sizes={pippiSizes} />
            <img
              src={`/images/${pippiImage}.jpg`}
              srcSet={pippiSrcSet('jpg')}
              sizes={pippiSizes}
              alt={pippiAlt}
              className="meet_pippi__image"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
