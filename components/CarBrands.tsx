import React from 'react';
import { BRANDS_AUTO } from '../constants';

const CarBrands: React.FC = () => {
  // Duplicate array for seamless loop
  const tickerBrands = [...BRANDS_AUTO, ...BRANDS_AUTO];

  return (
    <div className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-900 relative z-20">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        {/* Dealership Standards */}
        <p className="text-center text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-8">
            Confianza y estándares de agencia
        </p>

        {/* MOBILE: Infinite Ticker */}
        <div className="md:hidden relative w-full overflow-hidden">
            {/* Left Fade */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade */}
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="flex w-max animate-scroll">
                {tickerBrands.map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} className="w-36 flex-shrink-0 flex items-center justify-center grayscale opacity-80">
                        {brand.icon ? (
                             <div className="w-full flex justify-center items-center transform scale-110 text-gray-700 dark:text-gray-300">
                                {brand.icon}
                             </div>
                        ) : (
                            <span className="text-xl font-black text-gray-500 dark:text-gray-400 tracking-tight whitespace-nowrap">{brand.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* DESKTOP: Static Grid (Original) */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-16 opacity-80">
            {BRANDS_AUTO.map((brand, idx) => (
                <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105">
                    {brand.icon ? (
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