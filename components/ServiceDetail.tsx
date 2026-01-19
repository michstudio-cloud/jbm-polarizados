import React, { useEffect } from 'react';
import { CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { ServiceData } from '../data/services';

interface ServiceDetailProps {
  service: ServiceData;
  onOpenModal: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onOpenModal }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    // Update Document Title for SEO
    document.title = `${service.title} | JBM Tecnología Solar Reynosa`;
    
    // Update Meta Description dynamically (basic implementation)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', service.fullDesc.substring(0, 160) + '...');
    }
  }, [service]);

  return (
    <div className="bg-gray-50 dark:bg-zinc-950 min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/90 text-white text-xs font-bold tracking-wide uppercase mb-4 backdrop-blur-sm">
                <service.icon size={14} className="fill-current" />
                Servicio Especializado
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white max-w-4xl leading-tight">
                {service.title}
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl font-medium">
                {service.shortDesc}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Description Card */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Descripción</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {service.fullDesc}
                    </p>
                    
                    {/* SEO Keywords Tag Cloud (Visual only) */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {service.seoKeywords.map((kw, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                                #{kw.replace(/\s+/g, '')}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        Datos Técnicos
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {service.specs.map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                <div className="mt-1 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sidebar / Sticky CTA */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                    {/* Benefits Card */}
                    <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-6 border border-orange-100 dark:border-orange-800/30">
                        <h3 className="font-bold text-orange-800 dark:text-orange-400 mb-4 uppercase text-sm tracking-wider">
                            Beneficios Clave
                        </h3>
                        <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 size={18} className="text-orange-600 dark:text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-800 dark:text-gray-200">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Applications (if any) */}
                    {service.applications && (
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800">
                             <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase text-sm tracking-wider">
                                Aplicaciones Ideales
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {service.applications.map((app, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg border border-gray-200 dark:border-zinc-700">
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Card */}
                    <div className="bg-zinc-900 dark:bg-white rounded-2xl p-6 shadow-xl text-center">
                        <h3 className="text-xl font-bold text-white dark:text-zinc-900 mb-2">
                            ¿Te interesa este servicio?
                        </h3>
                        <p className="text-gray-400 dark:text-gray-600 text-sm mb-6">
                            Cotiza la instalación profesional para tu auto o proyecto arquitectónico.
                        </p>
                        <button 
                            onClick={onOpenModal}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-lg shadow-orange-900/50"
                        >
                            Solicitar Cotización
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 mb-12 border-t border-gray-200 dark:border-zinc-800 pt-8">
             <a href="/" className="inline-flex items-center text-gray-500 hover:text-orange-500 transition-colors font-medium">
                ← Volver al inicio
             </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;