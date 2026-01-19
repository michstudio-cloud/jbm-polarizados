import React from 'react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-24 md:py-32 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://polarizados.site/wp-content/uploads/2026/01/63d6cd8e3c6309595240d4495839b42f.jpg" 
          alt="Protección profesional para tu auto" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          ¿Listo para proteger tu inversión?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Reduce el calor, cuida el interior de tu vehículo y maneja con mayor confort todos los días.
        </p>
        
        <button
            onClick={onOpenModal}
            className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-2xl shadow-orange-900/50 transition-all transform hover:scale-105 hover:-translate-y-1"
        >
            Agendar cita por WhatsApp
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;