import { useLang } from '../App';
import { translations } from '../content/translations';
import './SwanTherapy.css';

const therapyImage = 'swan-curved-neck-golden-hour';
const therapySizes = '(max-width: 768px) 100vw, 50vw';
const therapySrcSet = (ext: 'webp' | 'jpg') =>
  [640, 1024, 1600].map((w) => `/images/${therapyImage}-${w}.${ext} ${w}w`).join(', ');

export default function SwanTherapy() {
  const { lang } = useLang();
  const t = translations.therapy[lang];

  return (
    <section id="therapy" className="section section--alt">
      <div className="container therapy fade-in">
        <h2>{t.heading}</h2>
        <div className="therapy__content">
          <div className="therapy__image">
            <picture>
              <source type="image/webp" srcSet={therapySrcSet('webp')} sizes={therapySizes} />
              <img
                src={`/images/${therapyImage}.jpg`}
                srcSet={therapySrcSet('jpg')}
                sizes={therapySizes}
                alt={lang === 'no' ? 'Svane ved vannkanten i gyllent morgenlys' : 'Swan by the water in soft golden morning light'}
                className="img-cover therapy__img"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="therapy__text">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
