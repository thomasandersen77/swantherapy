import { useLang } from '../App';
import { translations } from '../content/translations';
import './Gallery.css';

const images = [
  {
    name: 'swan-misty-lake-sunrise',
    no: 'Svane på blikkstille vann i morgentåke og soloppgang',
    en: 'Swan on a calm, misty lake at sunrise',
    position: 'center 40%',
  },
  {
    name: 'two-swans-mountain-lake-sunset',
    no: 'To svaner på en rolig innsjø i varm kveldssol',
    en: 'Two swans on a tranquil lake at sunset',
    position: 'center center',
  },
  {
    name: 'swan-with-cygnets-sunrise',
    no: 'Svane med unger ved vannkanten i mykt morgenlys',
    en: 'Swan with cygnets resting by the water in gentle morning light',
    position: 'center 30%',
  },
  {
    name: 'swan-curved-neck-golden-hour',
    no: 'Svane ved vannkanten i gyllent morgenlys',
    en: 'Swan by the water in soft golden morning light',
    position: 'center 35%',
  },
  {
    name: 'two-swans-meadow-river-sunset',
    no: 'To svaner i elven omgitt av eng og gyllent kveldslys',
    en: 'Two swans on the river surrounded by meadows and gentle sunset light',
    position: 'center center',
  },
  {
    name: 'svanejenta',
    no: 'Svanejenta – portrett',
    en: 'Svanejenta – portrait',
    position: 'center center',
  },
];

function srcSet(name: string, ext: 'webp' | 'jpg') {
  return [640, 1024, 1600]
    .map((w) => `/images/${name}-${w}.${ext} ${w}w`)
    .join(', ');
}

export default function Gallery() {
  const { lang } = useLang();

  return (
    <section className="section">
      <div className="container">
        <h2 className="gallery__heading fade-in">{translations.gallery[lang].heading}</h2>
        <div className="gallery fade-in">
          {images.map((img) => (
            <div key={img.name} className="gallery__item">
              <picture>
                <source type="image/webp" srcSet={srcSet(img.name, 'webp')} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
                <img
                  src={`/images/${img.name}.jpg`}
                  srcSet={srcSet(img.name, 'jpg')}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  alt={img[lang]}
                  style={{ objectPosition: img.position }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
