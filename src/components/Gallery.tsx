import { useLang } from '../App';
import { translations } from '../content/translations';
import './Gallery.css';

const images = [
  {
    name: 'swan-misty-lake-sunrise',
    no: 'Svane i morgentåke ved soloppgang',
    en: 'Swan on a misty lake at sunrise',
  },
  {
    name: 'two-swans-mountain-lake-sunset',
    no: 'To svaner på fjellvann i solnedgang',
    en: 'Two swans on a mountain lake at sunset',
  },
  {
    name: 'swan-with-cygnets-sunrise',
    no: 'Svane med unger i morgenlys',
    en: 'Swan with cygnets in morning light',
  },
  {
    name: 'swan-curved-neck-golden-hour',
    no: 'Svane med buet hals i gull-lys',
    en: 'Swan with curved neck in golden hour light',
  },
  {
    name: 'two-swans-meadow-river-sunset',
    no: 'To svaner på elv gjennom eng i solnedgang',
    en: 'Two swans on a meadow river at sunset',
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
                <source type="image/webp" srcSet={srcSet(img.name, 'webp')} sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" />
                <img
                  src={`/images/${img.name}.jpg`}
                  srcSet={srcSet(img.name, 'jpg')}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt={img[lang]}
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
