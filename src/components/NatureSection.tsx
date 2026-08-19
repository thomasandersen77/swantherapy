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
        <h2>{t.heading}</h2>
        <div className="nature__grid">
          <div className="nature__image">
            <picture>
              <source type="image/webp" srcSet={natureSrcSet('webp')} sizes={natureSizes} />
              <img
                src={`/images/${natureImage}.jpg`}
                srcSet={natureSrcSet('jpg')}
                sizes={natureSizes}
                alt={lang === 'no' ? 'To svaner i elven omgitt av eng og gyllent kveldslys' : 'Two swans on the river surrounded by meadows and gentle sunset light'}
                className="img-cover nature__img"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="nature__text">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
