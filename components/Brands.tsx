import React from 'react';
import { BRANDS_FILM } from '../constants';
import { CheckCircle2, Layers } from 'lucide-react';

interface BrandsProps {
  onOpenModal: () => void;
}

const Brands: React.FC<BrandsProps> = ({ onOpenModal }) => {
  const materials = [
    "Polarizados Antirrayas",
    "Polarizados Nanocerámicos",
    "Polarizados Inteligentes",
    "Polarizados Reflecta (Plata y otros)",
    "Películas de Seguridad",
    "Película de Seguridad Cerámica"
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brands Header */}
        <div className="text-center mb-16">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Mejores marcas de material
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Utilizamos únicamente productos reconocidos por su desempeño y durabilidad.
            </p>
            
            <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-16 mb-8 overflow-x-auto md:overflow-visible scrollbar-hide px-2">
                {BRANDS_FILM.map((brand, idx) => (
                    <div key={idx} className="h-12 w-24 md:h-24 md:w-48 flex-shrink-0 flex items-center justify-center p-1 md:p-2 transition-transform hover:scale-110 duration-300">
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
        </div>

        {/* Materials List */}
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-8 md:p-12 border border-gray-100 dark:border-zinc-800 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 text-orange-600 dark:text-orange-500 bg-orange-100 dark:bg-orange-900/20 px-3 py-1 rounded-full">
                        <Layers size={18} />
                        <span className="font-bold uppercase tracking-wider text-xs">Catálogo Completo</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
                        Variedad para cada necesidad
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        No importa si buscas privacidad, reducción de calor extremo o seguridad. Tenemos el material específico para tu auto o proyecto.
                    </p>
                    <button 
                        onClick={onOpenModal}
                        className="hidden md:inline-flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-3 px-6 rounded-lg hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
                    >
                        Cotizar Material Especial
                    </button>
                </div>

                <div className="flex-1 w-full">
                    <div className="grid sm:grid-cols-2 gap-3">
                        {materials.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-950 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:border-orange-300 dark:hover:border-orange-900 transition-colors">
                                <CheckCircle2 className="text-orange-500 flex-shrink-0" size={20} />
                                <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center md:text-left italic">
                        * Podemos cotizar cualquier otro material específico para sus proyectos.
                    </p>
                    <div className="mt-6 md:hidden">
                        <button 
                            onClick={onOpenModal}
                            className="w-full items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-3 px-6 rounded-lg hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
                        >
                            Cotizar Material
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;