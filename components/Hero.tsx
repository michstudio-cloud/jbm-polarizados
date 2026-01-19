import React from 'react';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <div className="relative pt-20 pb-12 sm:pt-28 lg:pb-16 overflow-hidden">
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
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-4 border border-orange-200 dark:border-orange-800/50">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Especialistas en control solar
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Olvídate del calor. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Polarizado Legal</span> en Reynosa.
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Reduce hasta 60% el calor interior, protege tu vehículo, protege tu inversión y circula 100% legal en Reynosa desde el primer día.
        </p>

        <div className="flex flex-col items-center gap-3 w-full sm:w-auto px-4 mb-10">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
          >
            Cotizar mi polarizado
            <ArrowRight size={20} />
          </button>
          
          <a 
            href="#negocios" 
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800/50"
          >
             <Building2 size={16} />
             <span>¿Cotizar para negocio o edificio? Clic aquí</span>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-400 w-full max-w-5xl">
          {[
            "Interior 15 °C más fresco",
            "Visibilidad clara día y noche",
            "Instalación, sin burbujas",
            "Garantía real por escrito"
          ].map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-3 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 text-center sm:text-left shadow-sm hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-colors">
              <CheckCircle2 className="text-orange-500 flex-shrink-0" size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 font-medium opacity-80 animate-pulse">
            El calor daña interiores, pantallas y comodidad. Cada día sin polarizado te cuesta más.
        </p>

      </div>
    </div>
  );
};

export default Hero;