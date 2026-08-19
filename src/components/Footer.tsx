import { useLang } from '../App';
import { translations } from '../content/translations';
import './Footer.css';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">&copy; 2026 Svanejenta</p>
        <p className="footer__tagline">{translations.footer[lang]}</p>
      </div>
    </footer>
  );
}
