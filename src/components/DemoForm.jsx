import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useToast } from '../hooks/useToast';

const demoSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'La empresa es requerida'),
  message: z.string().optional()
});

const DemoForm = () => {
  const { t } = useTranslation();
  const toast = useToast();
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(demoSchema)
  });

  const onSubmit = async (data) => {
    try {
      // Simular envío (integrar con Netlify Forms o backend)
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(t('demoForm.success'));
      reset();
    } catch (error) {
      toast.error(t('demoForm.error'));
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('demoForm.title')}</h2>
            <p className="text-gray-400">Completa el formulario y te contactaremos en breve</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {t('demoForm.name_label')}
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className={`w-full px-4 py-3 bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors`}
                placeholder="Juan Pérez"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t('demoForm.email_label')}
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className={`w-full px-4 py-3 bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors`}
                placeholder="juan@empresa.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                {t('demoForm.company_label')}
              </label>
              <input
                {...register('company')}
                type="text"
                id="company"
                className={`w-full px-4 py-3 bg-gray-900 border ${errors.company ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors`}
                placeholder="Empresa S.A."
              />
              {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {t('demoForm.message_label')}
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Cuéntanos sobre tus necesidades..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none"
            >
              {isSubmitting ? 'Enviando...' : t('demoForm.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
