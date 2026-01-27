// src/App.jsx
import { useState } from 'react';

function App() {
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
        alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Verifica tu red.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: "Correlación inteligente de amenazas",
      desc: "Detecta ataques multietapa y movimientos laterales mediante reglas avanzadas y machine learning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Integración nativa con SIEMs",
      desc: "Conecta Wazuh, Splunk y QRadar en un único panel con normalización de eventos y alertas unificadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Dashboards por rol",
      desc: "Interfaces personalizadas para analistas, operadores, auditores y administradores con visualizaciones D3.js.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Auto-remediación segura",
      desc: "Ejecuta comandos de mitigación validados con confirmación humana y registro completo de acciones.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: "Módulo forense integrado",
      desc: "Análisis de memoria con Volatility y reglas YARA para hunting avanzado y respuesta a incidentes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Gobernanza completa",
      desc: "RBAC, OAuth 2.0, auditoría de acciones y seguimiento de estado de alertas con trazabilidad total.",
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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-primary transition">Producto</a>
              <a href="#features" className="hover:text-primary transition">Funcionalidades</a>
              <a href="#integrations" className="hover:text-primary transition">Integraciones</a>
              <a href="#about-us" className="hover:text-primary transition">Sobre Nosotros</a>
              <a href="#demo" className="bg-primary hover:bg-sky-600 text-slate-900 px-4 py-2 rounded font-medium transition">
                Solicitar Demo
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
              <a href="#about" className="block py-2 hover:text-primary">Producto</a>
              <a href="#features" className="block py-2 hover:text-primary">Funcionalidades</a>
              <a href="#integrations" className="block py-2 hover:text-primary">Integraciones</a>
              <a href="#about-us" className="block py-2 hover:text-primary">Sobre Nosotros</a>
              <a href="#demo" className="block py-2 bg-primary text-slate-900 text-center rounded mt-2">Solicitar Demo</a>
            </div>
          )}
        </div>
      </nav>

     {/* Hero Section */}
      <header id="home" className="py-16 md:py-24 bg-darker relative overflow-hidden">
        {/* Fondo de respaldo sólido (mismo tono que la imagen) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
        
        {/* Imagen optimizada con lazy load y fade-in */}
        <img
          src="/sentinelarg-hero.jpg"
          alt="SentinelArg - Cyber Defense with Intelligence"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-700"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Cyber Defense with Intelligence
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            SentinelArg es una plataforma integral de seguridad operativa (SOC) que unifica detección, análisis, correlación y respuesta automatizada en un entorno seguro y auditado.
          </p>
          <div className="mt-10">
            <a
              href="#demo"
              className="inline-block bg-primary hover:bg-sky-600 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition shadow-lg hover:shadow-primary/30"
            >
              Solicitar Demo Técnica
            </a>
          </div>
        </div>
      </header>


      {/* About Product Section */}
      <section id="about" className="py-16 bg-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">¿Qué es SentinelArg?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg text-center leading-relaxed">
            Diseñada para empresas que exigen control total, trazabilidad forense y defensa proactiva contra amenazas avanzadas. 
            SentinelArg combina lo mejor de los SIEM, SOAR y herramientas de threat hunting en una única plataforma comercial lista para entornos críticos.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Funcionalidades Clave</h2>
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
            <h2 className="text-3xl font-bold">Integraciones Nativas</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">Compatible desde el primer día con las herramientas que ya usas</p>
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
            <h2 className="text-3xl font-bold">Sobre SentinelArg</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            SentinelArg fue creado por un ingeniero especializado en ciberseguridad con experiencia en operaciones de SOC, análisis forense y desarrollo de herramientas para la detección de amenazas avanzadas. 
            La plataforma surge de la necesidad real de integrar inteligencia artificial, correlación de eventos y respuesta automatizada en un entorno seguro, auditado y listo para entornos críticos.
          </p>
          <p className="text-gray-400 text-center mt-4">
            Hoy, SentinelArg se prepara para su lanzamiento comercial con una arquitectura robusta, compatible con los principales SIEMs y diseñada para cumplir con los más altos estándares de gobernanza y trazabilidad.
          </p>
          <p className="text-gray-300 text-center mt-6 font-medium">
            — Selinger Matías, Fundador & Lead Engineer
          </p>
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="demo" className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Solicita una Demo Técnica</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-400">Agenda una presentación personalizada con nuestro equipo de ingeniería</p>
          </div>

          {submitSuccess ? (
            <div className="bg-emerald-900/30 border border-emerald-700 text-emerald-300 p-6 rounded-lg text-center">
              ¡Gracias! Hemos recibido tu solicitud. Nos contactaremos contigo en breve.
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
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Empresa</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje (opcional)</label>
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
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SentinelArg. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="mailto:contacto@sentinelarg.com.ar" className="hover:text-primary transition">
              contacto@sentinelarg.com.ar
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;