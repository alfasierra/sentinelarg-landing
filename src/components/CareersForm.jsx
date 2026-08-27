// src/components/CareersForm.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useToast from '../hooks/useToast';

const careersSchema = z.object({
  name: z.string().min(2, { message: 'form.errors.minLength' }).refine(val => val.trim().length > 0, { message: 'form.errors.required' }),
  email: z.string().email({ message: 'form.errors.invalidEmail' }),
  phone: z.string().min(5, { message: 'form.errors.minLength' }),
  position: z.string().min(1, { message: 'form.errors.required' }),
  linkedin: z.string().url().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
  message: z.string().optional()
});

const CareersForm = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(careersSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.set('form-name', 'job-application');
    formData.set('name', data.name);
    formData.set('email', data.email);
    formData.set('phone', data.phone);
    formData.set('position', data.position);
    if (data.linkedin) formData.set('linkedin', data.linkedin);
    if (data.github) formData.set('github', data.github);
    if (data.message) formData.set('message', data.message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        toast.success(t('careers.success'));
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        toast.error(t('errors.formError'));
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('errors.connectionError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getErrorMessage = (key) => {
    const template = t(key);
    if (template.includes('{{count}}')) {
      return template.replace('{{count}}', '2');
    }
    return template;
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-900/30 border border-emerald-700 text-emerald-300 p-6 rounded-lg text-center">
        {t('careers.success')}
      </div>
    );
  }

  return (
    <form
      name="job-application"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <input type="hidden" name="form-name" value="job-application" />
      <input type="hidden" name="bot-field" />

      <div>
        <label htmlFor="career-name" className="block text-sm font-medium mb-1">{t('form.name')}</label>
        <input
          id="career-name"
          {...register('name')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.name.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="career-email" className="block text-sm font-medium mb-1">{t('form.email')}</label>
        <input
          id="career-email"
          type="email"
          {...register('email')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.email.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="career-phone" className="block text-sm font-medium mb-1">{t('careers.form.phone')}</label>
        <input
          id="career-phone"
          {...register('phone')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.phone.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="career-position" className="block text-sm font-medium mb-1">{t('careers.form.position')}</label>
        <select
          id="career-position"
          {...register('position')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.position ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        >
          <option value="">{t('careers.form.selectPosition')}</option>
          <option value="desarrollador-fullstack">{t('careers.positions.fullstack')}</option>
          <option value="desarrollador-frontend">{t('careers.positions.frontend')}</option>
          <option value="desarrollador-backend">{t('careers.positions.backend')}</option>
          <option value="analista-ciberseguridad">{t('careers.positions.securityAnalyst')}</option>
          <option value="devops">{t('careers.positions.devops')}</option>
          <option value="otro">{t('careers.positions.other')}</option>
        </select>
        {errors.position && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.position.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="career-linkedin" className="block text-sm font-medium mb-1">{t('careers.form.linkedin')}</label>
        <input
          id="career-linkedin"
          type="url"
          placeholder="https://linkedin.com/in/tu-perfil"
          {...register('linkedin')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.linkedin ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        />
        {errors.linkedin && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.linkedin.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="career-github" className="block text-sm font-medium mb-1">{t('careers.form.github')}</label>
        <input
          id="career-github"
          type="url"
          placeholder="https://github.com/tu-usuario"
          {...register('github')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.github ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        />
        {errors.github && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.github.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="career-message" className="block text-sm font-medium mb-1">{t('careers.form.message')}</label>
        <textarea
          id="career-message"
          {...register('message')}
          rows="4"
          placeholder={t('careers.form.messagePlaceholder')}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-bold transition ${
          isSubmitting
            ? 'bg-slate-600 cursor-not-allowed'
            : 'bg-primary hover:bg-sky-600 text-slate-900'
        }`}
      >
        {isSubmitting ? t('form.sending') : t('careers.form.submit')}
      </button>
    </form>
  );
};

export default CareersForm;
