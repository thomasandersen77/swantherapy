import { useState } from 'react';
import { useLang } from '../App';
import { translations } from '../content/translations';
import './Header.css';

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = translations.nav[lang];
  const navIds = translations.navIds;

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#" className="header__logo" aria-label="Svanejenta">
          #Svanejenta
        </a>

        <button
          className={`header__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Hovednavigasjon">
          <ul>
            {navItems.map((item, i) => (
              <li key={navIds[i]}>
                <a href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__lang">
            <button
              className={lang === 'no' ? 'active' : ''}
              onClick={() => setLang('no')}
              aria-label="Norsk"
            >
              NO
            </button>
            <span className="header__lang-sep">|</span>
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
