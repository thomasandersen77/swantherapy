import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import type { Lang } from './content/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import SwanTherapy from './components/SwanTherapy';
import NatureSection from './components/NatureSection';
import Principles from './components/Principles';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangContextType>({
  lang: 'no',
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);

export default function App() {
  const [lang, setLang] = useState<Lang>('no');

  const handleFadeIn = useCallback(() => {
    const els = document.querySelectorAll('.fade-in:not(.visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = handleFadeIn();
    const timer = setTimeout(handleFadeIn, 100);
    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, [lang, handleFadeIn]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <main>
        <Hero />
        <SwanTherapy />
        <NatureSection />
        <Principles />
        <QuoteSection />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
