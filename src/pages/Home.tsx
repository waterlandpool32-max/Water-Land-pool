import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Users, ChevronRight, Award, CheckCircle, Wrench } from 'lucide-react';
import EstimateForm from '../components/EstimateForm';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { 
      title: t('service_renovations_title'), 
      icon: <img src="https://drive.google.com/thumbnail?id=1KAtvGrDfRpj5nUm6Z414uoBDxbFRXNqN&sz=w200" className="w-[100px] h-[100px] object-contain" alt="Renovation Icon" referrerPolicy="no-referrer" />, 
      path: '/services/renovations' 
    },
    { 
      title: t('service_cleaning_title'), 
      icon: <img src="https://drive.google.com/thumbnail?id=1crlB1Q9AxAK9sxIL4a45rMWIbQBhB6Ch&sz=w200" className="w-[100px] h-[100px] object-contain" alt="Cleaning Icon" referrerPolicy="no-referrer" />, 
      path: '/services/cleaning' 
    },
    { 
      title: t('service_equipment_title'), 
      icon: <img src="https://drive.google.com/thumbnail?id=1-pPSPyVffOBBFxsub6_H-alVApPDgp3W&sz=w200" className="w-[100px] h-[100px] object-contain" alt="Equipment Icon" referrerPolicy="no-referrer" />, 
      path: '/services/equipment' 
    },
    { 
      title: t('service_acid_wash_title'), 
      icon: <img src="https://drive.google.com/thumbnail?id=1GZ31v4deLDAuHUl2GPcfj0t2yMGmAQxl&sz=w200" className="w-[100px] h-[100px] object-contain" alt="Acid Wash Icon" referrerPolicy="no-referrer" />, 
      path: '/services/acid-wash' 
    },
  ];

  const stats = [
    { val: t('home_stats_1_val'), label: t('home_stats_1_label'), icon: <Clock className="w-6 h-6" />, dark: false },
    { val: t('home_stats_2_val'), label: t('home_stats_2_label'), icon: <Users className="w-6 h-6" />, dark: true },
    { val: t('home_stats_3_val'), label: t('home_stats_3_label'), icon: <CheckCircle className="w-6 h-6" />, dark: true },
    { val: t('home_stats_4_val'), label: t('home_stats_4_label'), icon: <Wrench className="w-6 h-6" />, dark: false },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Luxury Pool"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <span className="inline-block px-4 py-1 bg-brand-light/20 border border-brand-light/30 rounded-full text-[#eeeeee] font-bold text-sm tracking-widest uppercase">
              {t('home_years_excellence')}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-slate-200 max-w-xl leading-relaxed">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#estimate" className="btn-primary !bg-white !text-[#002b62] hover:!bg-slate-100">
                {t('cta_estimate')}
              </a>
              <a href="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-dark">
                {t('nav_services')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="estimate"
          >
            <EstimateForm />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-dark leading-tight">
                {t('home_intro_title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('home_intro_text')}
              </p>
              <a href="/about" className="inline-flex items-center text-brand-light font-bold hover:underline">
                {t('home_learn_more')} <ChevronRight size={20} />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://drive.google.com/thumbnail?id=1Tt2QD72zjdLGeBor8F2rXBTExjk2SxTM&sz=w1000" 
                className="rounded-3xl shadow-2xl w-full aspect-[16/9] object-cover saturate-125 contrast-105 brightness-105"
                alt="Family enjoying pool"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-light text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">{t('home_trusted_count')}</p>
                <p className="text-sm font-medium opacity-90">{t('home_trusted_label')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-brand-dark">{t('home_services_title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t('home_services_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white shadow-lg border-t-4 border-brand-dark"
              >
                <div className="w-[110px] h-[110px] flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
                <a href={service.path} className="text-brand-light font-semibold text-sm hover:underline flex items-center">
                  {t('cta_view_details')} <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/services" className="btn-secondary">
              {t('cta_view_all')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Impactful Results */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-brand-light font-bold italic text-lg block">
                {t('home_stats_subtitle')}
              </span>
              <h2 className="text-5xl font-bold text-brand-dark leading-tight">
                {t('home_stats_title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {t('home_stats_desc')}
              </p>
            </div>

            <div className="grid grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 ${stat.dark ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${stat.dark ? 'bg-brand-light/20 text-brand-light' : 'bg-brand-light/10 text-brand-light'}`}>
                    {stat.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-4xl font-bold mb-1">{stat.val}</p>
                    <p className={`text-sm font-medium ${stat.dark ? 'text-slate-300' : 'text-slate-500'}`}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className="relative py-32 text-white overflow-hidden">
        {/* Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Pool Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <h3 className="text-4xl font-bold">{t('home_ready_title')}</h3>
          <p className="text-xl text-slate-200">{t('home_ready_subtitle')}</p>
          <div className="pt-4">
            <a href="/contact" className="btn-primary !px-12 !py-4 text-lg !bg-brand-light hover:!bg-white hover:!text-brand-dark">
              {t('cta_schedule')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
