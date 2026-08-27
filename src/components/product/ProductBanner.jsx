import React from 'react';
import { Shield, Terminal, FileText, Cpu, CheckCircle, AlertTriangle } from 'lucide-react';

const ProductBanner = ({ onLearnMore }) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(139,0,0,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(0,255,0,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/50 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-medium">Blood-Red Offensive Intelligence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SentinelArg <span className="text-red-500">Red AI</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Plataforma de Pentesting Automatizado con Inteligencia Artificial para Empresas
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                SentinelArg Red AI es una navaja suiza de pentesting automatizado que integra más de 
                <span className="text-green-400 font-semibold"> 150 herramientas de seguridad</span> 
                (Nmap, Nuclei, Gobuster, SQLMap, etc.) con inteligencia artificial local para análisis de vulnerabilidades.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Detecta CVEs críticos, genera reportes ejecutivos en PDF y opera en dos modalidades: 
                <span className="text-cyan-400 font-semibold"> Versión Pro</span> (con IA para análisis contextual) y 
                <span className="text-green-400 font-semibold"> Versión Classic</span> (100% determinista para entornos corporativos restrictivos).
              </p>

              {/* Key Features List */}
              <div className="space-y-3 pt-4">
                {[
                  'Escaneo Automatizado Completo (150+ herramientas)',
                  'Detección de CVEs Reales con CVSS',
                  'Reportes PDF Profesionales Automáticos',
                  'Dos Versiones: Pro (IA) y Classic (Determinista)',
                  'Arquitectura Cliente-Servidor Flask + CLI'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Dashboard Mockup */}
            <div className="bg-gray-900/80 border border-red-800/50 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-red-800/30">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-red-400" />
                  <span className="text-white font-mono text-sm">sentinelarg-cli v2.0</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Console Output Mockup */}
              <div className="font-mono text-xs space-y-2">
                <div className="text-green-400">$ sentinelarg scan --target example.com --mode pro</div>
                <div className="text-gray-400">[+] Initializing SentinelArg Red AI...</div>
                <div className="text-gray-400">[+] Loading 150+ security tools</div>
                <div className="text-cyan-400">[+] AI Engine: Qwen2.5-coder:7b (Ollama)</div>
                <div className="text-green-400">[+] Nmap: Port scan completed (23 open ports)</div>
                <div className="text-green-400">[+] Nuclei: 47 vulnerabilities detected</div>
                <div className="text-red-400">[!] CVE-2025-55184 detected (CVSS: 9.8)</div>
                <div className="text-green-400">[+] Generating PDF report...</div>
                <div className="text-green-400">[✓] Scan completed in 4m 32s</div>
                <div className="text-cyan-400 mt-4">📄 Report: ./reports/example_com_20250101.pdf</div>
              </div>

              {/* CVE Badge Mockup */}
              <div className="mt-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <div>
                      <div className="text-red-400 font-bold">CVE-2025-55184</div>
                      <div className="text-gray-400 text-xs">Critical • CVSS 9.8</div>
                    </div>
                  </div>
                  <div className="text-red-400 font-bold text-lg">CRITICAL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Version Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pro Version */}
            <div className="bg-gradient-to-br from-red-900/30 to-gray-900 border border-red-700/50 rounded-xl p-8 hover:border-red-500/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Versión Pro</h3>
              </div>
              <p className="text-gray-300 mb-6">Con Inteligencia Artificial para análisis contextual inteligente</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Análisis con IA (Qwen2.5-coder:7b)',
                  'Recomendaciones contextuales',
                  'Priorización inteligente de CVEs',
                  'Ideal para Red Teams',
                  'Actualizaciones automáticas'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Classic Version */}
            <div className="bg-gradient-to-br from-green-900/30 to-gray-900 border border-green-700/50 rounded-xl p-8 hover:border-green-500/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Versión Classic</h3>
              </div>
              <p className="text-gray-300 mb-6">100% determinista, ideal para bancos y entornos regulados</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Sin IA, resultados reproducibles',
                  'Compliance PCI-DSS / ISO 27001',
                  'Auditoría completa de logs',
                  'Ideal para entornos regulados',
                  'Soporte empresarial 24/7'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onLearnMore}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
              >
                Ver Más Detalles
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/20 font-bold rounded-lg transition-all duration-300">
                Solicitar Demo
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              También disponible: Descargar Versión de Prueba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
