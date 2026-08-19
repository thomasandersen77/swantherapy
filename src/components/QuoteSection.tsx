import { useLang } from '../App';
import { translations } from '../content/translations';
import './QuoteSection.css';

export default function QuoteSection() {
  const { lang } = useLang();

  return (
    <section className="section quote-section">
      <div className="container">
        <figure className="quote fade-in">
          <blockquote>
            <p>&laquo;{translations.quote[lang]}&raquo;</p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
