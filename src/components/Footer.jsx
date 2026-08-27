import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="/" className="text-2xl font-bold text-white inline-flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-red-500" />
                Sentinel<span className="text-red-500">Arg</span>
              </a>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="mailto:contact@sentinelarg.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">{t('footer.quick_links')}</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t('nav.features')}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><a href="/sentinelarg" className="text-gray-400 hover:text-white transition-colors">{t('nav.product')}</a></li>
                <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">{t('nav.demo')}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Buenos Aires, Argentina</li>
                <li><a href="mailto:contact@sentinelarg.com" className="text-gray-400 hover:text-white transition-colors">contact@sentinelarg.com</a></li>
              </ul>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
