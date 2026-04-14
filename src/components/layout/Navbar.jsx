import { useState } from 'react';

/**
 * Navigation bar component.
 *
 * Displays the portfolio owner's name and a language toggle. The
 * navigation is kept minimal for the V1; links can be added once
 * routing is implemented. The language toggle currently only updates
 * local state and does not affect content.
 */
function Navbar() {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <span className="font-bold text-cyan-300">
            Loïc Vidal‑Ferrasse
          </span>
        </div>
        <button
          onClick={toggleLanguage}
          className="text-sm text-cyan-300 hover:text-cyan-200 transition"
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;