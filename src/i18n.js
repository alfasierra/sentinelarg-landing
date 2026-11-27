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
        casosUso: "Casos de Uso",
        descargas: "Descargas",
        sobreNosotros: "Sobre Nosotros",
        trabajaConNosotros: "Trabaja con Nosotros",
        solicitarDemo: "Solicitar Demo"
      },
      hero: {
        title: "Pentesting Automatizado con Inteligencia Artificial",
        subtitle: "Ejecuta más de 150 herramientas de seguridad, correlaciona hallazgos con IA local y genera reportes ejecutivos en PDF en minutos, no en días."
      },
      cta: {
        demo: "Descargar",
        redai: "Ver Casos de Uso"
      },
      about: {
        title: "¿Por qué elegir SentinelArg Red AI?",
        desc: "Deja de depender de scripts sueltos y reportes manuales. SentinelArg Red AI es la navaja suiza del pentesting moderno: orquesta herramientas de la industria, elimina falsos positivos con IA y entrega un informe profesional listo para tu cliente o gerencia, todo sin enviar datos sensibles a la nube."
      },
      trustBar: {
        title: "Potenciado por las mejores herramientas de la industria"
      },
      features: {
        title: "Capacidades Principales",
        ai: {
          title: "Inteligencia Artificial Local",
          desc: "Correlación automática de hallazgos y eliminación de falsos positivos sin enviar datos a la nube."
        },
        automation: {
          title: "Automatización Completa",
          desc: "Ejecuta más de 150 herramientas de seguridad (Nmap, Nuclei, SQLMap) en un solo flujo orquestado."
        },
        reporting: {
          title: "Reportes Ejecutivos",
          desc: "Generación automática de informes en PDF con mapeo a MITRE ATT&CK, OWASP y CVSS."
        },
        standalone: {
          title: "100% Offline y Portable",
          desc: "Compilado con Nuitka. No requiere instalar Python ni dependencias en el sistema anfitrión."
        },
        compliance: {
          title: "Mapeo de Compliance",
          desc: "Alineación automática de vulnerabilidades con estándares como PCI-DSS, ISO 27001 y NIST."
        },
        docker: {
          title: "Despliegue Dockerizado",
          desc: "Todas las herramientas se ejecutan en contenedores aislados para garantizar la estabilidad y seguridad."
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
        title: "Solicitar Licencia de Evaluación",
        subtitle: "Obtené una licencia gratuita de 7 días para evaluar SentinelArg Red AI en tu entorno. Te contactaremos en menos de 24 horas hábiles.",
        form: {
          name: "Nombre completo",
          company: "Empresa",
          role: "Cargo / Rol",
          rolePlaceholder: "Ej: CISO, Pentester, Sysadmin",
          email: "Email corporativo",
          emailHint: "Te enviaremos la licencia a este email. Un correo corporativo agiliza la validación.",
          phone: "Teléfono / WhatsApp",
          phoneHint: "Opcional, pero nos ayuda a contactarte más rápido.",
          source: "¿Cómo conociste SentinelArg?",
          sourcePlaceholder: "Selecciona una opción",
          source_google: "Búsqueda en Google",
          source_colleague: "Recomendación de un colega",
          source_social: "Redes sociales (LinkedIn / Twitter)",
          source_event: "Evento / Conferencia",
          source_article: "Artículo / Blog",
          source_other: "Otro",
          evaluate: "¿Qué querés evaluar?",
          evaluatePlaceholder: "Contanos brevemente tu caso de uso, tamaño de la infraestructura, o qué te gustaría probar primero...",
          sending: "Enviando solicitud...",
          send: "Solicitar licencia de 7 días",
          success: "¡Gracias! Recibimos tu solicitud. Te enviaremos la licencia de evaluación a tu email en las próximas 24 horas hábiles."
        }
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
        }
      },
      support: {
        title: "Soporte y Reporte de Incidencias",
        subtitle: "¿Encontraste un bug o tienes una sugerencia de mejora? Envíanos los detalles y te responderemos a la brevedad.",
        type: "Tipo de reporte",
        type_bug: "Reportar un Bug / Error",
        type_feature: "Sugerir una Mejora / Funcionalidad",
        type_other: "Otra consulta",
        message: "Detalles del reporte",
        messagePlaceholder: "Describe el problema o la mejora con el mayor detalle posible (pasos para reproducir, versión del sistema, etc.).",
        sending: "Enviando...",
        send: "Enviar Reporte",
        success: "¡Gracias! Hemos recibido tu reporte. Nuestro equipo de soporte revisará tu caso y te contactará por email."
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
          creem: "Pagar con Tarjeta Internacional (USD)"
        }
      },
      legal: {
        title: "Aviso Legal y Uso Responsable",
        intro: "SentinelArg es una herramienta de evaluación de seguridad ofensiva destinada ÚNICAMENTE para uso autorizado. Queda estrictamente prohibido el uso de esta herramienta o de sus funciones de IA para generar, procesar, analizar o distribuir contenido sexual, adulto, NSFW (Not Safe For Work) o pornográfico. Su uso legítimo está restringido a:",
        item1: "Pruebas de penetración con autorización explícita.",
        item2: "Auditorías de seguridad y operaciones de Red Team.",
        item3: "Competiciones CTF y entornos de laboratorio controlados.",
        item4: "Investigación de seguridad ética.",
        footer: "El uso no autorizado o para fines prohibidos es ILEGAL. Al utilizar SentinelArg, usted acepta los términos del Acuerdo de Licencia (EULA) y esta Política de Uso Aceptable."
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
          link: "Ir a la Documentación Técnica Completa"
        }
      },
      videos: {
        title_suffix: "en Acción",
        subtitle: "Mirá cómo SentinelArg Red AI automatiza el pentesting, detecta vulnerabilidades y genera reportes ejecutivos en tiempo real.",
        v1: { title: "Escaneo Automatizado con Red AI", desc: "Demostración del flujo completo de pentesting" },
        v2: { title: "Generación de Reportes PDF", desc: "Reportes ejecutivos con CVEs y CVSS" },
        v3: { title: "Análisis con IA Local", desc: "Priorización inteligente de vulnerabilidades" },
        v4: { title: "Laboratorio de Explotación", desc: "Funcionamiento de exploits" },
        back: "← Volver a Red AI"
      },
      downloads: {
        title: "Centro de Descargas",
        subtitle: "Recursos oficiales de SentinelArg Red AI. El uso de esta herramienta está restringido a auditorías autorizadas.",
        linux: {
          title: "Linux (Kali/Ubuntu/Debian)",
          file: "sentinelarg-linux-v1.0.3.tar.gz",
          requires: "Requiere: Docker + Docker Compose",
          wgetLabel: "Se recomienda ejecutar:",
          wgetCopy: "Copiar",
          wgetCopied: "✓ Copiado",
          btn: "Descargar .tar.gz"
        },
        windows: {
          title: "Windows 10/11",
          file: "SentinelArg_Windows.zip",
          requires: "Requiere: Docker Desktop + 8 GB RAM",
          includes: "Incluye: Scripts abiertos",
          transparency: "Modelo de transparencia: auditable línea por línea",
          btn: "Descargar .zip",
          infoBtn: "Más información"
        },
        disclaimer: "⚠️ Al descargar, aceptas los Términos de Servicio y la Política de Uso Ético de SentinelArg."
      },
      modal: {
        alert: { incomplete: "Por favor completa tu nombre y email para poder enviarte la licencia." },
        close: "Cerrar",
        title: "Completa tus datos",
        desc: "Te enviaremos la clave de activación a este email inmediatamente después de confirmar tu pago.",
        redirect: {
          mp: "Serás redirigido a MercadoPago"
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
        casosUso: "Use Cases",
        descargas: "Downloads",
        sobreNosotros: "About Us",
        trabajaConNosotros: "Careers",
        solicitarDemo: "Request Demo"
      },
      hero: {
        title: "Automated Pentesting with Artificial Intelligence",
        subtitle: "Run 150+ security tools, correlate findings with local AI, and generate executive PDF reports in minutes, not days."
      },
      cta: {
        demo: "Download",
        redai: "View Use Cases"
      },
      about: {
        title: "Why choose SentinelArg Red AI?",
        desc: "Stop relying on scattered scripts and manual reports. SentinelArg Red AI is the modern pentesting Swiss army knife: it orchestrates industry-standard tools, eliminates false positives with AI, and delivers a professional report ready for your client or management, all without sending sensitive data to the cloud."
      },
      trustBar: {
        title: "Powered by the industry's best tools"
      },
      features: {
        title: "Key Capabilities",
        ai: {
          title: "Local Artificial Intelligence",
          desc: "Automatic correlation of findings and false positive elimination without sending data to the cloud."
        },
        automation: {
          title: "Complete Automation",
          desc: "Runs 150+ security tools (Nmap, Nuclei, SQLMap) in a single orchestrated flow."
        },
        reporting: {
          title: "Executive Reporting",
          desc: "Automatic generation of PDF reports with mapping to MITRE ATT&CK, OWASP, and CVSS."
        },
        standalone: {
          title: "100% Offline & Portable",
          desc: "Compiled with Nuitka. No need to install Python or dependencies on the host system."
        },
        compliance: {
          title: "Compliance Mapping",
          desc: "Automatic alignment of vulnerabilities with standards like PCI-DSS, ISO 27001, and NIST."
        },
        docker: {
          title: "Dockerized Deployment",
          desc: "All tools run in isolated containers to guarantee stability and security."
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
        title: "Request Evaluation License",
        subtitle: "Get a free 7-day license to evaluate SentinelArg Red AI in your environment. We will contact you within 24 business hours.",
        form: {
          name: "Full name",
          company: "Company",
          role: "Position / Role",
          rolePlaceholder: "e.g. CISO, Pentester, Sysadmin",
          email: "Corporate email",
          emailHint: "We will send the license to this email. A corporate email speeds up validation.",
          phone: "Phone / WhatsApp",
          phoneHint: "Optional, but helps us contact you faster.",
          source: "How did you hear about SentinelArg?",
          sourcePlaceholder: "Select an option",
          source_google: "Google search",
          source_colleague: "Colleague recommendation",
          source_social: "Social media (LinkedIn / Twitter)",
          source_event: "Event / Conference",
          source_article: "Article / Blog",
          source_other: "Other",
          evaluate: "What do you want to evaluate?",
          evaluatePlaceholder: "Briefly describe your use case, infrastructure size, or what you'd like to test first...",
          sending: "Sending request...",
          send: "Request 7-day license",
          success: "Thank you! We received your request. We will send the evaluation license to your email within 24 business hours."
        }
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
        }
      },
      support: {
        title: "Support & Incident Reporting",
        subtitle: "Found a bug or have a feature suggestion? Send us the details and we will get back to you shortly.",
        type: "Report type",
        type_bug: "Report a Bug / Error",
        type_feature: "Suggest a Feature / Improvement",
        type_other: "Other inquiry",
        message: "Report details",
        messagePlaceholder: "Describe the issue or improvement in as much detail as possible (steps to reproduce, system version, etc.).",
        sending: "Sending...",
        send: "Submit Report",
        success: "Thank you! We have received your report. Our support team will review your case and contact you via email."
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
          creem: "Pay with International Card (USD)"
        }
      },
      legal: {
        title: "Legal Notice and Responsible Use",
        intro: "SentinelArg is an offensive security assessment tool intended SOLELY for authorized use. It is strictly prohibited to use this tool or its AI features to generate, process, analyze, or distribute sexual, adult, NSFW (Not Safe For Work), or pornographic content. Its legitimate use is restricted to:",
        item1: "Penetration testing with explicit authorization.",
        item2: "Security audits and Red Team operations.",
        item3: "CTF competitions and controlled laboratory environments.",
        item4: "Ethical security research.",
        footer: "Unauthorized use or use for prohibited purposes is ILLEGAL. By using SentinelArg, you agree to the terms of the End User License Agreement (EULA) and this Acceptable Use Policy."
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
          link: "Go to Complete Technical Documentation"
        }
      },
      videos: {
        title_suffix: "in Action",
        subtitle: "See how SentinelArg Red AI automates pentesting, detects vulnerabilities, and generates executive reports in real time.",
        v1: { title: "Automated Scanning with Red AI", desc: "Demonstration of the complete pentesting flow" },
        v2: { title: "PDF Report Generation", desc: "Executive reports with CVEs and CVSS" },
        v3: { title: "Analysis with Local AI", desc: "Intelligent prioritization of vulnerabilities" },
        v4: { title: "Exploitation Lab", desc: "How exploits work" },
        back: "← Back to Red AI"
      },
      downloads: {
        title: "Download Center",
        subtitle: "Official SentinelArg Red AI resources. Use of this tool is restricted to authorized audits.",
        linux: {
          title: "Linux (Kali/Ubuntu/Debian)",
          file: "sentinelarg-linux-v1.0.3.tar.gz",
          requires: "Requires: Docker + Docker Compose",
          wgetLabel: "Recommended command:",
          wgetCopy: "Copy",
          wgetCopied: "✓ Copied",
          btn: "Download .tar.gz"
        },
        windows: {
          title: "Windows 10/11",
          file: "SentinelArg_Windows.zip",
          requires: "Requires: Docker Desktop + 8 GB RAM",
          includes: "Includes: Open scripts",
          transparency: "Transparency model: auditable line by line",
          btn: "Download .zip",
          infoBtn: "More information"
        },
        disclaimer: "⚠️ By downloading, you accept the Terms of Service and Ethical Use Policy of SentinelArg."
      },
      modal: {
        alert: { incomplete: "Please complete your name and email so we can send you the license." },
        close: "Close",
        title: "Complete your details",
        desc: "We will send the activation key to this email immediately after confirming your payment.",
        redirect: {
          mp: "You will be redirected to MercadoPago"
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