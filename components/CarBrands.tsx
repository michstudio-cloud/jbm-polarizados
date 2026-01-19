import React from 'react';
import { BRANDS_AUTO } from '../constants';

const CarBrands: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        {/* Dealership Standards */}
        <p className="text-center text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-8">
            Confianza y estándares de agencia
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
            {BRANDS_AUTO.map((brand, idx) => (
                <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105">
                    {brand.icon ? (
                         // The icon SVG already contains sizing and color classes
                         brand.icon
                    ) : (
                        <span className="text-xl font-black text-gray-500 dark:text-gray-400 tracking-tight">{brand.name}</span>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarBrands;