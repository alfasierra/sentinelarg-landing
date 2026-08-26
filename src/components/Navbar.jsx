import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.cookie = `i18next=${lng}; path=/; SameSite=Lax; Secure`;
    setShowLangMenu(false);
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white">
            Sentinel<span className="text-red-500">Arg</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">{t('nav.features')}</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</a>
            <a href="/sentinelarg" className="text-red-400 hover:text-red-300 transition-colors font-medium">{t('nav.product')}</a>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase">{i18n.language}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 min-w-[100px]">
                  <button
                    onClick={() => changeLanguage('es')}
                    className={`w-full text-left px-4 py-2 text-sm ${i18n.language === 'es' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <a href="#demo" className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              {t('nav.demo')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">{t('nav.features')}</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="/sentinelarg" className="text-red-400 hover:text-red-300 transition-colors font-medium">{t('nav.product')}</a>
              
              {/* Mobile Language Selector */}
              <div className="flex items-center gap-4 pt-2 border-t border-gray-800">
                <Globe className="w-5 h-5 text-gray-400" />
                <button
                  onClick={() => changeLanguage('es')}
                  className={`px-3 py-1 rounded ${i18n.language === 'es' ? 'bg-red-600 text-white' : 'text-gray-300'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-red-600 text-white' : 'text-gray-300'}`}
                >
                  EN
                </button>
              </div>

              <a href="#demo" className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center">
                {t('nav.demo')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
