import React from 'react';
import { BRANDS_AUTO, BRANDS_FILM, WHATSAPP_LINK } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Authority Section */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Confianza respaldada por agencias y empresas
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {BRANDS_AUTO.map((brand, idx) => (
                    <div key={idx} className="flex items-center justify-center px-6 py-4 border border-gray-100 dark:border-zinc-800 rounded-xl bg-gray-50 dark:bg-zinc-900">
                        <span className="text-xl font-bold text-gray-700 dark:text-gray-300">{brand.name}</span>
                    </div>
                ))}
            </div>
             <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
                Colaboramos con agencias automotrices que exigen calidad y consistencia. Ese mismo estándar se aplica en tu vehículo.
            </p>
        </div>

        {/* Materials Section */}
        <div className="border-t border-gray-100 dark:border-zinc-800 pt-16 text-center">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Mejores marcas de material
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Utilizamos únicamente productos reconocidos por su desempeño y durabilidad.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-8">
                {BRANDS_FILM.map((brand, idx) => (
                    brand.logo ? (
                        <div key={idx} className="h-16 w-32 md:h-24 md:w-48 flex items-center justify-center p-2 transition-transform hover:scale-110 duration-300">
                            <img 
                                src={brand.logo} 
                                alt={brand.name} 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ) : (
                        <div key={idx} className="bg-zinc-900 dark:bg-zinc-800 text-white px-6 py-3 rounded-lg font-bold tracking-wider">
                            {brand.name}
                        </div>
                    )
                ))}
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-6">
                * Los precios publicados corresponden principalmente a líneas base como Solex. XPEL y 3M son productos premium con costo variable.
            </p>
            
            <a href={WHATSAPP_LINK} className="text-orange-600 font-bold hover:underline">
                Cotizar material premium →
            </a>
        </div>

      </div>
    </section>
  );
};

export default Brands;