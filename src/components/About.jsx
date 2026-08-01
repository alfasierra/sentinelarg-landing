// src/components/About.jsx
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="py-16 bg-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg text-center leading-relaxed">
            {t('about.desc')}
          </p>
        </div>
      </section>

      <section id="about-us" className="py-16 bg-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('aboutUs.title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            {t('aboutUs.desc')}
          </p>
          <p className="text-gray-400 text-center mt-4">
            {t('aboutUs.desc2')}
          </p>
          <p className="text-gray-300 text-center mt-6 font-medium">
            — {t('aboutUs.signature')}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
