import React from 'react';
import { BRANDS_FILM } from '../constants';

interface BrandsProps {
  onOpenModal: () => void;
}

const Brands: React.FC<BrandsProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Materials Section Only */}
        <div className="text-center">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Mejores marcas de material
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Utilizamos únicamente productos reconocidos por su desempeño y durabilidad.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-8">
                {BRANDS_FILM.map((brand, idx) => (
                    <div key={idx} className="h-16 w-32 md:h-24 md:w-48 flex items-center justify-center p-2 transition-transform hover:scale-110 duration-300">
                        {brand.icon ? (
                            <div className="w-full h-full text-black dark:text-white">
                                {brand.icon}
                            </div>
                        ) : brand.logo ? (
                            <img 
                                src={brand.logo} 
                                alt={brand.name} 
                                className="max-h-full max-w-full object-contain"
                            />
                        ) : (
                            <div className="bg-zinc-900 dark:bg-zinc-800 text-white px-6 py-3 rounded-lg font-bold tracking-wider">
                                {brand.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-6">
                * Los precios publicados corresponden principalmente a líneas base como Solex. XPEL y 3M son productos premium con costo variable.
            </p>
            
            <button onClick={onOpenModal} className="text-orange-600 font-bold hover:underline">
                Cotizar material premium →
            </button>
        </div>

      </div>
    </section>
  );
};

export default Brands;