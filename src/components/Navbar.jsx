// src/components/Navbar.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t('nav.producto') },
    { href: '#features', label: t('nav.funcionalidades') },
    { href: '#integrations', label: t('nav.integraciones') },
    { href: '#about-us', label: t('nav.sobreNosotros') },
    { href: '#careers', label: t('nav.trabajaConNosotros') }
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-dark border-b border-slate-800 sticky top-0 z-50" role="navigation" aria-label={t('nav.producto')}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">SentinelArg</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switch - Desktop */}
            <div className="flex items-center space-x-1" role="group" aria-label={t('accessibility.languageSelector')}>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`px-2 py-1 text-xs rounded ${
                  i18n.language.startsWith('es')
                    ? 'bg-slate-700 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                aria-label="Español"
                aria-pressed={i18n.language.startsWith('es')}
              >
                ES
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-xs rounded ${
                  i18n.language.startsWith('en')
                    ? 'bg-slate-700 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                aria-label="English"
                aria-pressed={i18n.language.startsWith('en')}
              >
                EN
              </button>
            </div>

            <a
              href="#demo"
              className="bg-primary hover:bg-sky-600 text-slate-900 px-4 py-2 rounded font-medium transition"
            >
              {t('nav.solicitarDemo')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-slate-800">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switch - Mobile */}
            <div className="flex justify-center space-x-2 mt-4" role="group" aria-label={t('accessibility.languageSelector')}>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`px-2 py-1 text-xs rounded ${
                  i18n.language.startsWith('es') ? 'bg-slate-700 text-white' : 'text-gray-400'
                }`}
                aria-pressed={i18n.language.startsWith('es')}
              >
                ES
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-xs rounded ${
                  i18n.language.startsWith('en') ? 'bg-slate-700 text-white' : 'text-gray-400'
                }`}
                aria-pressed={i18n.language.startsWith('en')}
              >
                EN
              </button>
            </div>
            
            <a
              href="#demo"
              className="block py-2 bg-primary text-slate-900 text-center rounded mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.solicitarDemo')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
