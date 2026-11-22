export default {
  title: 'SentinelArg Docs',
  description: 'Documentación oficial de SentinelArg Red AI',
  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      description: 'Documentación oficial de SentinelArg Red AI'
    },
    en: {
      label: 'English',
      lang: 'en',
      description: 'Official SentinelArg Red AI Documentation'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Volver a la Web', link: 'https://sentinelarg.com.ar' }
    ],
    locales: {
      root: {
        label: 'Español',
        nav: [
          { text: 'Volver a la Web', link: 'https://sentinelarg.com.ar' }
        ],
        sidebar: [
          {
            text: 'Guías de Inicio',
            items: [
              { text: 'Inicio Rápido', link: '/es/01-quick-start' },
              { text: 'Instalación Detallada', link: '/es/02-installation' }
            ]
          },
          {
            text: 'Uso y Configuración',
            items: [
              { text: 'Manual de Usuario', link: '/es/03-user-manual' },
              { text: 'Laboratorio de Explotación', link: '/es/04-exploit-lab' },
              { text: 'Configuración de IA', link: '/es/05-ai-configuration' }
            ]
          },
          {
            text: 'Soporte y Legal',
            items: [
              { text: 'Solución de Problemas (FAQ)', link: '/es/06-troubleshooting' },
              { text: 'Acuerdo de Licencia (EULA)', link: '/es/07-eula' },
              { text: 'Historial de Cambios', link: '/es/08-changelog' }
            ]
          }
        ]
      },
      en: {
        label: 'English',
        nav: [
          { text: 'Back to Website', link: 'https://sentinelarg.com.ar' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/en/01-quick-start' },
              { text: 'Detailed Installation', link: '/en/02-installation' }
            ]
          },
          {
            text: 'Usage & Configuration',
            items: [
              { text: 'User Manual', link: '/en/03-user-manual' },
              { text: 'Exploit Lab', link: '/en/04-exploit-lab' },
              { text: 'AI Configuration', link: '/en/05-ai-configuration' }
            ]
          },
          {
            text: 'Support & Legal',
            items: [
              { text: 'Troubleshooting & FAQ', link: '/en/06-troubleshooting' },
              { text: 'End User License Agreement', link: '/en/07-eula' },
              { text: 'Changelog', link: '/en/08-changelog' }
            ]
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alfasierra/sentinelarg' }
    ]
  }
}