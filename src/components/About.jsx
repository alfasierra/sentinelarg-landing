import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('about.title')}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t('about.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Globe className="w-5 h-5 text-red-400" />
                  <span>Desarrollado en Argentina</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>100% Local</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-gray-900 border border-red-800/50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-900/50 rounded-lg">
                  <div className="text-4xl font-bold text-red-400 mb-2">150+</div>
                  <div className="text-gray-400">Herramientas</div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 rounded-lg">
                  <div className="text-4xl font-bold text-green-400 mb-2">0%</div>
                  <div className="text-gray-400">Dependencia Cloud</div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 rounded-lg">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-400">Disponibilidad</div>
                </div>
                <div className="text-center p-6 bg-gray-900/50 rounded-lg">
                  <div className="text-4xl font-bold text-purple-400 mb-2">AI</div>
                  <div className="text-gray-400">Qwen2.5-coder:7b</div>
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="border-t border-gray-700 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('about.about_us_title')}
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('about.about_us_text')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: 'Seguridad', desc: 'Protegemos empresas con tecnología de punta' },
                { icon: Users, title: 'Equipo', desc: 'Expertos certificados en ciberseguridad' },
                { icon: Award, title: 'Calidad', desc: 'Estándares internacionales de calidad' }
              ].map((item, index) => (
                <div key={index} className="text-center p-8 bg-gray-900/50 rounded-xl border border-gray-700">
                  <item.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
