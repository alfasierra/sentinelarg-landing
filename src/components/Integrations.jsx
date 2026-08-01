// src/components/Integrations.jsx
import { useTranslation } from 'react-i18next';

const Integrations = () => {
  const { t } = useTranslation();

  const integrations = [
    { name: "Wazuh", color: "text-orange-500" },
    { name: "Splunk", color: "text-green-500" },
    { name: "QRadar", color: "text-blue-500" },
    { name: "Elasticsearch", color: "text-yellow-400" },
    { name: "Redis", color: "text-red-500" },
    { name: "Celery", color: "text-purple-400" }
  ];

  return (
    <section id="integrations" className="py-16 bg-dark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t('integrations.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400">{t('integrations.subtitle')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {integrations.map((tech, index) => (
            <div key={index} className={`text-2xl font-bold ${tech.color}`}>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
