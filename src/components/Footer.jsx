// src/components/Footer.jsx
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>{t('footer.copyright', { year: currentYear, nsSeparator: false })}</p>

        <p className="mt-3">
          <a href="/privacy" className="hover:text-primary transition mx-2">{t('footer.privacy')}</a>
          <span>•</span>
          <a href="/terms" className="hover:text-primary transition mx-2">{t('footer.terms')}</a>
        </p>

        <p className="mt-3">
          <a href="mailto:contacto@sentinelarg.com.ar" className="hover:text-primary transition">
            {t('footer.contact')}
          </a>
        </p>

        <div className="mt-4 flex justify-center space-x-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5492234548879?text=Hola,%20estoy%20interesado%20en%20una%20demo%20de%20SentinelArg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition"
            aria-label={t('footer.whatsapp')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.644-.506-.157-.006-.335-.006-.509-.006-.174 0-.471.074-.719.372-.247.297-.94 1.016-.94 2.478 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/sentinelarg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition"
            aria-label={t('footer.linkedin')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.447H16.393V15.234c0-.447-.038-.894-.126-1.34-.088-.446-.264-.873-.528-1.28-.264-.407-.616-.734-1.056-1.001-.44-.267-.952-.4-.156-.4-.53 0-1.055.136-1.57.408l-.232-.232c.53-.53 1.256-.86 2.065-.86.82 0 1.532.306 2.118.918.586.612.86 1.403.86 2.403v6.112h-4.055v-8.05h-3.908v8.05h-4.055V6.394h-4.055v-4.055h4.055v-3.908h8.11v3.908h4.055v4.055h-4.055v6.112z"/>
            </svg>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/SentinelArg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label={t('footer.telegram')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.682-.537.842-1.142.521l-3.25-2.02-1.528 1.457c-.14.133-.28.28-.42.42-.23.23-.47.33-.74.33-.3 0-.57-.18-.83-.53l-2.6-3.56 9.24-6.16c.39-.25.78-.1.78.34 0 .13-.05.26-.15.38z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
