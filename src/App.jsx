// src/App.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCompany, setCustomerCompany] = useState('');

  const [showWindowsInfoModal, setShowWindowsInfoModal] = useState(false);
  const [activeTab, setActiveTab] = useState('readme');

  // Estados para el formulario de soporte
  const [isSubmittingSupport, setIsSubmittingSupport] = useState(false);
  const [submitSuccessSupport, setSubmitSuccessSupport] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const MP_LINK = "https://mpago.li/28jgy5y";
  const CREEM_LINK = "https://www.creem.io/payment/prod_3NR3RvGfTxihTnT8KfDHY4";
  
  const LINUX_RELEASE_URL = "https://github.com/alfasierra/sentinelarg-landing/releases/download/v1.0.3/sentinelarg-v1.0.3-client.tar.gz";
  const LINUX_WGET_CMD = `wget ${LINUX_RELEASE_URL}`;
  const [linuxCopied, setLinuxCopied] = useState(false);

  const copyLinuxCmd = async () => {
    try {
      await navigator.clipboard.writeText(LINUX_WGET_CMD);
      setLinuxCopied(true);
      setTimeout(() => setLinuxCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const openCreemCheckout = () => {
    window.open(CREEM_LINK, '_blank', 'noopener,noreferrer');
  };

  const openPaymentModal = () => setShowPaymentModal(true);

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
      method: 'mp',
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('sentinelarg_prospect', JSON.stringify(prospectData));
    setShowPaymentModal(false);
    window.open(MP_LINK, '_blank', 'noopener,noreferrer');
    setCustomerName('');
    setCustomerEmail('');
    setCustomerCompany('');
  };

  // Handler para el formulario de soporte
  const handleSubmitSupport = async (e) => {
    e.preventDefault();
    setIsSubmittingSupport(true);
    const formData = new FormData(e.target);
    formData.set('form-name', 'support-request');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        setSubmitSuccessSupport(true);
        e.target.reset();
        setTimeout(() => setSubmitSuccessSupport(false), 5000);
      } else {
        alert(t('errors.formError', 'Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('errors.connectionError', 'Error de conexión. Verifica tu internet e inténtalo de nuevo.'));
    } finally {
      setIsSubmittingSupport(false);
    }
  };

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

  const redAIFeatures = [
    { icon: "🛡️", title: t('redai.features.tools.title', '150+ Herramientas Integradas'), desc: t('redai.features.tools.desc', 'Nmap, Nuclei, SQLMap, Gobuster, FFuf, Nikto y más ejecutándose simultáneamente') },
    { icon: "📄", title: t('redai.features.reports.title', 'Reportes PDF Ejecutivos'), desc: t('redai.features.reports.desc', 'Generación automática con CVEs, CVSS y recomendaciones listas para gerencia') },
    { icon: "🤖", title: t('redai.features.ia.title', 'IA Local Privada'), desc: t('redai.features.ia.desc', 'Análisis contextual inteligente sin enviar datos sensibles a la nube') },
    { icon: "⚡", title: t('redai.features.standalone.title', 'Sin Dependencias'), desc: t('redai.features.standalone.desc', 'No requiere Python ni librerías. Compilado y listo para usar') }
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
              <a href="#videos" className="hover:text-primary transition">{t('nav.casosUso', 'Casos de Uso')}</a>
              <a href="#downloads" className="hover:text-primary transition">{t('nav.descargas', 'Descargas')}</a>
              <a href="https://docs.sentinelarg.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Docs</a>
              <a href="#about-us" className="hover:text-primary transition">{t('nav.sobreNosotros', 'Sobre Nosotros')}</a>
              <div className="flex items-center space-x-1">
                <button onClick={() => i18n.changeLanguage('es')} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('es') ? 'bg-slate-700 text-white' : 'text-gray-400 hover:text-gray-200'}`}>ES</button>
                <button onClick={() => i18n.changeLanguage('en')} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('en') ? 'bg-slate-700 text-white' : 'text-gray-400 hover:text-gray-200'}`}>EN</button>
              </div>
              <a href="#downloads" className="bg-[#8B0000] hover:bg-red-800 text-white px-4 py-2 rounded font-medium transition">
                {t('cta.demo', 'Descargar Prueba Gratuita')}
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
              <a href="#videos" className="block py-2 hover:text-primary">{t('nav.casosUso', 'Casos de Uso')}</a>
              <a href="#downloads" className="block py-2 hover:text-primary">{t('nav.descargas', 'Descargas')}</a>
              <a href="https://docs.sentinelarg.com.ar" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-primary">Documentación</a>
              <a href="#about-us" className="block py-2 hover:text-primary">{t('nav.sobreNosotros', 'Sobre Nosotros')}</a>
              <div className="flex justify-center space-x-2 mt-4">
                <button onClick={() => { i18n.changeLanguage('es'); setIsMenuOpen(false); }} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('es') ? 'bg-slate-700 text-white' : 'text-gray-400'}`}>ES</button>
                <button onClick={() => { i18n.changeLanguage('en'); setIsMenuOpen(false); }} className={`px-2 py-1 text-xs rounded ${i18n.language.startsWith('en') ? 'bg-slate-700 text-white' : 'text-gray-400'}`}>EN</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B0000]/20 via-slate-950 to-slate-950"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/20 border border-[#8B0000]/50 text-[#8B0000] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            v1.0.3 Disponible
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
              {t('cta.demo', 'Descargar Prueba Gratuita')}
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

      {/* About Section */}
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

      {/* SECCIÓN: SentinelArg Red AI */}
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
                <span className="text-4xl font-bold text-white">$161.938 ARS</span>
                <span className="text-gray-500">{t('pricing.or', 'o')}</span>
                <span className="text-3xl font-bold text-[#00FF00]">USD $149</span>
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
                <button onClick={openPaymentModal} className="w-full bg-[#009EE3] hover:bg-[#0088cc] text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  {t('pricing.btn.mp', 'Pagar con MercadoPago (ARS)')}
                </button>
                <button onClick={openCreemCheckout} className="w-full border border-[#00FF00] hover:bg-[#00FF00]/10 text-[#00FF00] font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                  🌍 {t('pricing.btn.creem', 'Pagar con Tarjeta Internacional (USD)')}
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            ⚠️ {t('redai.disclaimer', 'Herramienta diseñada exclusivamente para auditorías de seguridad autorizadas, Red Teaming y pruebas de penetración éticas')}
          </p>
        </div>
      </section>

      {/* SECCIÓN: Videos */}
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
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/2tP9zfLcF6o" title="sentinelarg linuxscan" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v1.title', 'Escaneo Automatizado con Red AI')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v1.desc', 'Demostración del flujo completo de pentesting')}</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/OQVOaQbJAFw" title="Reporte" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v2.title', 'Generación de Reportes PDF')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v2.desc', 'Reportes ejecutivos con CVEs y CVSS')}</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/k6Ub66BYdPY" title="Análisis con IA Local" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">{t('videos.v3.title', 'Análisis con IA Local')}</h3>
                <p className="text-gray-400 text-sm mt-1">{t('videos.v3.desc', 'Priorización inteligente de vulnerabilidades')}</p>
              </div>
            </div>
            <div className="bg-dark rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="aspect-video">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/PoWqr05Zq0E" title="Exploit_lab" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

      {/* SECCIÓN: Capacidades Principales */}
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
              {t('legal.intro', 'SentinelArg es una herramienta de evaluación de seguridad ofensiva destinada ÚNICAMENTE para uso autorizado. Queda estrictamente prohibido el uso de esta herramienta o de sus funciones de IA para generar, procesar, analizar o distribuir contenido sexual, adulto, NSFW (Not Safe For Work) o pornográfico. Su uso legítimo está restringido a:')}
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-400">
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item1', 'Pruebas de penetración con autorización explícita.')}</li>
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item2', 'Auditorías de seguridad y Red Team operations.')}</li>
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item3', 'Competiciones CTF y entornos de laboratorio controlados.')}</li>
              <li className="flex items-center"><span className="text-[#00FF00] mr-2">✅</span> {t('legal.item4', 'Investigación de seguridad ética.')}</li>
            </ul>
            <p className="text-gray-500 text-xs mt-4 italic">
              {t('legal.footer', 'El uso no autorizado o para fines prohibidos es ILEGAL. Al utilizar SentinelArg, usted acepta los términos del Acuerdo de Licencia (EULA) y esta Política de Uso Aceptable.')}
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
              <p className="text-gray-400 text-sm mb-4">
                {t('specs.docs.prompt', '¿Necesitas ver los comandos de instalación o la configuración avanzada?')}
              </p>
              <a 
                href="https://docs.sentinelarg.com.ar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-[#00FFFF] hover:text-white font-semibold transition"
              >
                {t('specs.docs.link', 'Ir a la Documentación Técnica Completa')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
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

      {/* SECCIÓN: Centro de Descargas */}
      <section id="downloads" className="py-20 bg-dark border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('downloads.title', 'Centro de Descargas')}</h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto"></div>
            <p className="mt-4 text-gray-400">
              {t('downloads.subtitle', 'Recursos oficiales de SentinelArg Red AI. El uso de esta herramienta está restringido a auditorías autorizadas.')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tarjeta 1: Linux */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#8B0000]/20 rounded-lg">
                  <span className="text-3xl">🐧</span>
                </div>
                <h3 className="text-xl font-bold text-[#00FF00]">{t('downloads.linux.title', 'Linux (Kali/Ubuntu/Debian)')}</h3>
              </div>

              <div className="bg-black/50 rounded-lg p-3 border border-slate-800 mb-3">
                <p className="text-gray-300 font-mono text-sm mb-2">{t('downloads.linux.file', 'sentinelarg-linux-v1.0.3.tar.gz')}</p>
                <p className="text-gray-500 text-xs">{t('downloads.linux.requires', 'Requiere: Docker + Docker Compose')}</p>
              </div>

              <div className="bg-black rounded-lg p-3 border border-slate-800 mb-4 relative group flex-grow">
                <p className="text-gray-500 text-xs font-mono mb-2">{t('downloads.linux.wgetLabel', 'Se recomienda ejecutar:')}</p>
                <code className="text-[#00FF00] font-mono text-xs break-all leading-relaxed">
                  {LINUX_WGET_CMD}
                </code>
                <button
                  onClick={copyLinuxCmd}
                  className={`absolute top-2 right-2 text-xs px-3 py-1.5 rounded border transition ${
                    linuxCopied
                      ? 'bg-[#00FF00] text-black border-[#00FF00] opacity-100'
                      : 'bg-slate-800 hover:bg-slate-700 text-gray-300 border-slate-600 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {linuxCopied ? t('downloads.linux.wgetCopied', '✓ Copiado') : t('downloads.linux.wgetCopy', 'Copiar')}
                </button>
              </div>

              <a href={LINUX_RELEASE_URL} className="w-full bg-[#8B0000] hover:bg-red-800 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                {t('downloads.linux.btn', 'Descargar .tar.gz')}
              </a>
            </div>

            {/* Tarjeta 2: Windows */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00FF00] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">NUEVO v1.0.3</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <span className="text-3xl">🪟</span>
                </div>
                <h3 className="text-xl font-bold text-primary">{t('downloads.windows.title', 'Windows 10/11')}</h3>
              </div>
              <div className="bg-black/50 rounded-lg p-3 border border-slate-800 mb-4 flex-grow space-y-2">
                <p className="text-gray-300 font-mono text-sm">{t('downloads.windows.file', 'SentinelArg_Windows.zip')}</p>
                <p className="text-gray-500 text-xs">{t('downloads.windows.requires', 'Requiere: Docker Desktop + 8 GB RAM')}</p>
                <p className="text-gray-500 text-xs">{t('downloads.windows.includes', 'Incluye: Scripts abiertos')}</p>
                <p className="text-[#00FF00] text-xs font-semibold">✅ {t('downloads.windows.transparency', 'Modelo de transparencia: auditable línea por línea')}</p>
              </div>
              <div className="space-y-3">
                <a href="https://github.com/alfasierra/sentinelarg-landing/releases/download/windows_v1.0.3/SentinelArg_Windows.zip" className="w-full bg-primary hover:bg-sky-600 text-slate-900 font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  {t('downloads.windows.btn', 'Descargar .zip')}
                </a>
                <button 
                  onClick={() => setShowWindowsInfoModal(true)}
                  className="w-full border border-slate-600 hover:border-[#00FF00] hover:text-[#00FF00] text-gray-300 font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {t('downloads.windows.infoBtn', 'Más información')}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-slate-800">
            <p className="text-gray-400 text-sm mb-3">
              ¿Necesitas ayuda con la instalación o configuración?
            </p>
            <a 
              href="https://docs.sentinelarg.com.ar/01-quick-start" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00FF00] hover:text-white font-semibold transition"
            >
              Ver guía de instalación paso a paso
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            {t('downloads.disclaimer', '⚠️ Al descargar, aceptas los Términos de Servicio y la Política de Uso Ético de SentinelArg.')}
          </p>
        </div>
      </section>

      {/* SECCIÓN: Careers (versión compacta) */}
      <section id="careers" className="py-16 bg-dark/50 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">{t('careers.title', 'Trabaja con Nosotros')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              {t('careers.subtitle', 'Únete a nuestro equipo y construye el futuro de la ciberseguridad')}
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-3">{t('careers.whyJoin.title', '¿Por qué unirte a SentinelArg?')}</h3>
            <p className="text-gray-300 mb-4">{t('careers.whyJoin.desc', 'Somos una startup en crecimiento que valora el talento, la innovación y el impacto real en la seguridad de empresas argentinas.')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-300 text-sm">{t('careers.whyJoin.benefit1', 'Trabajo remoto flexible')}</span>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-300 text-sm">{t('careers.whyJoin.benefit2', 'Proyectos desafiantes con tecnologías de vanguardia')}</span>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-300 text-sm">{t('careers.whyJoin.benefit3', 'Crecimiento profesional y capacitación continua')}</span>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-300 text-sm">{t('careers.whyJoin.benefit4', 'Equipo colaborativo y cultura de aprendizaje')}</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              ¿Te interesa sumarte al equipo? Envíanos tu CV y cuéntanos qué te motiva.
            </p>
            <a 
              href="mailto:contacto@sentinelarg.com.ar?subject=Postulación%20-%20SentinelArg&body=Hola,%20me%20interesa%20unirme%20al%20equipo%20de%20SentinelArg.%20Adjunto%20mi%20CV."
              className="inline-flex items-center bg-primary hover:bg-sky-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contacto@sentinelarg.com.ar
            </a>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: Soporte y Reporte de Incidencias */}
      <section id="support" className="py-16 bg-darker border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">{t('support.title', 'Soporte y Reporte de Incidencias')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">
              {t('support.subtitle', '¿Encontraste un bug o tienes una sugerencia de mejora? Envíanos los detalles y te responderemos a la brevedad.')}
            </p>
          </div>

          {submitSuccessSupport ? (
            <div className="bg-emerald-900/30 border border-emerald-700 text-emerald-300 p-6 rounded-lg text-center">
              {t('support.success', '¡Gracias! Hemos recibido tu reporte. Nuestro equipo de soporte revisará tu caso y te contactará por email.')}
            </div>
          ) : (
            <form name="support-request" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmitSupport} className="space-y-6">
              <input type="hidden" name="form-name" value="support-request" />
              <input type="hidden" name="bot-field" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="support-name" className="block text-sm font-medium mb-1">{t('form.name', 'Nombre completo')}</label>
                  <input type="text" id="support-name" name="name" required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white" />
                </div>
                <div>
                  <label htmlFor="support-email" className="block text-sm font-medium mb-1">{t('form.email', 'Correo electrónico')}</label>
                  <input type="email" id="support-email" name="email" required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white" />
                </div>
              </div>

              <div>
                <label htmlFor="support-type" className="block text-sm font-medium mb-1">{t('support.type', 'Tipo de reporte')}</label>
                <select id="support-type" name="type" required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white">
                  <option value="bug">{t('support.type_bug', 'Reportar un Bug / Error')}</option>
                  <option value="feature">{t('support.type_feature', 'Sugerir una Mejora / Funcionalidad')}</option>
                  <option value="other">{t('support.type_other', 'Otra consulta')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="support-message" className="block text-sm font-medium mb-1">{t('support.message', 'Detalles del reporte')}</label>
                <textarea id="support-message" name="message" rows="5" required placeholder={t('support.messagePlaceholder', 'Describe el problema o la mejora con el mayor detalle posible (pasos para reproducir, versión del sistema, etc.).')} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"></textarea>
              </div>

              <button type="submit" disabled={isSubmittingSupport} className={`w-full py-3 px-6 rounded-lg font-bold transition ${isSubmittingSupport ? 'bg-slate-600 cursor-not-allowed' : 'bg-primary hover:bg-sky-600 text-slate-900'}`}>
                {isSubmittingSupport ? t('support.sending', 'Enviando...') : t('support.send', 'Enviar Reporte')}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SentinelArg. Todos los derechos reservados.</p>
          <p className="mt-3">
            <a href="/privacy" className="hover:text-primary transition mx-2">{t('footer.privacy', 'Política de Privacidad')}</a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary transition mx-2">{t('footer.terms', 'Términos de Servicio')}</a>
            <span>•</span>
            <a href="https://docs.sentinelarg.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition mx-2">Documentación</a>
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

      {/* Botones flotantes */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all transform hover:scale-110" aria-label={t('footer.whatsapp', 'Contactar por WhatsApp')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/sentinelarg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center shadow-lg transition-all transform hover:scale-110" aria-label={t('footer.linkedin', 'Visitar LinkedIn de la empresa')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.447H16.393V15.234c0-.447-.038-.894-.126-1.34-.088-.446-.264-.873-.528-1.28-.264-.407-.616-.734-1.056-1.001-.44-.267-.952-.4-.156-.4-.53 0-1.055.136-1.57.408l-.232-.232c.53-.53 1.256-.86 2.065-.86.82 0 1.532.306 2.118.918.586.612.86 1.403.86 2.403v6.112h-4.055v-8.05h-3.908v8.05h-4.055V6.394h-4.055v-4.055h4.055v-3.908h8.11v3.908h4.055v4.055h-4.055v6.112z"/></svg>
        </a>
      </div>

      {/* MODAL DE CAPTURA DE DATOS DE PAGO (Solo MP) */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition" aria-label={t('modal.close', 'Cerrar')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('modal.title', 'Completa tus datos')}</h3>
              <p className="text-gray-400 text-sm">{t('modal.desc', 'Te enviaremos la clave de activación a este email inmediatamente después de confirmar tu pago.')}</p>
              <p className="text-[#00FF00] text-xs mt-2 font-semibold">{t('modal.redirect.mp', 'Serás redirigido a MercadoPago')}</p>
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
                <button type="submit" className="w-full font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 bg-[#009EE3] hover:bg-[#0088cc] text-white">
                  {t('modal.form.submit', 'Continuar al Pago →')}
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">{t('modal.form.privacy', 'Tus datos están protegidos y se usarán únicamente para enviarte tu licencia.')}</p>
          </div>
        </div>
      )}

      {/* MODAL DE INFORMACIÓN DE WINDOWS */}
      {showWindowsInfoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                🪟 {t('downloads.windows.title', 'Windows 10/11')} - Documentación
              </h3>
              <button onClick={() => setShowWindowsInfoModal(false)} className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex border-b border-gray-700 bg-gray-800/50 overflow-x-auto">
              {[
                { id: 'readme', label: '📖 Instalación' },
                { id: 'security', label: '🛡️ Modelo de Seguridad' },
                { id: 'troubleshooting', label: '🆘 Solución de Problemas' },
                { id: 'changelog', label: '📝 Changelog' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium transition whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'text-[#00FF00] border-b-2 border-[#00FF00] bg-gray-800' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1 text-gray-300 text-sm leading-relaxed">
              {activeTab === 'readme' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">🛡️ Modelo de Distribución: Transparencia sobre Conveniencia</h4>
                  <p>SentinelArg se distribuye como código fuente ejecutable (.bat + .ps1), no como un instalador .exe firmado. Esto es una <strong className="text-[#00FF00]">decisión de seguridad intencional</strong>, no una limitación técnica.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border border-gray-700 rounded-lg text-sm">
                      <thead className="bg-gray-800 text-gray-200">
                        <tr>
                          <th className="p-3 border-b border-gray-700">Instalador .exe tradicional</th>
                          <th className="p-3 border-b border-gray-700 text-[#00FF00]">SentinelArg (este paquete)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        <tr><td className="p-3">Binario compilado, imposible de auditar</td><td className="p-3">Scripts abiertos, revisables línea por línea</td></tr>
                        <tr><td className="p-3">Requiere certificado de code signing (~$300/año)</td><td className="p-3">Sin costos ocultos trasladados al cliente</td></tr>
                        <tr><td className="p-3">SmartScreen de Windows lo bloquea hasta tener "reputación"</td><td className="p-3">No depende de reputación de Microsoft</td></tr>
                        <tr><td className="p-3">El usuario delega confianza al firmante</td><td className="p-3">El usuario <strong>verifica</strong> lo que ejecuta</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-400 italic border-l-2 border-gray-600 pl-3">Si su política de seguridad corporativa exige un .exe firmado, contáctenos a soporte@sentinelarg.com.ar y le proporcionaremos el instalador firmado con nuestro certificado EV (disponible bajo solicitud para clientes Enterprise).</p>
                  
                  <h4 className="text-xl font-bold text-white mt-6">📋 Requisitos Previos</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Sistema Operativo:</strong> Windows 10/11 (64-bit) — Pro, Enterprise o Education</li>
                    <li><strong>RAM:</strong> 8 GB mínimo (16 GB recomendados para el motor de IA)</li>
                    <li><strong>Espacio en disco:</strong> 10 GB libres</li>
                    <li><strong>Docker Desktop:</strong> Instalado y en ejecución. ⚠️ Importante: activar <strong>"Use WSL 2 based engine"</strong> en Settings. Si tiene GPU NVIDIA: activar también <strong>"CUDA support"</strong>.</li>
                  </ul>

                  <h4 className="text-xl font-bold text-white mt-6">🚀 Instalación Rápida</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Haga <strong>clic derecho</strong> sobre <code className="bg-gray-800 px-1 rounded text-[#00FFFF]">1_Instalar_SentinelArg.bat</code></li>
                    <li>Seleccione <strong>"Ejecutar como administrador"</strong> y confirme el aviso UAC.</li>
                    <li>Siga las instrucciones en pantalla (se le preguntará por el motor de IA local y detectará GPU NVIDIA automáticamente).</li>
                    <li>Se descargará la imagen de Docker (~2.5 GB). Esto puede tardar 5-15 minutos.</li>
                  </ol>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mt-4">
                    <p className="mb-2"><strong>Activar la licencia:</strong> Ejecute como administrador <code className="bg-gray-900 px-1 rounded text-[#00FFFF]">2_Activar_Licencia.bat</code> y pegue su clave recibida por email.</p>
                    <p className="mb-2"><strong>Verificación final:</strong> Abra su navegador en: <a href="http://127.0.0.1:8888/dashboard" className="text-[#00FFFF] hover:underline">http://127.0.0.1:8888/dashboard</a></p>
                    <div className="mt-4 pt-4 border-t border-gray-700 space-y-1 text-sm">
                      <p><strong>📚 Documentación completa:</strong> <a href="https://docs.sentinelarg.com.ar" target="_blank" rel="noopener noreferrer" className="text-[#00FFFF] hover:underline">docs.sentinelarg.com.ar</a></p>
                      <p><strong>🆘 Soporte y bugs:</strong> <a href="mailto:soporte@sentinelarg.com.ar" className="text-[#00FFFF] hover:underline">soporte@sentinelarg.com.ar</a></p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Por qué distribuimos scripts, no un .exe</h4>
                  <p>En la industria del software comercial, lo "normal" es entregar un instalador <code className="bg-gray-800 px-1 rounded">.exe</code> firmado digitalmente. SentinelArg deliberadamente rompe con esa convención por tres razones de seguridad:</p>
                  <div className="space-y-4 mt-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-[#00FF00] mb-2">1. Auditabilidad total</h5>
                      <p>Un <code className="bg-gray-900 px-1 rounded">.exe</code> es un binario compilado. Nuestros scripts <code className="bg-gray-900 px-1 rounded">.bat</code> y <code className="bg-gray-900 px-1 rounded">.ps1</code> son <strong>texto plano</strong>: puede abrirlos, leerlos, y entender cada comando antes de ejecutarlo.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-[#00FF00] mb-2">2. Independencia de la reputación de Microsoft</h5>
                      <p>SmartScreen de Windows bloquea cualquier <code className="bg-gray-900 px-1 rounded">.exe</code> que no tenga "reputación" acumulada. En lugar de gastar $300-500 USD/año en certificados EV para "comprar" reputación, preferimos entregar algo que Windows no puede bloquear: scripts que el usuario ejecuta bajo su propia responsabilidad.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-[#00FF00] mb-2">3. Control granular</h5>
                      <p>Con nuestros scripts, <strong>usted decide</strong>: puede modificar los parámetros de Docker Compose antes de instalar, elegir no instalar el motor de IA, y auditar exactamente qué contenedores se levantan.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'troubleshooting' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white">Solución de Problemas — v1.0.3</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-white mb-1">El archivo .bat no se ejecuta al hacer doble clic</h5>
                      <p>Clic derecho sobre el archivo .bat → <strong>Propiedades</strong> → Pestaña <strong>General</strong> → Marcar checkbox <strong>"Desbloquear"</strong> → Aplicar → Aceptar.</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-white mb-1">"No se puede ejecutar scripts en este sistema"</h5>
                      <p>Abra PowerShell como administrador y ejecute: <code className="bg-gray-900 px-1 rounded text-[#00FF00]">Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code></p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-white mb-1">Docker no se detecta</h5>
                      <p>Verifique que Docker Desktop está abierto (ícono de ballena en la bandeja). En Settings → General → marque <strong>"Use the WSL 2 based engine"</strong>. Reinicie Docker Desktop.</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-white mb-1">El dashboard no carga en el navegador</h5>
                      <p>Use <code className="bg-gray-900 px-1 rounded text-[#00FFFF]">http://127.0.0.1:8888/dashboard</code> en lugar de localhost. Verifique que los contenedores están corriendo con <code className="bg-gray-900 px-1 rounded">docker ps</code>.</p>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                      <h5 className="font-bold text-white mb-1">Rendimiento lento de la IA</h5>
                      <p>Verifique que tiene GPU NVIDIA. En Docker Desktop: Settings → Resources → WSL 2 → Active <strong>"CUDA support"</strong>. Reinicie Docker Desktop y verifique con <code className="bg-gray-900 px-1 rounded">nvidia-smi</code> en WSL.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'changelog' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white">Changelog — SentinelArg</h4>
                  
                  <div className="border-l-2 border-[#8B0000] pl-4 space-y-2">
                    <h5 className="text-lg font-bold text-white">v1.0.3 (2026-11-18)</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li><strong className="text-[#00FF00]">Nuevas funcionalidades:</strong> Instalador nativo para Windows, scripts PowerShell, detección automática de GPU NVIDIA, exportación PDF/DOCX, análisis de IA con filtrado anti-alucinaciones, contexto Ollama ampliado a 8192 tokens.</li>
                      <li><strong className="text-yellow-400">Correcciones:</strong> Fix codificación ANSI en PDF, fix truncamiento de prompt en Ollama, fix crash por variable no definida, fix detección GPU AMD/Intel en WSL2, fix Nikto (libnet-ssleay-perl), fix Gobuster (wordlist dirb), fix race condition en healthcheck.</li>
                      <li><strong className="text-blue-400">Mejoras técnicas:</strong> Separación de docker-compose en base + override por GPU, scripts .bat con detección robusta de directorio, filtro anti-alucinación de CVEs, backup de datos con docker compose cp.</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-gray-600 pl-4 space-y-2">
                    <h5 className="text-lg font-bold text-gray-300">v1.0.2 (2026-11-15)</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Dashboard web con visualización en tiempo real.</li>
                      <li>Sistema de licencias con validación online.</li>
                      <li>Motor de IA local con Ollama (qwen2.5-coder:3b).</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-gray-600 pl-4 space-y-2">
                    <h5 className="text-lg font-bold text-gray-300">v1.0.1 (2026-11-10)</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                      <li>Primera versión pública.</li>
                      <li>Escaneo web básico con Nmap, Nuclei, WhatWeb.</li>
                      <li>Reportes PDF.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-700 bg-gray-800/50 flex justify-between items-center rounded-b-2xl">
              <p className="text-xs text-gray-500">¿Necesitas ayuda? <a href="mailto:soporte@sentinelarg.com.ar" className="text-[#00FFFF] hover:underline">soporte@sentinelarg.com.ar</a></p>
              <button 
                onClick={() => setShowWindowsInfoModal(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;