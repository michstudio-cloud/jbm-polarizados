import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-12 sm:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.53-1.jpeg" 
          alt="JBM Tecnología Solar - Polarizado Reynosa" 
          className="w-full h-full object-cover opacity-20 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-zinc-950/80 dark:to-zinc-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-6 border border-orange-200 dark:border-orange-800/50">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Diseñado para el calor de Reynosa
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Polarizado <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Profesional</span> y Legal
        </h1>

        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Instala polarizado recomendado por expertos locales para reducir el calor y proteger tu inversión desde el primer día.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Agendar Cita
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-medium text-gray-700 dark:text-gray-400">
          {[
            "Menor entrada de calor",
            "Polarizado Inteligente",
            "Instalación Profesional",
            "Garantía por escrito"
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-800">
              <CheckCircle2 className="text-orange-500" size={18} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;