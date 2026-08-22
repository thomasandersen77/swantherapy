import { useLang } from '../App';
import { translations } from '../content/translations';
import './About.css';

const pippiImages = ['pippi_01', 'pippi_02'] as const;
const pippiSizes = '(max-width: 540px) 90vw, 340px';
const pippiSrcSet = (imageName: string, ext: 'webp' | 'jpg') =>
  [640, 1024, 1600].map((w) => `/images/${imageName}-${w}.${ext} ${w}w`).join(', ');

const svanejentaImage = 'svanejenta';
const svanejentaSizes = '(max-width: 780px) 220px, 320px';
const svanejentaSrcSet = (ext: 'webp' | 'jpg') =>
  [640, 1024, 1600].map((w) => `/images/${svanejentaImage}-${w}.${ext} ${w}w`).join(', ');

export default function About() {
  const { lang } = useLang();
  const t = translations.about[lang];
  const pippiAlt = lang === 'no' ? 'Pippi, svanen' : 'Pippi, the swan';
  const svanejentaAlt = lang === 'no' ? 'Svanejenta ved vannet' : 'Svanejenta by the water';

  return (
    <section id="about" className="section section--alt">
      <div className="container about fade-in">
        <div className="about__intro">
          <picture>
            <source type="image/webp" srcSet={svanejentaSrcSet('webp')} sizes={svanejentaSizes} />
            <img
              src={`/images/${svanejentaImage}.jpg`}
              srcSet={svanejentaSrcSet('jpg')}
              sizes={svanejentaSizes}
              alt={svanejentaAlt}
              className="about__image"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="about__intro-content">
            <h2>{t.heading}</h2>
            <div className="about__text">
              {t.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </div>
        <div className="meet_pippi">
          <h2>{t.meetPippiHeading}</h2>
          <div className="meet_pippi__text">
            {t.meetPippiParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="meet_pippi__images">
            {pippiImages.map((imgName) => (
              <picture key={imgName} className="meet_pippi__picture">
                <source type="image/webp" srcSet={pippiSrcSet(imgName, 'webp')} sizes={pippiSizes} />
                <img
                  src={`/images/${imgName}.jpg`}
                  srcSet={pippiSrcSet(imgName, 'jpg')}
                  sizes={pippiSizes}
                  alt={pippiAlt}
                  className="meet_pippi__image"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
