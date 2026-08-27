import React from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal, FileText, Cpu, Shield, Zap, Lock } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Terminal,
      title: t('features.item1_title'),
      description: t('features.item1_desc'),
      color: 'text-green-400'
    },
    {
      icon: FileText,
      title: t('features.item2_title'),
      description: t('features.item2_desc'),
      color: 'text-cyan-400'
    },
    {
      icon: Cpu,
      title: t('features.item3_title'),
      description: t('features.item3_desc'),
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Detección de CVEs',
      description: 'Identificación automática de vulnerabilidades críticas con CVSS',
      color: 'text-red-400'
    },
    {
      icon: Zap,
      title: '150+ Herramientas',
      description: 'Nmap, Nuclei, Gobuster, SQLMap y más integradas',
      color: 'text-yellow-400'
    },
    {
      icon: Lock,
      title: 'Sin Dependencia Cloud',
      description: 'Todo el procesamiento se realiza localmente',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-red-700/50 transition-all duration-300 group"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
