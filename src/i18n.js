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
        descargas: "Descargas",
        sobreNosotros: "Sobre Nosotros",
        trabajaConNosotros: "Trabaja con Nosotros",
        solicitarDemo: "Solicitar Demo"
      },
      hero: {
        title: "Protección Cibernética Inteligente para Empresas Argentinas",
        subtitle: "Plataforma unificada de seguridad que correlaciona amenazas, automatiza respuestas y simplifica la gestión de riesgos con integración nativa a tus herramientas existentes."
      },
      cta: {
        demo: "Ver Demo",
        redai: "Conocer Red AI"
      },
      about: {
        title: "Sobre SentinelArg",
        desc: "SentinelArg es una plataforma avanzada de ciberseguridad diseñada para detectar, investigar y responder a amenazas complejas en entornos empresariales. Combina inteligencia artificial con integraciones nativas para ofrecer una visibilidad completa de tu infraestructura."
      },
      features: {
        title: "Funcionalidades Clave",
        correlation: {
          title: "Correlación inteligente de amenazas",
          desc: "Detecta ataques multietapa y movimientos laterales mediante reglas avanzadas y machine learning."
        },
        siem: {
          title: "Integración nativa con SIEMs",
          desc: "Conecta Wazuh, Splunk y QRadar en un único panel con normalización de eventos y alertas unificadas."
        },
        dashboards: {
          title: "Dashboards por rol",
          desc: "Interfaces personalizadas para analistas, operadores, auditores y administradores con visualizaciones D3.js."
        },
        remediation: {
          title: "Auto-remediación segura",
          desc: "Ejecuta comandos de mitigación validados con confirmación humana y registro completo de acciones."
        },
        forensic: {
          title: "Módulo forense integrado",
          desc: "Análisis de memoria con Volatility y reglas YARA para hunting avanzado y respuesta a incidentes."
        },
        governance: {
          title: "Gobernanza completa",
          desc: "RBAC, OAuth 2.0, auditoría de acciones y seguimiento de estado de alertas con trazabilidad total."
        }
      },
      useCases: {
        title: "Casos de Uso Técnicos",
        subtitle: "Escenarios reales donde SentinelArg agrega valor inmediato",
        demoAvailable: "Disponible en demo",
        advancedThreats: {
          title: "Detección de amenazas avanzadas",
          desc: "Identifica ataques multietapa y movimientos laterales antes de que comprometan tu red."
        },
        socGovernance: {
          title: "Gobernanza de operaciones de SOC",
          desc: "Audita, asigna y sigue el estado de alertas con trazabilidad completa y RBAC."
        },
        siemIntegration: {
          title: "Integración con SIEMs existentes",
          desc: "Conecta Wazuh, Splunk o QRadar sin reemplazar tu infraestructura actual."
        }
      },
      integrations: {
        title: "Integraciones Tecnológicas",
        subtitle: "Funciona sin problemas con tu stack de seguridad actual"
      },
      aboutUs: {
        title: "Sobre Nosotros",
        desc: "Somos un equipo argentino apasionado por la ciberseguridad, construyendo herramientas que realmente resuelven problemas del mundo real.",
        desc2: "Desarrollamos SentinelArg desde cero para empresas que necesitan protección avanzada sin complejidad innecesaria.",
        signature: "El equipo de SentinelArg"
      },
      demo: {
        title: "Solicita una Demostración",
        subtitle: "Agenda una sesión personalizada y descubre cómo SentinelArg puede proteger tu organización.",
        success: "¡Gracias! Hemos recibido tu solicitud. Nos contactaremos contigo en breve para coordinar tu demostración."
      },
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa",
        message: "Mensaje (opcional)",
        sending: "Enviando...",
        send: "Enviar solicitud"
      },
      careers: {
        title: "Trabaja con Nosotros",
        subtitle: "Únete a nuestro equipo y construye el futuro de la ciberseguridad",
        success: "¡Gracias por tu interés! Hemos recibido tu postulación y te contactaremos si hay una oportunidad que coincida con tu perfil.",
        whyJoin: {
          title: "¿Por qué unirte a SentinelArg?",
          desc: "Somos una startup en crecimiento que valora el talento, la innovación y el impacto real en la seguridad de empresas argentinas.",
          benefit1: "Trabajo remoto flexible",
          benefit2: "Proyectos desafiantes con tecnologías de vanguardia",
          benefit3: "Crecimiento profesional y capacitación continua",
          benefit4: "Equipo colaborativo y cultura de aprendizaje"
        },
        form: {
          phone: "Teléfono",
          position: "Posición de interés",
          selectPosition: "Selecciona una posición...",
          linkedin: "Perfil de LinkedIn (opcional)",
          github: "Perfil de GitHub (opcional)",
          cv: "Curriculum Vitae (CV)",
          cvHelp: "Formatos aceptados: PDF, DOC, DOCX (máx. 5MB)",
          message: "Carta de presentación o mensaje",
          messagePlaceholder: "Cuéntanos por qué te interesa trabajar con nosotros y qué aportas al equipo...",
          submit: "Enviar postulación"
        },
        positions: {
          fullstack: "Desarrollador Fullstack",
          frontend: "Desarrollador Frontend",
          backend: "Desarrollador Backend",
          securityAnalyst: "Analista de Ciberseguridad",
          devops: "DevOps / SRE",
          other: "Otro (especificar en mensaje)"
        }
      },
      errors: {
        formError: "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.",
        connectionError: "Error de conexión. Verifica tu internet e inténtalo de nuevo."
      },
      footer: {
        copyright: "© {{year}} SentinelArg. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "contacto@sentinelarg.com.ar",
        whatsapp: "Contactar por WhatsApp",
        linkedin: "Visitar LinkedIn de la empresa",
        telegram: "Contactar por Telegram"
      },
      images: {
        btn: "Ver imágenes de SentinelArg"
      },
      // ==========================================
      // NUEVAS SECCIONES AGREGADAS
      // ==========================================
      redai: {
        badge: "Nuevo Producto",
        subtitle: "Plataforma de Pentesting Automatizado con Inteligencia Artificial",
        description: "Navaja suiza de pentesting que integra 150+ herramientas de seguridad con IA local para análisis de vulnerabilidades. Detecta CVEs críticos y genera reportes ejecutivos en PDF automáticamente.",
        features: {
          tools: { title: "150+ Herramientas Integradas", desc: "Nmap, Nuclei, SQLMap, Gobuster, FFuf, Nikto y más ejecutándose simultáneamente" },
          reports: { title: "Reportes PDF Ejecutivos", desc: "Generación automática con CVEs, CVSS y recomendaciones listas para gerencia" },
          ia: { title: "IA Local Privada", desc: "Análisis contextual inteligente sin enviar datos sensibles a la nube" },
          standalone: { title: "Sin Dependencias", desc: "No requiere Python ni librerías. Compilado y listo para usar" }
        },
        cta_videos: "Ver cómo funciona Red AI",
        disclaimer: "Herramienta diseñada exclusivamente para auditorías de seguridad autorizadas, Red Teaming y pruebas de penetración éticas"
      },
      pricing: {
        badge: "VERSIÓN COMPLETA",
        or: "o",
        per_year: "año",
        pro: {
          title: "SentinelArg Pro",
          badge: "CON IA",
          desc: "Plataforma completa de pentesting automatizado con inteligencia artificial local. Ideal para equipos de seguridad, consultores y empresas que necesitan auditorías profundas con reportes ejecutivos automáticos.",
          feat1: "IA local para análisis contextual",
          feat2: "Priorización inteligente de CVEs",
          feat3: "Reportes ejecutivos con IA",
          feat4: "150+ Herramientas integradas y 100% Offline"
        },
        btn: {
          mp: "Pagar con MercadoPago (ARS)",
          stripe: "Pagar con Tarjeta Internacional (USD)"
        }
      },
      legal: {
        title: "Aviso Legal y Uso Responsable",
        intro: "SentinelArg es una herramienta de evaluación de seguridad ofensiva destinada ÚNICAMENTE para uso autorizado. Su uso está restringido a:",
        item1: "Pruebas de penetración con autorización explícita.",
        item2: "Auditorías de seguridad y Red Team operations.",
        item3: "Competiciones CTF y entornos de laboratorio controlados.",
        item4: "Investigación de seguridad ética.",
        footer: "El uso no autorizado es ILEGAL. Al utilizar SentinelArg, usted acepta los términos del Acuerdo de Licencia (EULA)."
      },
      specs: {
        title: "Arquitectura y Capacidades",
        f1: { title: "Inteligencia Artificial Local", desc: "Orquestador IA para correlación de hallazgos, eliminación de falsos positivos y asistente de seguridad interactivo (Ollama) sin enviar datos a la nube." },
        f2: { title: "Auditoría Web Profunda", desc: "Detección de tecnologías, descubrimiento de contenido (Katana, FFUF) y escaneo de vulnerabilidades (Nuclei, Dalfox, Nikto) con análisis SSL/TLS." },
        f3: { title: "Windows & Active Directory", desc: "Enumeración de red (NetExec, Nbtscan), evaluación de políticas AD (SMBMap, Enum4linux) y harvesting de credenciales (LLMNR/NBT-NS)." },
        f4: { title: "Servidores Linux", desc: "Detección de servicios, análisis de configuración y detección de cifrados débiles o protocolos obsoletos (SSH-Audit, Nmap NSE)." },
        f5: { title: "Reportes de Compliance", desc: "Formato ejecutivo limpio con mapeo directo a OWASP Top 10, MITRE ATT&CK, CWE y PCI-DSS, clasificados por severidad." },
        f6: { title: "Despliegue Dockerizado", desc: "Instalación en segundos sin dependencias del host. Todas las 150+ herramientas se ejecutan en contenedores aislados para garantizar la estabilidad." },
        bottom1: { title: "Actualización Segura" },
        bottom2: { title: "Activación por Dispositivo" },
        bottom3: { title: "Soporte Dedicado" },
        docs: {
          prompt: "¿Necesitas ver los comandos de instalación o la configuración avanzada?",
          link: "Ir a la Documentación Técnica Completa (GitHub)"
        }
      },
      videos: {
        title_suffix: "en Acción",
        subtitle: "Mirá cómo SentinelArg Red AI automatiza el pentesting, detecta vulnerabilidades y genera reportes ejecutivos en tiempo real.",
        v1: { title: "Escaneo Automatizado con Red AI", desc: "Demostración del flujo completo de pentesting" },
        v2: { title: "Generación de Reportes PDF", desc: "Reportes ejecutivos con CVEs y CVSS" },
        v3: { title: "Análisis con IA Local", desc: "Priorización inteligente de vulnerabilidades" },
        v4: { title: "Versión Classic vs Pro", desc: "Comparativa entre ambas modalidades" },
        back: "← Volver a Red AI"
      },
      downloads: {
        title: "Centro de Descargas",
        subtitle: "Cliente de SentinelArg Red AI. El uso de esta herramienta está restringido a auditorías autorizadas.",
        file: {
          title: "SentinelArg Red AI - Cliente v1.0.1",
          desc: "Compilado para Linux x86_64 (Sin dependencias de Python)"
        },
        btn: "Descargar .tar.gz",
        terminal: {
          label: "Descarga directa vía terminal:",
          copy: "Copiar"
        },
        disclaimer: "⚠️ Al descargar, aceptas los Términos de Servicio y la Política de Uso Ético de SentinelArg."
      },
      modal: {
        alert: { incomplete: "Por favor completa tu nombre y email para poder enviarte la licencia." },
        close: "Cerrar",
        title: "Completa tus datos",
        desc: "Te enviaremos la clave de activación a este email inmediatamente después de confirmar tu pago.",
        redirect: {
          mp: "Serás redirigido a MercadoPago",
          stripe: "Serás redirigido a la pasarela segura (USD)"
        },
        form: {
          name: "Nombre completo *",
          email: "Email *",
          company: "Empresa (opcional)",
          submit: "Continuar al Pago →",
          privacy: "Tus datos están protegidos y se usarán únicamente para enviarte tu licencia."
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        producto: "Product",
        funcionalidades: "Features",
        integraciones: "Integrations",
        descargas: "Downloads",
        sobreNosotros: "About Us",
        trabajaConNosotros: "Careers",
        solicitarDemo: "Request Demo"
      },
      hero: {
        title: "Intelligent Cyber Defense for Argentine Enterprises",
        subtitle: "Unified security platform that correlates threats, automates responses, and simplifies risk management with native integration to your existing tools."
      },
      cta: {
        demo: "View Demo",
        redai: "Learn about Red AI"
      },
      about: {
        title: "About SentinelArg",
        desc: "SentinelArg is an advanced cybersecurity platform designed to detect, investigate, and respond to complex threats in enterprise environments. It combines artificial intelligence with native integrations to offer complete visibility of your infrastructure."
      },
      features: {
        title: "Key Features",
        correlation: {
          title: "Intelligent Threat Correlation",
          desc: "Detects multi-stage attacks and lateral movements using advanced rules and machine learning."
        },
        siem: {
          title: "Native SIEM Integration",
          desc: "Connects Wazuh, Splunk, and QRadar in a single panel with normalized events and unified alerts."
        },
        dashboards: {
          title: "Role-Based Dashboards",
          desc: "Custom interfaces for analysts, operators, auditors, and administrators with D3.js visualizations."
        },
        remediation: {
          title: "Secure Auto-Remediation",
          desc: "Executes validated mitigation commands with human confirmation and full action logging."
        },
        forensic: {
          title: "Integrated Forensic Module",
          desc: "Memory analysis with Volatility and YARA rules for advanced hunting and incident response."
        },
        governance: {
          title: "Complete Governance",
          desc: "RBAC, OAuth 2.0, action auditing, and full alert state tracking with complete traceability."
        }
      },
      useCases: {
        title: "Technical Use Cases",
        subtitle: "Real-world scenarios where SentinelArg delivers immediate value",
        demoAvailable: "Available in demo",
        advancedThreats: {
          title: "Advanced Threat Detection",
          desc: "Identify multi-stage attacks and lateral movements before they compromise your network."
        },
        socGovernance: {
          title: "SOC Operations Governance",
          desc: "Audit, assign, and track alert status with full traceability and RBAC."
        },
        siemIntegration: {
          title: "Integration with Existing SIEMs",
          desc: "Connect Wazuh, Splunk, or QRadar without replacing your current infrastructure."
        }
      },
      integrations: {
        title: "Technological Integrations",
        subtitle: "Works seamlessly with your current security stack"
      },
      aboutUs: {
        title: "About Us",
        desc: "We are an Argentine team passionate about cybersecurity, building tools that truly solve real-world problems.",
        desc2: "We developed SentinelArg from scratch for companies that need advanced protection without unnecessary complexity.",
        signature: "The SentinelArg Team"
      },
      demo: {
        title: "Request a Demonstration",
        subtitle: "Schedule a personalized session and discover how SentinelArg can protect your organization.",
        success: "Thank you! We have received your request. We will contact you shortly to coordinate your demonstration."
      },
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        message: "Message (optional)",
        sending: "Sending...",
        send: "Send Request"
      },
      careers: {
        title: "Work With Us",
        subtitle: "Join our team and build the future of cybersecurity",
        success: "Thank you for your interest! We have received your application and will contact you if there is an opportunity that matches your profile.",
        whyJoin: {
          title: "Why join SentinelArg?",
          desc: "We are a growing startup that values talent, innovation, and real impact on the security of Argentine companies.",
          benefit1: "Flexible remote work",
          benefit2: "Challenging projects with cutting-edge technologies",
          benefit3: "Professional growth and continuous training",
          benefit4: "Collaborative team and learning culture"
        },
        form: {
          phone: "Phone",
          position: "Position of interest",
          selectPosition: "Select a position...",
          linkedin: "LinkedIn Profile (optional)",
          github: "GitHub Profile (optional)",
          cv: "Curriculum Vitae (CV)",
          cvHelp: "Accepted formats: PDF, DOC, DOCX (max. 5MB)",
          message: "Cover letter or message",
          messagePlaceholder: "Tell us why you are interested in working with us and what you bring to the team...",
          submit: "Submit Application"
        },
        positions: {
          fullstack: "Fullstack Developer",
          frontend: "Frontend Developer",
          backend: "Backend Developer",
          securityAnalyst: "Cybersecurity Analyst",
          devops: "DevOps / SRE",
          other: "Other (specify in message)"
        }
      },
      errors: {
        formError: "There was an error submitting the form. Please try again.",
        connectionError: "Connection error. Please check your internet and try again."
      },
      footer: {
        copyright: "© {{year}} SentinelArg. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "contact@sentinelarg.com.ar",
        whatsapp: "Contact via WhatsApp",
        linkedin: "Visit company LinkedIn",
        telegram: "Contact via Telegram"
      },
      images: {
        btn: "View SentinelArg Images"
      },
      // ==========================================
      // NEW SECTIONS ADDED (ENGLISH)
      // ==========================================
      redai: {
        badge: "New Product",
        subtitle: "Automated Pentesting Platform with Artificial Intelligence",
        description: "Pentesting Swiss army knife integrating 150+ security tools with local AI for vulnerability analysis. Detects critical CVEs and generates executive PDF reports automatically.",
        features: {
          tools: { title: "150+ Integrated Tools", desc: "Nmap, Nuclei, SQLMap, Gobuster, FFuf, Nikto and more running simultaneously" },
          reports: { title: "Executive PDF Reports", desc: "Automatic generation with CVEs, CVSS and recommendations ready for management" },
          ia: { title: "Private Local AI", desc: "Intelligent contextual analysis without sending sensitive data to the cloud" },
          standalone: { title: "No Dependencies", desc: "No Python or libraries required. Compiled and ready to use" }
        },
        cta_videos: "See how Red AI works",
        disclaimer: "Tool designed exclusively for authorized security audits, Red Teaming and ethical penetration testing"
      },
      pricing: {
        badge: "FULL VERSION",
        or: "or",
        per_year: "year",
        pro: {
          title: "SentinelArg Pro",
          badge: "WITH AI",
          desc: "Complete automated pentesting platform with local artificial intelligence. Ideal for security teams, consultants and companies that need deep audits with automatic executive reports.",
          feat1: "Local AI for contextual analysis",
          feat2: "Intelligent CVE prioritization",
          feat3: "Executive reports with AI",
          feat4: "150+ Integrated tools and 100% Offline"
        },
        btn: {
          mp: "Pay with MercadoPago (ARS)",
          stripe: "Pay with International Card (USD)"
        }
      },
      legal: {
        title: "Legal Notice and Responsible Use",
        intro: "SentinelArg is an offensive security assessment tool intended SOLELY for authorized use. Its use is restricted to:",
        item1: "Penetration testing with explicit authorization.",
        item2: "Security audits and Red Team operations.",
        item3: "CTF competitions and controlled laboratory environments.",
        item4: "Ethical security research.",
        footer: "Unauthorized use is ILLEGAL. By using SentinelArg, you agree to the terms of the End User License Agreement (EULA)."
      },
      specs: {
        title: "Architecture and Capabilities",
        f1: { title: "Local Artificial Intelligence", desc: "AI orchestrator for finding correlation, false positive elimination, and interactive security assistant (Ollama) without sending data to the cloud." },
        f2: { title: "Deep Web Auditing", desc: "Technology detection, content discovery (Katana, FFUF) and vulnerability scanning (Nuclei, Dalfox, Nikto) with SSL/TLS analysis." },
        f3: { title: "Windows & Active Directory", desc: "Network enumeration (NetExec, Nbtscan), AD policy assessment (SMBMap, Enum4linux) and credential harvesting (LLMNR/NBT-NS)." },
        f4: { title: "Linux Servers", desc: "Service detection, configuration analysis and detection of weak ciphers or obsolete protocols (SSH-Audit, Nmap NSE)." },
        f5: { title: "Compliance Reporting", desc: "Clean executive format with direct mapping to OWASP Top 10, MITRE ATT&CK, CWE and PCI-DSS, classified by severity." },
        f6: { title: "Dockerized Deployment", desc: "Installation in seconds without host dependencies. All 150+ tools run in isolated containers to guarantee stability." },
        bottom1: { title: "Safe Update" },
        bottom2: { title: "Device-Bound Activation" },
        bottom3: { title: "Dedicated Support" },
        docs: {
          prompt: "Need to see installation commands or advanced configuration?",
          link: "Go to Complete Technical Documentation (GitHub)"
        }
      },
      videos: {
        title_suffix: "in Action",
        subtitle: "See how SentinelArg Red AI automates pentesting, detects vulnerabilities, and generates executive reports in real time.",
        v1: { title: "Automated Scanning with Red AI", desc: "Demonstration of the complete pentesting flow" },
        v2: { title: "PDF Report Generation", desc: "Executive reports with CVEs and CVSS" },
        v3: { title: "Analysis with Local AI", desc: "Intelligent prioritization of vulnerabilities" },
        v4: { title: "Classic vs Pro Version", desc: "Comparison between both modalities" },
        back: "← Back to Red AI"
      },
      downloads: {
        title: "Download Center",
        subtitle: "SentinelArg Red AI Client. Use of this tool is restricted to authorized audits.",
        file: {
          title: "SentinelArg Red AI - Client v1.0.1",
          desc: "Compiled for Linux x86_64 (No Python dependencies)"
        },
        btn: "Download .tar.gz",
        terminal: {
          label: "Direct download via terminal:",
          copy: "Copy"
        },
        disclaimer: "⚠️ By downloading, you accept the Terms of Service and Ethical Use Policy of SentinelArg."
      },
      modal: {
        alert: { incomplete: "Please complete your name and email so we can send you the license." },
        close: "Close",
        title: "Complete your details",
        desc: "We will send the activation key to this email immediately after confirming your payment.",
        redirect: {
          mp: "You will be redirected to MercadoPago",
          stripe: "You will be redirected to the secure gateway (USD)"
        },
        form: {
          name: "Full Name *",
          email: "Email *",
          company: "Company (optional)",
          submit: "Continue to Payment →",
          privacy: "Your data is protected and will only be used to send you your license."
        }
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
