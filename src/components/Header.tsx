import { useState, useEffect } from 'react';
import { useLang } from '../App';
import { translations } from '../content/translations';
import './Header.css';

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = translations.nav[lang];
  const navIds = translations.navIds;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#" className="header__logo" aria-label="Svanejenta – til toppen">
          #Svanejenta
        </a>

        <button
          className={`header__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? (lang === 'no' ? 'Lukk meny' : 'Close menu') : (lang === 'no' ? 'Åpne meny' : 'Open menu')}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          type="button"
        >
          <span /><span /><span />
        </button>

        {menuOpen && (
          <div
            className="header__backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav
          id="main-nav"
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label={lang === 'no' ? 'Hovednavigasjon' : 'Main navigation'}
        >
          <ul>
            {navItems.map((item, i) => (
              <li key={navIds[i]}>
                <a href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__lang" role="group" aria-label={lang === 'no' ? 'Språkvelger' : 'Language selector'}>
            <button
              type="button"
              className={lang === 'no' ? 'active' : ''}
              onClick={() => {
                setLang('no');
                setMenuOpen(false);
              }}
              aria-label="Norsk"
              aria-pressed={lang === 'no'}
            >
              NO
            </button>
            <span className="header__lang-sep" aria-hidden="true">|</span>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => {
                setLang('en');
                setMenuOpen(false);
              }}
              aria-label="English"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
