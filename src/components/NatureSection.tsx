import { useLang } from '../App';
import { translations } from '../content/translations';
import './NatureSection.css';

const natureImage = 'two-swans-meadow-river-sunset';
const natureSizes = '(max-width: 768px) 100vw, 50vw';
const natureSrcSet = (ext: 'webp' | 'jpg') =>
  [640, 1024, 1600].map((w) => `/images/${natureImage}-${w}.${ext} ${w}w`).join(', ');

export default function NatureSection() {
  const { lang } = useLang();
  const t = translations.nature[lang];

  return (
    <section id="nature" className="section">
      <div className="container nature fade-in">
        <div className="nature__grid">
          <div className="nature__image">
            <picture>
              <source type="image/webp" srcSet={natureSrcSet('webp')} sizes={natureSizes} />
              <img
                src={`/images/${natureImage}.jpg`}
                srcSet={natureSrcSet('jpg')}
                sizes={natureSizes}
                alt={lang === 'no' ? 'To svaner på elv gjennom eng i solnedgang' : 'Two swans on a meadow river at sunset'}
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="nature__text">
            <h2>{t.heading}</h2>
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
