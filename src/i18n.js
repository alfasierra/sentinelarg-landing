// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        producto: "Producto",
        funcionalidades: "Funcionalidades",
        integraciones: "Integraciones",
        sobreNosotros: "Sobre Nosotros",
        solicitarDemo: "Solicitar Demo"
      },
      hero: {
        title: "Cyber Defense with Intelligence",
        subtitle: "SentinelArg es una plataforma integral de seguridad operativa (SOC) que unifica detección, análisis, correlación y respuesta automatizada en un entorno seguro y auditado."
      },
      cta: {
        demo: "Solicitar Demo Técnica"
      },
      about: {
        title: "¿Qué es SentinelArg?",
        desc: "Diseñada para empresas que exigen control total, trazabilidad forense y defensa proactiva contra amenazas avanzadas. SentinelArg combina lo mejor de los SIEM, SOAR y herramientas de threat hunting en una única plataforma comercial lista para entornos críticos."
      },
      features: {
        title: "Funcionalidades Clave",
        "Correlación inteligente de amenazas": "Correlación inteligente de amenazas",
        "Detecta ataques multietapa y movimientos laterales mediante reglas avanzadas y machine learning.": "Detecta ataques multietapa y movimientos laterales mediante reglas avanzadas y machine learning.",
        "Integración nativa con SIEMs": "Integración nativa con SIEMs",
        "Conecta Wazuh, Splunk y QRadar en un único panel con normalización de eventos y alertas unificadas.": "Conecta Wazuh, Splunk y QRadar en un único panel con normalización de eventos y alertas unificadas.",
        "Dashboards por rol": "Dashboards por rol",
        "Interfaces personalizadas para analistas, operadores, auditores y administradores con visualizaciones D3.js.": "Interfaces personalizadas para analistas, operadores, auditores y administradores con visualizaciones D3.js.",
        "Auto-remediación segura": "Auto-remediación segura",
        "Ejecuta comandos de mitigación validados con confirmación humana y registro completo de acciones.": "Ejecuta comandos de mitigación validados con confirmación humana y registro completo de acciones.",
        "Módulo forense integrado": "Módulo forense integrado",
        "Análisis de memoria con Volatility y reglas YARA para hunting avanzado y respuesta a incidentes.": "Análisis de memoria con Volatility y reglas YARA para hunting avanzado y respuesta a incidentes.",
        "Gobernanza completa": "Gobernanza completa",
        "RBAC, OAuth 2.0, auditoría de acciones y seguimiento de estado de alertas con trazabilidad total.": "RBAC, OAuth 2.0, auditoría de acciones y seguimiento de estado de alertas con trazabilidad total."
      },
      integrations: "Integraciones Nativas",
      "integrations.subtitle": "Compatible desde el primer día con las herramientas que ya usas",
      aboutUs: {
        title: "Sobre SentinelArg",
        desc: "SentinelArg fue creado por un ingeniero especializado en ciberseguridad con experiencia en operaciones de SOC, análisis forense y desarrollo de herramientas para la detección de amenazas avanzadas.",
        desc2: "La plataforma surge de la necesidad real de integrar inteligencia artificial, correlación de eventos y respuesta automatizada en un entorno seguro, auditado y listo para entornos críticos.",
        signature: "Selinger Matías, Fundador & Lead Engineer"
      },
      demo: {
        title: "Solicita una Demo Técnica",
        subtitle: "Agenda una presentación personalizada con nuestro equipo de ingeniería",
        success: "¡Gracias! Hemos recibido tu solicitud. Nos contactaremos contigo en breve."
      },
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa",
        message: "Mensaje (opcional)",
        sending: "Enviando...",
        send: "Enviar Solicitud"
      },
      errors: {
        formError: "Hubo un error al enviar el formulario. Inténtalo de nuevo.",
        connectionError: "Error de conexión. Verifica tu red."
      },
      footer: {
        copyright: "© {{year}} SentinelArg. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos y Condiciones",
        contact: "contacto@sentinelarg.com.ar",
        whatsapp: "Contactar por WhatsApp",
        telegram: "Contactar por Telegram"
      },
      images: {
        title: "Ver imágenes"
      }
    }
  },
  en: {
    translation: {
      nav: {
        producto: "Product",
        funcionalidades: "Features",
        integraciones: "Integrations",
        sobreNosotros: "About Us",
        solicitarDemo: "Request Demo"
      },
      hero: {
        title: "Cyber Defense with Intelligence",
        subtitle: "SentinelArg is an integrated Security Operations Center (SOC) platform that unifies detection, analysis, correlation, and automated response in a secure and audited environment."
      },
      cta: {
        demo: "Request Technical Demo"
      },
      about: {
        title: "What is SentinelArg?",
        desc: "Designed for enterprises demanding full control, forensic traceability, and proactive defense against advanced threats. SentinelArg combines the best of SIEM, SOAR, and threat hunting tools in a single commercial platform ready for critical environments."
      },
      features: {
        title: "Key Features",
        "Correlación inteligente de amenazas": "Intelligent Threat Correlation",
        "Detecta ataques multietapa y movimientos laterales mediante reglas avanzadas y machine learning.": "Detects multi-stage attacks and lateral movements using advanced rules and machine learning.",
        "Integración nativa con SIEMs": "Native SIEM Integration",
        "Conecta Wazuh, Splunk y QRadar en un único panel con normalización de eventos y alertas unificadas.": "Connects Wazuh, Splunk, and QRadar in a single panel with normalized events and unified alerts.",
        "Dashboards por rol": "Role-Based Dashboards",
        "Interfaces personalizadas para analistas, operadores, auditores y administradores con visualizaciones D3.js.": "Custom interfaces for analysts, operators, auditors, and administrators with D3.js visualizations.",
        "Auto-remediación segura": "Secure Auto-Remediation",
        "Ejecuta comandos de mitigación validados con confirmación humana y registro completo de acciones.": "Executes validated mitigation commands with human confirmation and full action logging.",
        "Módulo forense integrado": "Integrated Forensic Module",
        "Análisis de memoria con Volatility y reglas YARA para hunting avanzado y respuesta a incidentes.": "Memory analysis with Volatility and YARA rules for advanced hunting and incident response.",
        "Gobernanza completa": "Complete Governance",
        "RBAC, OAuth 2.0, auditoría de acciones y seguimiento de estado de alertas con trazabilidad total.": "RBAC, OAuth 2.0, action auditing, and full alert state tracking with complete traceability."
      },
      integrations: "Native Integrations",
      "integrations.subtitle": "Compatible from day one with the tools you already use",
      aboutUs: {
        title: "About SentinelArg",
        desc: "SentinelArg was created by a cybersecurity engineer with experience in SOC operations, forensic analysis, and threat detection tool development.",
        desc2: "The platform addresses the real need to integrate AI, event correlation, and automated response in a secure, auditable environment ready for critical deployments.",
        signature: "Matías Selinger, Founder & Lead Engineer"
      },
      demo: {
        title: "Request a Technical Demo",
        subtitle: "Schedule a personalized presentation with our engineering team",
        success: "Thank you! We've received your request. We'll contact you shortly."
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        message: "Message (optional)",
        sending: "Sending...",
        send: "Send Request"
      },
      errors: {
        formError: "There was an error submitting the form. Please try again.",
        connectionError: "Connection error. Please check your network."
      },
      footer: {
        copyright: "© {{year}} SentinelArg. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        contact: "contact@sentinelarg.com.ar",
        whatsapp: "Contact via WhatsApp",
        telegram: "Contact via Telegram"
      },
      images: {
        title: "View Images"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
      format(value, format, lng) {
        if (format === 'year') return new Date().getFullYear();
        return value;
      }
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;