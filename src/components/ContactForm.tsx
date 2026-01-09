'use client';
import React, { useState } from 'react';
import { SectionProps } from '@/app/[lang]/dictionaries';
import emailjs from '@emailjs/browser';
import { LoaderIcon } from 'lucide-react';

const ContactQuote = ({ dict }: SectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  emailjs.init('K8XlPJdL4XAm3dqfV'); // Your public key
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'info@aquatopia.com',
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_xvku4rj', // Your service ID
        'template_kax59ji', // Your template ID
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Email failed to send');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 text-black">
      {/* <div className="absolute inset-0 bg-gradient-to-br opacity-60 z-0"></div> */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="header-title">{dict.contact.title}</h2>
          <p className="text-lg">{dict.contact.description}</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {dict.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              {dict.contact.form.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              {dict.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {dict.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {dict.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-md bg-gray-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center group"
          >
            {isSubmitting && <LoaderIcon className="animate-spin" />}
            {dict.contact.form.cta}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          <>
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                Thank you! Your request has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
                Something went wrong. Please try again or email us directly.
              </div>
            )}
          </>
        </form>
        <div className="mt-8 text-center">
          <p className="mb-2">
            📧 {dict.contact.form.email}:{' '}
            <a
              href="mailto:info@aquatopia.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              info@aquatopia.com
            </a>
          </p>
          <p>🌍 {dict.contact.location}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactQuote;
