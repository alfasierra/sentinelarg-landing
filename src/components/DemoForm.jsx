// src/components/DemoForm.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useToast from '../hooks/useToast';

const demoSchema = z.object({
  name: z.string().min(2, { message: 'form.errors.minLength' }).refine(val => val.trim().length > 0, { message: 'form.errors.required' }),
  email: z.string().email({ message: 'form.errors.invalidEmail' }),
  company: z.string().min(2, { message: 'form.errors.minLength' }),
  message: z.string().optional()
});

const DemoForm = () => {
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
    resolver: zodResolver(demoSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.set('form-name', 'demo-request');
    formData.set('name', data.name);
    formData.set('email', data.email);
    formData.set('company', data.company);
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
        toast.success(t('demo.success'));
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
        {t('demo.success')}
      </div>
    );
  }

  return (
    <form
      name="demo-request"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <input type="hidden" name="form-name" value="demo-request" />
      <input type="hidden" name="bot-field" />

      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium mb-1">{t('form.name')}</label>
        <input
          id="demo-name"
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
        <label htmlFor="demo-email" className="block text-sm font-medium mb-1">{t('form.email')}</label>
        <input
          id="demo-email"
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
        <label htmlFor="demo-company" className="block text-sm font-medium mb-1">{t('form.company')}</label>
        <input
          id="demo-company"
          {...register('company')}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
          }`}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-400">{getErrorMessage(errors.company.message)}</p>
        )}
      </div>

      <div>
        <label htmlFor="demo-message" className="block text-sm font-medium mb-1">{t('form.message')}</label>
        <textarea
          id="demo-message"
          {...register('message')}
          rows="4"
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
        {isSubmitting ? t('form.sending') : t('form.send')}
      </button>
    </form>
  );
};

export default DemoForm;
