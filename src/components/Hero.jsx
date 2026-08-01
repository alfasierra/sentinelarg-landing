// src/components/Hero.jsx
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header id="home" className="py-16 md:py-24 bg-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
      <img
        src="/sentinelarg-hero.jpg"
        alt={t('hero.title')}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-700"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          {t('hero.title')}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <a
            href="#demo"
            className="inline-block bg-primary hover:bg-sky-600 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition shadow-lg hover:shadow-primary/30"
          >
            {t('cta.demo')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
