import { useLang } from '../App';
import { translations } from '../content/translations';
import './Principles.css';

export default function Principles() {
  const { lang } = useLang();
  const items = translations.principles[lang];

  return (
    <section className="section section--sage">
      <div className="container">
        <div className="principles fade-in">
          {items.map((item, i) => (
            <article key={i} className="principle">
              <span className="principle__number">{i + 1}</span>
              <h3>{item.title}</h3>
              {item.body.split('\n').map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
