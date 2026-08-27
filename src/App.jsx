// src/App.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmittingCareers, setIsSubmittingCareers] = useState(false);
  const [submitSuccessCareers, setSubmitSuccessCareers] = useState(false);

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
        alert(t('errors.formError', 'Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('errors.connectionError', 'Error de conexión. Verifica tu internet e inténtalo de nuevo.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitCareers = async (e) => {
    e.preventDefault();
    setIsSubmittingCareers(true);

    const formData = new FormData(e.target);
    formData.set('form-name', 'job-application');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitSuccessCareers(true);
        e.target.reset();
        setTimeout(() => setSubmitSuccessCareers(false), 5000);
      } else {
        alert(t('errors.formError', 'Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('errors.connectionError', 'Error de conexión. Verifica tu internet e inténtalo de nuevo.'));
    } finally {
      setIsSubmittingCareers(false);
    }
  };

  const features = [
    {
      title: t('features.correlation.title', 'Correlación inteligente de amenazas'),
      desc: t('features.correlation.desc', 'Detecta ataques multietapa y movimientos laterales mediante reglas avanzadas y machine learning.'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('features.siem.title', 'Integración nativa con SIEMs'),
      desc: t('features.siem.desc', 'Conecta Wazuh, Splunk y QRadar en un único panel con normalización de eventos y alertas unificadas.'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: t('features.dashboards.title', 'Dashboards por rol'),
      desc: t('features.dashboards.desc', 'Interfaces personalizadas para analistas, operadores, auditores y administradores con visualizaciones D3.js.'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('features.remediation.title', 'Auto-remediación segura'),
      desc: t('features.remediation.desc', 'Ejecuta comandos de mitigación validados con confirmación humana y registro completo de acciones.'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: t('features.forensic.title', 'Módulo forense integrado'),
      desc: t('features.forensic.desc', 'Análisis de memoria con Volatility y reglas YARA para hunting avanzado y respuesta a incidentes.'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: t('features.governance.title', 'Gobernanza completa'),
      desc: t('features.governance.desc', 'RBAC, OAuth 2.0, auditoría de acciones y seguimiento de estado de alertas con trazabilidad total.'),
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

  const redAIFeatures = [
    {
      icon: "🛡️",
      title: "150+ Herramientas Integradas",
      desc: "Nmap, Nuclei, SQLMap, Gobuster, FFuf, Nikto y más ejecutándose simultáneamente"
    },
    {
      icon: "",
      title: "Reportes PDF Ejecutivos",
      desc: "Generación automática con CVEs, CVSS y recomendaciones listas para gerencia"
    },
    {
      icon: "🤖",
      title: "IA Local Privada",
      desc: "Análisis contextual inteligente sin enviar datos sensibles a la nube"
    },
    {
      icon: "⚡",
      title: "Sin Dependencias",
      desc: "No requiere Python ni librerías. Compilado y listo para usar"
    }
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
              <a href="#about" className="hover:text-primary transition">{t('nav.producto', 'Producto')}</a>
              <a href="#redai" className="text-[#8B0000] hover:text-red-700 transition font-semibold">Red AI</a>
              <a href="#features" className="hover:text-primary transition">{t('nav.funcionalidades', 'Funcionalidades')}</a>
              <a href="#integrations" className="hover:text-primary transition">{t('nav.integraciones', 'Integraciones')}</a>
              <a href="#about-us" className="hover:text-primary transition">{t('nav.sobreNosotros', 'Sobre Nosotros')}</a>
              <a href="#careers" className="hover:text-primary transition">{t('nav.trabajaConNosotros', 'Trabaja con Nosotros')}</a>
              
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
                {t('nav.solicitarDemo', 'Solicitar Demo')}
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
              <a href="#about" className="block py-2 hover:text-primary">{t('nav.producto', 'Producto')}</a>
              <a href="#redai" className="block py-2 text-[#8B0000] font-semibold">SentinelArg Red AI</a>
              <a href="#features" className="block py-2 hover:text-primary">{t('nav.funcionalidades', 'Funcionalidades')}</a>
              <a href="#integrations" className="block py-2 hover:text-primary">{t('nav.integraciones', 'Integraciones')}</a>
              <a href="#about-us" className="block py-2 hover:text-primary">{t('nav.sobreNosotros', 'Sobre Nosotros')}</a>
              <a href="#careers" className="block py-2 hover:text-primary">{t('nav.trabajaConNosotros', 'Trabaja con Nosotros')}</a>
              
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
              
              <a href="#demo" className="block py-2 bg-primary text-slate-900 text-center rounded mt-2">{t('nav.solicitarDemo', 'Solicitar Demo')}</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="py-16 md:py-24 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
        <img
          src="/sentinelarg-hero.jpg"
          alt={t('hero.title', 'Protección Cibernética Inteligente para Empresas Argentinas')}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-700"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {t('hero.title', 'Protección Cibernética Inteligente para Empresas Argentinas')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('hero.subtitle', 'Plataforma unificada de seguridad que correlaciona amenazas, automatiza respuestas y simplifica la gestión de riesgos con integración nativa a tus herramientas existentes.')}
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="#demo"
              className="inline-block bg-primary hover:bg-sky-600 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition shadow-lg hover:shadow-primary/30"
            >
              {t('cta.demo', 'Ver Demo')}
            </a>
            <a
              href="#redai"
              className="inline-block bg-[#8B0000] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition shadow-lg shadow-red-900/50"
            >
              Conocer Red AI
            </a>
          </div>
        </div>
      </header>

      {/* NUEVA SECCIÓN: SentinelArg Red AI */}
      <section id="redai" className="py-20 bg-gradient-to-b from-gray-950 to-dark border-t-4 border-[#8B0000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-[#8B0000] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Nuevo Producto
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Sentinel<span className="text-[#8B0000]">Arg</span> <span className="text-[#00FF00]">Red AI</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#00FFFF] font-mono mb-6">
              Plataforma de Pentesting Automatizado con Inteligencia Artificial
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Navaja suiza de pentesting que integra 150+ herramientas de seguridad con IA local para análisis de vulnerabilidades. 
              Detecta CVEs críticos y genera reportes ejecutivos en PDF automáticamente.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {redAIFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#00FF00] transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Versiones */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Classic */}
            <div className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-700 hover:border-[#00FF00] transition-all">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Classic</h3>
                <span className="ml-3 bg-green-900 text-[#00FF00] px-3 py-1 rounded text-xs font-bold">DETERMINISTA</span>
              </div>
              <p className="text-gray-400 mb-6">Versión 100% determinista, ideal para entornos corporativos restrictivos y bancos.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Sin IA, reglas estáticas
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  100% Offline
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Compliance ISO 27001, PCI-DSS
                </li>
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-gray-900 rounded-2xl p-8 border-2 border-[#8B0000] shadow-2xl shadow-red-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#8B0000] text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                RECOMENDADO
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Pro</h3>
                <span className="ml-3 bg-red-900/50 text-white px-3 py-1 rounded text-xs font-bold">CON IA</span>
              </div>
              <p className="text-gray-400 mb-6">Versión con inteligencia artificial para análisis contextual inteligente de vulnerabilidades.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#8B0000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  IA local para análisis contextual
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#8B0000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Priorización inteligente de CVEs
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#8B0000] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Reportes ejecutivos con IA
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <a href="#videos" className="bg-transparent border-2 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black font-bold py-4 px-10 rounded-lg text-lg transition">
              Ver cómo funciona Red AI
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-gray-500 text-sm mt-8">
            ⚠️ Herramienta diseñada exclusivamente para auditorías de seguridad autorizadas, Red Teaming y pruebas de penetración éticas
          </p>
        </div>
      </section>
{/* SECCIÓN: Videos de Red AI */}
<section id="videos" className="py-20 bg-darker">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Sentinel<span className="text-[#8B0000]">Arg</span> <span className="text-[#00FF00]">Red AI</span> en Acción
      </h2>
      <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-4"></div>
      <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        Mirá cómo SentinelArg Red AI automatiza el pentesting, detecta vulnerabilidades y genera reportes ejecutivos en tiempo real.
      </p>
    </div>

    {/* Grid de Videos de YouTube */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Video 1 */}
      <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ID_DEL_VIDEO_1"
            title="SentinelArg Red AI - Demo 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg">Escaneo Automatizado con Red AI</h3>
          <p className="text-gray-400 text-sm mt-1">Demostración del flujo completo de pentesting</p>
        </div>
      </div>

      {/* Video 2 */}
      <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ID_DEL_VIDEO_2"
            title="SentinelArg Red AI - Demo 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg">Generación de Reportes PDF</h3>
          <p className="text-gray-400 text-sm mt-1">Reportes ejecutivos con CVEs y CVSS</p>
        </div>
      </div>

      {/* Video 3 */}
      <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ID_DEL_VIDEO_3"
            title="SentinelArg Red AI - Demo 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg">Análisis con IA Local</h3>
          <p className="text-gray-400 text-sm mt-1">Priorización inteligente de vulnerabilidades</p>
        </div>
      </div>

      {/* Video 4 */}
      <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ID_DEL_VIDEO_4"
            title="SentinelArg Red AI - Demo 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg">Versión Classic vs Pro</h3>
          <p className="text-gray-400 text-sm mt-1">Comparativa entre ambas modalidades</p>
        </div>
      </div>
    </div>

    {/* Botón para volver arriba */}
    <div className="text-center mt-12">
      <a href="#redai" className="inline-block bg-[#8B0000] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition">
        ← Volver a Red AI
      </a>
    </div>
  </div>
</section>

      {/* Call-to-action: Ver imágenes */}
      <div className="text-center py-6">
        <a href="/images.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-primary hover:bg-sky-600 text-slate-900 rounded-lg font-medium transition shadow-lg">
          🖼️ Ver imágenes de SentinelArg
        </a>
      </div>

      {/* About Product Section */}
      <section id="about" className="py-16 bg-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('about.title', 'Sobre SentinelArg')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg text-center leading-relaxed">
            {t('about.desc', 'SentinelArg es una plataforma avanzada de ciberseguridad diseñada para detectar, investigar y responder a amenazas complejas en entornos empresariales. Combina inteligencia artificial con integraciones nativas para ofrecer una visibilidad completa de tu infraestructura.')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('features.title', 'Funcionalidades Clave')}</h2>
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
            <h2 className="text-3xl font-bold">{t('integrations.title', 'Integraciones Tecnológicas')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">{t('integrations.subtitle', 'Funciona sin problemas con tu stack de seguridad actual')}</p>
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
            <h2 className="text-3xl font-bold">{t('aboutUs.title', 'Sobre Nosotros')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            {t('aboutUs.desc', 'Somos un equipo argentino apasionado por la ciberseguridad, construyendo herramientas que realmente resuelven problemas del mundo real.')}
          </p>
          <p className="text-gray-400 text-center mt-4">
            {t('aboutUs.desc2', 'Desarrollamos SentinelArg desde cero para empresas que necesitan protección avanzada sin complejidad innecesaria.')}
          </p>
          <p className="text-gray-300 text-center mt-6 font-medium">
            — {t('aboutUs.signature', 'El equipo de SentinelArg')}
          </p>
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="demo" className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">{t('demo.title', 'Solicita una Demostración')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">{t('demo.subtitle', 'Agenda una sesión personalizada y descubre cómo SentinelArg puede proteger tu organización.')}</p>
          </div>

          {submitSuccess ? (
            <div className="bg-emerald-900/30 border border-emerald-700 text-emerald-300 p-6 rounded-lg text-center">
              {t('demo.success', '¡Gracias! Hemos recibido tu solicitud. Nos contactaremos contigo en breve para coordinar tu demostración.')}
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
                <label htmlFor="name" className="block text-sm font-medium mb-1">{t('form.name', 'Nombre completo')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">{t('form.email', 'Correo electrónico')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">{t('form.company', 'Empresa')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">{t('form.message', 'Mensaje (opcional)')}</label>
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
                {isSubmitting ? t('form.sending', 'Enviando...') : t('form.send', 'Enviar solicitud')}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 bg-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('careers.title', 'Trabaja con Nosotros')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">{t('careers.subtitle', 'Únete a nuestro equipo y construye el futuro de la ciberseguridad')}</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-3">{t('careers.whyJoin.title', '¿Por qué unirte a SentinelArg?')}</h3>
            <p className="text-gray-300">{t('careers.whyJoin.desc', 'Somos una startup en crecimiento que valora el talento, la innovación y el impacto real en la seguridad de empresas argentinas.')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('careers.whyJoin.benefit1', 'Trabajo remoto flexible')}</span>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('careers.whyJoin.benefit2', 'Proyectos desafiantes con tecnologías de vanguardia')}</span>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('careers.whyJoin.benefit3', 'Crecimiento profesional y capacitación continua')}</span>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('careers.whyJoin.benefit4', 'Equipo colaborativo y cultura de aprendizaje')}</span>
              </div>
            </div>
          </div>

          {submitSuccessCareers ? (
            <div className="bg-emerald-900/30 border border-emerald-700 text-emerald-300 p-6 rounded-lg text-center">
              {t('careers.success', '¡Gracias por tu interés! Hemos recibido tu postulación y te contactaremos si hay una oportunidad que coincida con tu perfil.')}
            </div>
          ) : (
            <form
              name="job-application"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmitCareers}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="job-application" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="career-name" className="block text-sm font-medium mb-1">{t('form.name', 'Nombre completo')}</label>
                <input
                  type="text"
                  id="career-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="career-email" className="block text-sm font-medium mb-1">{t('form.email', 'Correo electrónico')}</label>
                <input
                  type="email"
                  id="career-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="career-phone" className="block text-sm font-medium mb-1">{t('careers.form.phone', 'Teléfono')}</label>
                <input
                  type="tel"
                  id="career-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="career-position" className="block text-sm font-medium mb-1">{t('careers.form.position', 'Posición de interés')}</label>
                <select
                  id="career-position"
                  name="position"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t('careers.form.selectPosition', 'Selecciona una posición...')}</option>
                  <option value="desarrollador-fullstack">{t('careers.positions.fullstack', 'Desarrollador Fullstack')}</option>
                  <option value="desarrollador-frontend">{t('careers.positions.frontend', 'Desarrollador Frontend')}</option>
                  <option value="desarrollador-backend">{t('careers.positions.backend', 'Desarrollador Backend')}</option>
                  <option value="analista-ciberseguridad">{t('careers.positions.securityAnalyst', 'Analista de Ciberseguridad')}</option>
                  <option value="devops">{t('careers.positions.devops', 'DevOps / SRE')}</option>
                  <option value="otro">{t('careers.positions.other', 'Otro (especificar en mensaje)')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="career-linkedin" className="block text-sm font-medium mb-1">{t('careers.form.linkedin', 'Perfil de LinkedIn (opcional)')}</label>
                <input
                  type="url"
                  id="career-linkedin"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/tu-perfil"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-slate-900 hover:file:bg-sky-600"
                />
              </div>

              <div>
                <label htmlFor="career-github" className="block text-sm font-medium mb-1">{t('careers.form.github', 'Perfil de GitHub (opcional)')}</label>
                <input
                  type="url"
                  id="career-github"
                  name="github"
                  placeholder="https://github.com/tu-usuario"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-slate-900 hover:file:bg-sky-600"
                />
              </div>

              <div>
                <label htmlFor="career-cv" className="block text-sm font-medium mb-1">{t('careers.form.cv', 'Curriculum Vitae (CV)')}</label>
                <input
                  type="file"
                  id="career-cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-slate-900 hover:file:bg-sky-600"
                />
                <p className="text-xs text-gray-500 mt-1">{t('careers.form.cvHelp', 'Formatos aceptados: PDF, DOC, DOCX (máx. 5MB)')}</p>
              </div>

              <div>
                <label htmlFor="career-message" className="block text-sm font-medium mb-1">{t('careers.form.message', 'Carta de presentación o mensaje')}</label>
                <textarea
                  id="career-message"
                  name="message"
                  rows="4"
                  placeholder={t('careers.form.messagePlaceholder', 'Cuéntanos por qué te interesa trabajar con nosotros y qué aportas al equipo...')}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmittingCareers}
                className={`w-full py-3 px-6 rounded-lg font-bold transition ${
                  isSubmittingCareers
                    ? 'bg-slate-600 cursor-not-allowed'
                    : 'bg-primary hover:bg-sky-600 text-slate-900'
                }`}
              >
                {isSubmittingCareers ? t('form.sending', 'Enviando...') : t('careers.form.submit', 'Enviar postulación')}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>{t('footer.copyright', `© ${new Date().getFullYear()} SentinelArg. Todos los derechos reservados.`)}</p>
          
          <p className="mt-3">
            <a href="/privacy" className="hover:text-primary transition mx-2">{t('footer.privacy', 'Política de Privacidad')}</a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary transition mx-2">{t('footer.terms', 'Términos de Servicio')}</a>
          </p>

          <p className="mt-3">
            <a href="mailto:contacto@sentinelarg.com.ar" className="hover:text-primary transition">
              {t('footer.contact', 'contacto@sentinelarg.com.ar')}
            </a>
          </p>

          <div className="mt-4 flex justify-center space-x-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
              aria-label={t('footer.whatsapp', 'Contactar por WhatsApp')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sentinelarg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition"
              aria-label={t('footer.linkedin', 'Visitar LinkedIn de la empresa')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.447H16.393V15.234c0-.447-.038-.894-.126-1.34-.088-.446-.264-.873-.528-1.28-.264-.407-.616-.734-1.056-1.001-.44-.267-.952-.4-.156-.4-.53 0-1.055.136-1.57.408l-.232-.232c.53-.53 1.256-.86 2.065-.86.82 0 1.532.306 2.118.918.586.612.86 1.403.86 2.403v6.112h-4.055v-8.05h-3.908v8.05h-4.055V6.394h-4.055v-4.055h4.055v-3.908h8.11v3.908h4.055v4.055h-4.055v6.112z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/SentinelArg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
              aria-label={t('footer.telegram', 'Contactar por Telegram')}
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
          aria-label={t('footer.whatsapp', 'Contactar por WhatsApp')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/sentinelarg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          aria-label={t('footer.linkedin', 'Visitar LinkedIn de la empresa')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20.447 20.447H16.393V15.234c0-.447-.038-.894-.126-1.34-.088-.446-.264-.873-.528-1.28-.264-.407-.616-.734-1.056-1.001-.44-.267-.952-.4-.156-.4-.53 0-1.055.136-1.57.408l-.232-.232c.53-.53 1.256-.86 2.065-.86.82 0 1.532.306 2.118.918.586.612.86 1.403.86 2.403v6.112h-4.055v-8.05h-3.908v8.05h-4.055V6.394h-4.055v-4.055h4.055v-3.908h8.11v3.908h4.055v4.055h-4.055v6.112z"/>
          </svg>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/SentinelArg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          aria-label={t('footer.telegram', 'Contactar por Telegram')}
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