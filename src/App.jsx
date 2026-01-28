// src/App.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.set('form-name', 'demo-request');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        e.target.reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert(t('errors.formError'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('errors.connectionError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: t('features.correlation.title'),
      desc: t('features.correlation.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('features.siem.title'),
      desc: t('features.siem.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: t('features.dashboards.title'),
      desc: t('features.dashboards.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('features.remediation.title'),
      desc: t('features.remediation.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: t('features.forensic.title'),
      desc: t('features.forensic.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: t('features.governance.title'),
      desc: t('features.governance.desc'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const integrations = [
    { name: "Wazuh", color: "text-orange-500" },
    { name: "Splunk", color: "text-green-500" },
    { name: "QRadar", color: "text-blue-500" },
    { name: "Elasticsearch", color: "text-yellow-400" },
    { name: "Redis", color: "text-red-500" },
    { name: "Celery", color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-darker text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-dark border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">SentinelArg</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#about" className="hover:text-primary transition">{t('nav.producto')}</a>
              <a href="#features" className="hover:text-primary transition">{t('nav.funcionalidades')}</a>
              <a href="#integrations" className="hover:text-primary transition">{t('nav.integraciones')}</a>
              <a href="#about-us" className="hover:text-primary transition">{t('nav.sobreNosotros')}</a>
              
              {/* Language Switch - Desktop */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => i18n.changeLanguage('es')}
                  className={`px-2 py-1 text-xs rounded ${
                    i18n.language.startsWith('es')
                      ? 'bg-slate-700 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  aria-label="Español"
                >
                  ES
                </button>
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className={`px-2 py-1 text-xs rounded ${
                    i18n.language.startsWith('en')
                      ? 'bg-slate-700 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              <a href="#demo" className="bg-primary hover:bg-sky-600 text-slate-900 px-4 py-2 rounded font-medium transition">
                {t('nav.solicitarDemo')}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-primary focus:outline-none"
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
            <div className="md:hidden py-4 border-t border-slate-800">
              <a href="#about" className="block py-2 hover:text-primary">{t('nav.producto')}</a>
              <a href="#features" className="block py-2 hover:text-primary">{t('nav.funcionalidades')}</a>
              <a href="#integrations" className="block py-2 hover:text-primary">{t('nav.integraciones')}</a>
              <a href="#about-us" className="block py-2 hover:text-primary">{t('nav.sobreNosotros')}</a>
              
              {/* Language Switch - Mobile */}
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  onClick={() => {
                    i18n.changeLanguage('es');
                    setIsMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-xs rounded ${
                    i18n.language.startsWith('es') ? 'bg-slate-700 text-white' : 'text-gray-400'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => {
                    i18n.changeLanguage('en');
                    setIsMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-xs rounded ${
                    i18n.language.startsWith('en') ? 'bg-slate-700 text-white' : 'text-gray-400'
                  }`}
                >
                  EN
                </button>
              </div>
              
              <a href="#demo" className="block py-2 bg-primary text-slate-900 text-center rounded mt-2">{t('nav.solicitarDemo')}</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Call-to-action: Ver imágenes */}
      <div className="text-center py-6">
        <a href="/images.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-primary hover:bg-sky-600 text-slate-900 rounded-lg font-medium transition shadow-lg">
          🖼️ {t('images.title')}
        </a>
      </div>

      {/* About Product Section */}
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

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('features.title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-16 bg-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('integrations')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">{t('integrations.subtitle')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((tech, index) => (
              <div key={index} className={`text-2xl font-bold ${tech.color}`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
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

      {/* Demo Request Section */}
      <section id="demo" className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">{t('demo.title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">{t('demo.subtitle')}</p>
          </div>

          {submitSuccess ? (
            <div className="bg-emerald-900/30 border border-emerald-700 text-emerald-300 p-6 rounded-lg text-center">
              {t('demo.success')}
            </div>
          ) : (
            <form
              name="demo-request"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="demo-request" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">{t('form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">{t('form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">{t('form.company')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">{t('form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-bold transition ${
                  isSubmitting
                    ? 'bg-slate-600 cursor-not-allowed'
                    : 'bg-primary hover:bg-sky-600 text-slate-900'
                }`}
              >
                {isSubmitting ? t('form.sending') : t('form.send')}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          
          <p className="mt-3">
            <a href="/privacy" className="hover:text-primary transition mx-2">{t('footer.privacy')}</a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary transition mx-2">{t('footer.terms')}</a>
          </p>

          <p className="mt-3">
            <a href="mailto:contacto@sentinelarg.com.ar" className="hover:text-primary transition">
              {t('footer.contact')}
            </a>
          </p>

          <div className="mt-4 flex justify-center space-x-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
              aria-label={t('footer.whatsapp')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/SentinelArg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
              aria-label={t('footer.telegram')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.682-.537.842-1.142.521l-3.25-2.02-1.528 1.457c-.14.133-.28.28-.42.42-.23.23-.47.33-.74.33-.3 0-.57-.18-.83-.53l-2.6-3.56 9.24-6.16c.39-.25.78-.1.78.34 0 .13-.05.26-.15.38z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Botones flotantes de contacto */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          aria-label={t('footer.whatsapp')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/SentinelArg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          aria-label={t('footer.telegram')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.682-.537.842-1.142.521l-3.25-2.02-1.528 1.457c-.14.133-.28.28-.42.42-.23.23-.47.33-.74.33-.3 0-.57-.18-.83-.53l-2.6-3.56 9.24-6.16c.39-.25.78-.1.78.34 0 .13-.05.26-.15.38z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;