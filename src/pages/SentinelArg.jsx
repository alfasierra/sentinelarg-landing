import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Terminal, FileText, Cpu, CheckCircle, AlertTriangle,
  Server, Database, Lock, Zap, Users, Award, ChevronRight, Download
} from 'lucide-react';

const SentinelArgPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(139,0,0,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(0,255,0,0.1)_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/50 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-medium">Blood-Red Offensive Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              SentinelArg <span className="text-red-500">Red AI</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-8">
              Plataforma de Pentesting Automatizado con Inteligencia Artificial para Empresas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50">
                Solicitar Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/20 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Descargar Versión de Prueba
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Sobre SentinelArg</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
              SentinelArg Red AI es una plataforma avanzada de ciberseguridad diseñada para detectar, investigar y reportar vulnerabilidades de forma automatizada. Desarrollada en Argentina, combina herramientas de pentesting de nivel empresarial con inteligencia artificial local para brindar análisis de seguridad sin depender de servicios en la nube externos.
            </p>

            {/* Target Audience */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Users, title: 'Red Teams', desc: 'Equipos de Red Team y Bug Bounty' },
                { icon: Shield, title: 'Auditores', desc: 'Auditores de seguridad corporativa' },
                { icon: Award, title: 'Compliance', desc: 'Empresas PCI-DSS, ISO 27001' },
                { icon: Lock, title: 'Consultoras', desc: 'Consultoras de ciberseguridad' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-red-700/50 transition-all">
                  <item.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Cómo Funciona</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Reconocimiento', desc: 'Escaneo automático de puertos y servicios con Nmap', icon: Zap },
                { step: '02', title: 'Detección', desc: 'Ejecución de 150+ herramientas (Nuclei, Gobuster, SQLMap)', icon: Terminal },
                { step: '03', title: 'Análisis IA', desc: 'Qwen2.5-coder:7b analiza vulnerabilidades y prioriza CVEs', icon: Cpu },
                { step: '04', title: 'Reporte', desc: 'Generación automática de PDF ejecutivo con recomendaciones', icon: FileText }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-900 border border-red-800/50 rounded-xl p-8 h-full">
                    <div className="text-6xl font-bold text-red-900/30 absolute top-4 right-4">{item.step}</div>
                    <item.icon className="w-12 h-12 text-red-400 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <ChevronRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-red-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Características Principales</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Terminal,
                  title: 'Escaneo Automatizado Completo',
                  desc: 'Ejecuta 150+ herramientas de seguridad simultáneamente incluyendo Nmap, Nuclei, Gobuster, FFuf, Nikto, SQLMap y WPScan.',
                  color: 'text-green-400'
                },
                {
                  icon: AlertTriangle,
                  title: 'Detección de CVEs Reales',
                  desc: 'Extracción automática de vulnerabilidades con identificadores CVE, puntuaciones CVSS y recomendaciones específicas.',
                  color: 'text-red-400'
                },
                {
                  icon: FileText,
                  title: 'Reportes PDF Profesionales',
                  desc: 'Generación automática de reportes ejecutivos con tablas de severidad, evidencias visuales y recomendaciones accionables.',
                  color: 'text-cyan-400'
                },
                {
                  icon: Cpu,
                  title: 'Inteligencia Artificial Local',
                  desc: 'Ollama + Qwen2.5-coder:7b para análisis contextual inteligente sin enviar datos a la nube.',
                  color: 'text-purple-400'
                },
                {
                  icon: Server,
                  title: 'Arquitectura Cliente-Servidor',
                  desc: 'Servidor API en Flask + FastMCP con CLI compilada. Sin necesidad de instalar Python ni dependencias.',
                  color: 'text-blue-400'
                },
                {
                  icon: Database,
                  title: 'Dos Versiones Disponibles',
                  desc: 'Pro con IA para análisis contextual, Classic 100% determinista para entornos regulados.',
                  color: 'text-yellow-400'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-red-700/50 transition-all">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Version Comparison */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Comparativa de Versiones</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pro Version */}
              <div className="bg-gradient-to-br from-red-900/30 to-gray-900 border-2 border-red-700 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Versión Pro</h3>
                    <p className="text-red-400">Con Inteligencia Artificial</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Análisis contextual inteligente powered by Qwen2.5-coder:7b
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Análisis con IA (Qwen2.5-coder:7b vía Ollama)',
                    'Recomendaciones contextuales inteligentes',
                    'Priorización automática de CVEs por criticidad',
                    'Ideal para Red Teams y Bug Bounty',
                    'Actualizaciones automáticas de firmas',
                    'Soporte prioritario'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all">
                  Solicitar Demo Pro
                </button>
              </div>

              {/* Classic Version */}
              <div className="bg-gradient-to-br from-green-900/30 to-gray-900 border-2 border-green-700 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Versión Classic</h3>
                    <p className="text-green-400">100% Determinista</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Resultados reproducibles para entornos regulados
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Sin IA, resultados completamente reproducibles',
                    'Compliance PCI-DSS e ISO 27001',
                    'Auditoría completa de logs y trazabilidad',
                    'Ideal para bancos y entornos regulados',
                    'Soporte empresarial 24/7',
                    'SLA garantizado'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all">
                  Solicitar Demo Classic
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Tecnologías Utilizadas</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-400" />
                  Backend
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Python 3.13</li>
                  <li>• Flask API Server</li>
                  <li>• FastMCP Protocol</li>
                  <li>• ReportLab (PDF)</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-green-400" />
                  Herramientas de Seguridad
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Nmap</li>
                  <li>• Nuclei</li>
                  <li>• Gobuster / FFuf</li>
                  <li>• Nikto / SQLMap / WPScan</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  Inteligencia Artificial
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Ollama (Local LLM)</li>
                  <li>• Qwen2.5-coder:7b</li>
                  <li>• Análisis contextual</li>
                  <li>• Sin dependencia cloud</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <blockquote className="text-2xl text-gray-300 italic mb-8">
              "SentinelArg redujo nuestro tiempo de auditoría en un 80%. Los reportes son profesionales y listos para presentar a la gerencia."
            </blockquote>
            <cite className="text-white font-bold not-italic">— CISO, Empresa de Seguros</cite>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-red-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu seguridad?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Únete a empresas líderes que ya confían en SentinelArg Red AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 text-lg">
                Solicitar Demo
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/20 font-bold rounded-lg transition-all duration-300 text-lg">
                Descargar Versión de Prueba
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SentinelArgPage;
