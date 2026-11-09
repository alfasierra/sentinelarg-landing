// src/App.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmittingCareers, setIsSubmittingCareers] = useState(false);
  const [submitSuccessCareers, setSubmitSuccessCareers] = useState(false);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('mp');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const MP_LINK = "https://mpago.la/1tUxGKf";
  const STRIPE_LINK = "https://wise.com/pay/r/dTuxCzd5KTfhDH8";

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

  const openPaymentModal = (method) => {
    setPaymentMethod(method);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail) {
      alert(t('modal.alert.incomplete', 'Por favor completa tu nombre y email para poder enviarte la licencia.'));
      return;
    }
    const prospectData = {
      name: customerName,
      email: customerEmail,
      company: customerCompany,
      plan: 'pro',
      method: paymentMethod,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('sentinelarg_prospect', JSON.stringify(prospectData));
    setShowPaymentModal(false);
    const targetLink = paymentMethod === 'mp' ? MP_LINK : STRIPE_LINK;
    window.open(targetLink, '_blank');
    setCustomerName('');
    setCustomerEmail('');
    setCustomerCompany('');
  };

  // FUNCIONALIDADES RE-ENFOCADAS EN RED AI (Ya no menciona SIEM)
  const features = [
    {
      title: t('features.ai.title', 'Inteligencia Artificial Local'),
      desc: t('features.ai.desc', 'Correlación automática de hallazgos y eliminación de falsos positivos sin enviar datos a la nube.'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: t('features.automation.title', 'Automatización Completa'),
      desc: t('features.automation.desc', 'Ejecuta más de 150 herramientas de seguridad (Nmap, Nuclei, SQLMap) en un solo flujo orquestado.'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
      title: t('features.reporting.title', 'Reportes Ejecutivos'),
      desc: t('features.reporting.desc', 'Generación automática de informes en PDF con mapeo a MITRE ATT&CK, OWASP y CVSS.'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    {
      title: t('features.standalone.title', '100% Offline y Portable'),
      desc: t('features.standalone.desc', 'Compilado con Nuitka. No requiere instalar Python ni dependencias en el sistema anfitrión.'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    {
      title: t('features.compliance.title', 'Mapeo de Compliance'),
      desc: t('features.compliance.desc', 'Alineación automática de vulnerabilidades con estándares como PCI-DSS, ISO 27001 y NIST.'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    },
    {
      title: t('features.docker.title', 'Despliegue Dockerizado'),
      desc: t('features.docker.desc', 'Todas las herramientas se ejecutan en contenedores aislados para garantizar la estabilidad y seguridad.'),
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    }
  ];

  const integrations = [
    { name: "Nmap", color: "text-green-500" },
    { name: "Nuclei", color: "text-orange-500" },
    { name: "SQLMap", color: "text-blue-500" },
    { name: "Gobuster", color: "text-yellow-400" },
    { name: "Metasploit", color: "text-red-500" },
    { name: "Nikto", color: "text-purple-400" }
  ];

  const redAIFeatures = [
    {
      icon: "🛡️",
      title: t('redai.features.tools.title', '150+ Herramientas Integradas'),
      desc: t('redai.features.tools.desc', 'Nmap, Nuclei, SQLMap, Gobuster, FFuf, Nikto y más ejecutándose simultáneamente')
    },
    {
      icon: "📄",
      title: t('redai.features.reports.title', 'Reportes PDF Ejecutivos'),
      desc: t('redai.features.reports.desc', 'Generación automática con CVEs, CVSS y recomendaciones listas para gerencia')
    },
    {
      icon: "🤖",
      title: t('redai.features.ia.title', 'IA Local Privada'),
      desc: t('redai.features.ia.desc', 'Análisis contextual inteligente sin enviar datos sensibles a la nube')
    },
    {
      icon: "⚡",
      title: t('redai.features.standalone.title', 'Sin Dependencias'),
      desc: t('redai.features.standalone.desc', 'No requiere Python ni librerías. Compilado y listo para usar')
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
            <div className="hidden md:flex items-center space-x-4">
              <a href="#about" className="hover:text-primary transition">{t('nav.producto', 'Producto')}</a>
              <a href="#features" className="hover:text-primary transition">{t('nav.funcionalidades', 'Funcionalidades')}</a>
              <a href="#videos" className="hover:text-primary transition">{t('nav.integraciones', 'Integraciones')}</a>
              <a href="#downloads" className="hover:text-primary transition">{t('nav.descargas', 'Descargas')}</a>
              <a href="#about-us" className="hover:text-primary transition">{t('nav.sobreNosotros', 'Sobre Nosotros')}</a>
              <div className="flex items-center space-x-1">
                <button onClick={() => i18n.changeLanguage('es')} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('es') ? 'bg-slate-700 text-white' : 'text-gray-400 hover:text-gray-200'}`}>ES</button>
                <button onClick={() => i18n.changeLanguage('en')} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('en') ? 'bg-slate-700 text-white' : 'text-gray-400 hover:text-gray-200'}`}>EN</button>
              </div>
              <a href="#downloads" className="bg-[#8B0000] hover:bg-red-800 text-white px-4 py-2 rounded font-medium transition">
                {t('cta.demo', 'Descargar ')}
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-primary focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <a href="#about" className="block py-2 hover:text-primary">{t('nav.producto', 'Producto')}</a>
              <a href="#features" className="block py-2 hover:text-primary">{t('nav.funcionalidades', 'Funcionalidades')}</a>
              <a href="#videos" className="block py-2 hover:text-primary">Videos</a>
              <a href="#downloads" className="block py-2 hover:text-primary">{t('nav.descargas', 'Descargas')}</a>
              <a href="#about-us" className="block py-2 hover:text-primary">{t('nav.sobreNosotros', 'Sobre Nosotros')}</a>
              <div className="flex justify-center space-x-2 mt-4">
                <button onClick={() => { i18n.changeLanguage('es'); setIsMenuOpen(false); }} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('es') ? 'bg-slate-700 text-white' : 'text-gray-400'}`}>ES</button>
                <button onClick={() => { i18n.changeLanguage('en'); setIsMenuOpen(false); }} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('en') ? 'bg-slate-700 text-white' : 'text-gray-400'}`}>EN</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section: 100% enfocado en Red AI */}
      <header id="home" className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B0000]/20 via-slate-950 to-slate-950"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/20 border border-[#8B0000]/50 text-[#8B0000] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            v1.0.1 Disponible para Linux x86_64
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            {t('hero.title', 'Pentesting Automatizado con Inteligencia Artificial')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle', 'Ejecuta más de 150 herramientas de seguridad, correlaciona hallazgos con IA local y genera reportes ejecutivos en PDF en minutos, no en días.')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#downloads" className="inline-flex items-center justify-center bg-[#8B0000] hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition shadow-lg shadow-red-900/50">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              {t('cta.demo', 'Descargar ')}
            </a>
            <a href="#videos" className="inline-flex items-center justify-center bg-transparent border-2 border-slate-700 hover:border-[#00FF00] text-gray-300 hover:text-[#00FF00] font-bold py-4 px-8 rounded-lg text-lg transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {t('cta.redai', 'Ver Casos de Uso')}
            </a>
          </div>
        </div>
      </header>

      {/* Barra de Confianza */}
      <div className="bg-dark border-y border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">{t('trustBar.title', 'Potenciado por las mejores herramientas de la industria')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Nmap', 'Nuclei', 'SQLMap', 'Gobuster', 'FFuf', 'Nikto', 'Metasploit'].map((tool) => (
              <span key={tool} className="text-xl md:text-2xl font-bold text-gray-400 font-mono">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      {/* About Section: Reenfocada en Red AI */}
      <section id="about" className="py-20 bg-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('about.title', '¿Por qué elegir SentinelArg Red AI?')}</h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg text-center leading-relaxed mb-8">
            {t('about.desc', 'Deja de depender de scripts sueltos y reportes manuales. SentinelArg Red AI es la navaja suiza del pentesting moderno: orquesta herramientas de la industria, elimina falsos positivos con IA y entrega un informe profesional listo para tu cliente o gerencia, todo sin enviar datos sensibles a la nube.')}
          </p>
        </div>
      </section>

      {/* SECCIÓN: SentinelArg Red AI Features Grid */}
      <section id="redai" className="py-20 bg-gradient-to-b from-gray-950 to-dark border-t-4 border-[#8B0000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-[#8B0000] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                {t('redai.badge', 'Nuevo Producto')}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Sentinel<span className="text-[#8B0000]">Arg</span> <span className="text-[#00FF00]">Red AI</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#00FFFF] font-mono mb-6">
              {t('redai.subtitle', 'Plataforma de Pentesting Automatizado con Inteligencia Artificial')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {redAIFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#00FF00] transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* SECCIÓN DE PRECIOS */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-10 border-2 border-[#8B0000] shadow-2xl shadow-red-900/20 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-[#8B0000] text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                {t('pricing.badge', 'VERSIÓN COMPLETA')}
              </div>
              <div className="flex items-center mb-4">
                <h3 className="text-3xl font-bold text-white">{t('pricing.pro.title', 'SentinelArg Pro')}</h3>
                <span className="ml-3 bg-red-900/50 text-white px-3 py-1 rounded text-xs font-bold">{t('pricing.pro.badge', 'CON IA')}</span>
              </div>
              <p className="text-gray-400 mb-6">
                {t('pricing.pro.desc', 'Plataforma completa de pentesting automatizado con inteligencia artificial local. Ideal para equipos de seguridad, consultores y empresas que necesitan auditorías profundas con reportes ejecutivos automáticos.')}
              </p>
              <div className="mb-8 flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl font-bold text-white">$54.342 ARS</span>
                <span className="text-gray-500">{t('pricing.or', 'o')}</span>
                <span className="text-3xl font-bold text-[#00FF00]">USD $33</span>
                <span className="text-gray-400 text-lg">/ {t('pricing.per_year', 'año')}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t('pricing.pro.feat1', 'IA local para análisis contextual')}
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t('pricing.pro.feat2', 'Priorización inteligente de CVEs')}
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#8B0000] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t('pricing.pro.feat3', 'Reportes ejecutivos con IA')}
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t('pricing.pro.feat4', '150+ Herramientas integradas y 100% Offline')}
                </li>
              </ul>
              <div className="space-y-3 mt-auto">
                <button onClick={() => openPaymentModal('mp')} className="w-full bg-[#009EE3] hover:bg-[#0088cc] text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  {t('pricing.btn.mp', 'Pagar con MercadoPago (ARS)')}
                </button>
                <button onClick={() => openPaymentModal('stripe')} className="w-full border border-[#00FF00] hover:bg-[#00FF00]/10 text-[#00FF00] font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                  🌍 {t('pricing.btn.stripe', 'Pagar con Tarjeta Internacional (USD)')}
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            ⚠️ {t('redai.disclaimer', 'Herramienta diseñada exclusivamente para auditorías de seguridad autorizadas, Red Teaming y pruebas de penetración éticas')}
          </p>
        </div>
      </section>

      {/* SECCIÓN: Videos de Red AI */}
      <section id="videos" className="py-20 bg-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Sentinel<span className="text-[#8B0000]">Arg</span> <span className="text-[#00FF00]">Red AI</span> {t('videos.title_suffix', 'en Acción')}
            </h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mt-4"></div>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              {t('videos.subtitle', 'Mirá cómo SentinelArg Red AI automatiza el pentesting, detecta vulnerabilidades y genera reportes ejecutivos en tiempo real.')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/watch?v=vP5BxrXwgzI" title="sentinelarg linuxscan" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v1.title', 'Escaneo Automatizado con Red AI')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v1.desc', 'Demostración del flujo completo de pentesting')}</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/Aw5syxINcjE" title="Reporte" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v2.title', 'Generación de Reportes PDF')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v2.desc', 'Reportes ejecutivos con CVEs y CVSS')}</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/ID_DEL_VIDEO_3" title="Demo 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v3.title', 'Análisis con IA Local')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v3.desc', 'Priorización inteligente de vulnerabilidades')}</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/ID_DEL_VIDEO_4" title="Demo 4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v4.title', 'Laboratorio de Explotación')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v4.desc', 'Funcionamiento de exploits')}</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#redai" className="inline-block bg-[#8B0000] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition">
              {t('videos.back', '← Volver a Red AI')}
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Capacidades Principales (Reemplaza al antiguo SIEM) */}
      <section id="features" className="py-20 bg-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t('features.title', 'Capacidades Principales')}</h2>
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

      {/* SECCIÓN: Especificaciones Técnicas y Uso Responsable */}
      <section id="tech-specs" className="py-20 bg-darker border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-950/30 border-l-4 border-[#8B0000] p-6 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-[#8B0000] mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              {t('legal.title', 'Aviso Legal y Uso Responsable')}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t('legal.intro', 'SentinelArg es una herramienta de evaluación de seguridad ofensiva destinada ÚNICAMENTE para uso autorizado. Su uso está restringido a:')}
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-400">
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item1', 'Pruebas de penetración con autorización explícita.')}</li>
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item2', 'Auditorías de seguridad y Red Team operations.')}</li>
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item3', 'Competiciones CTF y entornos de laboratorio controlados.')}</li>
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item4', 'Investigación de seguridad ética.')}</li>
            </ul>
            <p className="text-gray-500 text-xs mt-4 italic">
              {t('legal.footer', 'El uso no autorizado es ILEGAL. Al utilizar SentinelArg, usted acepta los términos del Acuerdo de Licencia (EULA).')}
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('specs.title', 'Arquitectura y Capacidades')}</h2>
            <div className="w-20 h-1 bg-[#00FFFF] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "🧠", title: t('specs.f1.title', 'Inteligencia Artificial Local'), desc: t('specs.f1.desc', 'Orquestador IA para correlación de hallazgos, eliminación de falsos positivos y asistente de seguridad interactivo (Ollama) sin enviar datos a la nube.') },
              { icon: "🌐", title: t('specs.f2.title', 'Auditoría Web Profunda'), desc: t('specs.f2.desc', 'Detección de tecnologías, descubrimiento de contenido (Katana, FFUF) y escaneo de vulnerabilidades (Nuclei, Dalfox, Nikto) con análisis SSL/TLS.') },
              { icon: "🪟", title: t('specs.f3.title', 'Windows & Active Directory'), desc: t('specs.f3.desc', 'Enumeración de red (NetExec, Nbtscan), evaluación de políticas AD (SMBMap, Enum4linux) y harvesting de credenciales (LLMNR/NBT-NS).') },
              { icon: "🐧", title: t('specs.f4.title', 'Servidores Linux'), desc: t('specs.f4.desc', 'Detección de servicios, análisis de configuración y detección de cifrados débiles o protocolos obsoletos (SSH-Audit, Nmap NSE).') },
              { icon: "📊", title: t('specs.f5.title', 'Reportes de Compliance'), desc: t('specs.f5.desc', 'Formato ejecutivo limpio con mapeo directo a OWASP Top 10, MITRE ATT&CK, CWE y PCI-DSS, clasificados por severidad.') },
              { icon: "🐳", title: t('specs.f6.title', 'Despliegue Dockerizado'), desc: t('specs.f6.desc', 'Instalación en segundos sin dependencias del host. Todas las 150+ herramientas se ejecutan en contenedores aislados para garantizar la estabilidad.') }
            ].map((item, idx) => (
              <div key={idx} className="bg-dark p-6 rounded-xl border border-slate-800 hover:border-[#00FFFF] transition-all group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-[#00FF00] text-4xl mb-3">🔄</div>
                <h4 className="text-white font-bold mb-2">{t('specs.bottom1.title', 'Actualización Segura')}</h4>
              </div>
              <div>
                <div className="text-[#00FFFF] text-4xl mb-3">🔑</div>
                <h4 className="text-white font-bold mb-2">{t('specs.bottom2.title', 'Activación por Dispositivo')}</h4>
              </div>
              <div>
                <div className="text-[#8B0000] text-4xl mb-3">🛡️</div>
                <h4 className="text-white font-bold mb-2">{t('specs.bottom3.title', 'Soporte Dedicado')}</h4>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-slate-800">
              <p className="text-gray-400 text-sm mb-4">{t('specs.docs.prompt', '¿Necesitas ver los comandos de instalación o la configuración avanzada?')}</p>
              <a href="https://github.com/alfasierra/sentinelarg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#00FFFF] hover:text-white font-semibold transition">
                {t('specs.docs.link', 'Ir a la Documentación Técnica Completa (GitHub)')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action: Ver imágenes 
      <div className="text-center py-6">
        <a href="/images.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-primary hover:bg-sky-600 text-slate-900 rounded-lg font-medium transition shadow-lg">
          🖼️ {t('images.btn', 'Ver imágenes de SentinelArg')}
        </a>
      </div> */}

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
            <form name="demo-request" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="demo-request" />
              <input type="hidden" name="bot-field" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">{t('form.name', 'Nombre completo')}</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">{t('form.email', 'Correo electrónico')}</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">{t('form.company', 'Empresa')}</label>
                <input type="text" id="company" name="company" required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">{t('form.message', 'Mensaje (opcional)')}</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full py-3 px-6 rounded-lg font-bold transition ${isSubmitting ? 'bg-slate-600 cursor-not-allowed' : 'bg-primary hover:bg-sky-600 text-slate-900'}`}>
                {isSubmitting ? t('form.sending', 'Enviando...') : t('form.send', 'Enviar solicitud')}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECCIÓN: Centro de Descargas */}
      <section id="downloads" className="py-20 bg-dark border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('downloads.title', 'Centro de Descargas')}</h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
            <p className="mt-4 text-gray-400">
              {t('downloads.subtitle', 'Cliente de SentinelArg Red AI. El uso de esta herramienta está restringido a auditorías autorizadas.')}
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#00FF00]">{t('downloads.file.title', 'SentinelArg Red AI - Cliente v1.0.1')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('downloads.file.desc', 'Compilado para Linux x86_64 (Sin dependencias de Python)')}</p>
                <p className="text-gray-500 text-xs mt-2 font-mono">
                  SHA256: <span className="text-[#00FFFF]">309d7af65911641e1c89b8a7a7a25aa86d8edc5c4b1f00663b09ac0e058f790c</span>
                </p>
              </div>
              <a href="https://github.com/alfasierra/sentinelarg-landing/releases/download/v1.0.1/sentinelarg-v1.0.1-client.tar.gz" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2 whitespace-nowrap">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                {t('downloads.btn', 'Descargar .tar.gz')}
              </a>
            </div>
            <div className="bg-black rounded-lg p-4 border border-slate-800 relative group">
              <p className="text-gray-500 text-xs mb-2 font-mono">{t('downloads.terminal.label', 'Descarga directa vía terminal:')}</p>
              <code className="text-[#00FF00] font-mono text-sm break-all">
                wget https://github.com/alfasierra/sentinelarg-landing/releases/download/v1.0.1/sentinelarg-v1.0.1-client.tar.gz
              </code>
              <button onClick={() => navigator.clipboard.writeText('wget https://github.com/alfasierra/sentinelarg-landing/releases/download/v1.0.1/sentinelarg-v1.0.1-client.tar.gz')} className="absolute top-2 right-2 bg-slate-800 hover:bg-slate-700 text-gray-300 text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition border border-slate-600">
                {t('downloads.terminal.copy', 'Copiar')}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              {t('downloads.disclaimer', '⚠️ Al descargar, aceptas los Términos de Servicio y la Política de Uso Ético de SentinelArg.')}
            </p>
          </div>
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
            <a href="mailto:contacto@sentinelarg.com.ar" className="hover:text-primary transition">{t('footer.contact', 'contacto@sentinelarg.com.ar')}</a>
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition" aria-label={t('footer.whatsapp', 'Contactar por WhatsApp')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/sentinelarg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition" aria-label={t('footer.linkedin', 'Visitar LinkedIn de la empresa')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.447H16.393V15.234c0-.447-.038-.894-.126-1.34-.088-.446-.264-.873-.528-1.28-.264-.407-.616-.734-1.056-1.001-.44-.267-.952-.4-.156-.4-.53 0-1.055.136-1.57.408l-.232-.232c.53-.53 1.256-.86 2.065-.86.82 0 1.532.306 2.118.918.586.612.86 1.403.86 2.403v6.112h-4.055v-8.05h-3.908v8.05h-4.055V6.394h-4.055v-4.055h4.055v-3.908h8.11v3.908h4.055v4.055h-4.055v6.112z"/></svg>
            </a>
            <a href="https://t.me/SentinelArg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition" aria-label={t('footer.telegram', 'Contactar por Telegram')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.682-.537.842-1.142.521l-3.25-2.02-1.528 1.457c-.14.133-.28.28-.42.42-.23.23-.47.33-.74.33-.3 0-.57-.18-.83-.53l-2.6-3.56 9.24-6.16c.39-.25.78-.1.78.34 0 .13-.05.26-.15.38z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Botones flotantes de contacto */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all transform hover:scale-110" aria-label={t('footer.whatsapp', 'Contactar por WhatsApp')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/sentinelarg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center shadow-lg transition-all transform hover:scale-110" aria-label={t('footer.linkedin', 'Visitar LinkedIn de la empresa')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.447H16.393V15.234c0-.447-.038-.894-.126-1.34-.088-.446-.264-.873-.528-1.28-.264-.407-.616-.734-1.056-1.001-.44-.267-.952-.4-.156-.4-.53 0-1.055.136-1.57.408l-.232-.232c.53-.53 1.256-.86 2.065-.86.82 0 1.532.306 2.118.918.586.612.86 1.403.86 2.403v6.112h-4.055v-8.05h-3.908v8.05h-4.055V6.394h-4.055v-4.055h4.055v-3.908h8.11v3.908h4.055v4.055h-4.055v6.112z"/></svg>
        </a>
      </div>

      {/* MODAL DE CAPTURA DE DATOS DE PAGO */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition" aria-label={t('modal.close', 'Cerrar')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('modal.title', 'Completa tus datos')}</h3>
              <p className="text-gray-400 text-sm">{t('modal.desc', 'Te enviaremos la clave de activación a este email inmediatamente después de confirmar tu pago.')}</p>
              <p className="text-[#00FF00] text-xs mt-2 font-semibold">
                {paymentMethod === 'mp' ? t('modal.redirect.mp', 'Serás redirigido a MercadoPago') : t('modal.redirect.stripe', 'Serás redirigido a la pasarela segura (USD)')}
              </p>
            </div>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-300 mb-1">{t('modal.form.name', 'Nombre completo *')}</label>
                <input type="text" id="modal-name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-[#009EE3] text-white" placeholder="Juan Pérez" />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-300 mb-1">{t('modal.form.email', 'Email *')}</label>
                <input type="email" id="modal-email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-[#009EE3] text-white" placeholder="juan@empresa.com" />
              </div>
              <div>
                <label htmlFor="modal-company" className="block text-sm font-medium text-gray-300 mb-1">{t('modal.form.company', 'Empresa (opcional)')}</label>
                <input type="text" id="modal-company" value={customerCompany} onChange={(e) => setCustomerCompany(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-[#009EE3] text-white" placeholder="Empresa S.A." />
              </div>
              <div className="pt-2">
                <button type="submit" className={`w-full font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 ${paymentMethod === 'mp' ? 'bg-[#009EE3] hover:bg-[#0088cc] text-white' : 'bg-[#00FF00] hover:bg-[#00cc00] text-black'}`}>
                  {t('modal.form.submit', 'Continuar al Pago →')}
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">{t('modal.form.privacy', 'Tus datos están protegidos y se usarán únicamente para enviarte tu licencia.')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
