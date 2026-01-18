import React from 'react';
import { BRANDS_AUTO, BRANDS_FILM, WHATSAPP_LINK } from '../constants';
import { Building2 } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 gap-12 border-t border-gray-100 dark:border-zinc-800 pt-16">
            <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                    Mejores marcas de material
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Utilizamos únicamente productos reconocidos por su desempeño y durabilidad.
                </p>
                <div className="flex gap-4 mb-6">
                     {BRANDS_FILM.map((brand, idx) => (
                        <div key={idx} className="bg-zinc-900 text-white px-4 py-2 rounded font-bold tracking-wider text-sm">
                            {brand.name}
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                    * Los precios publicados corresponden principalmente a líneas base como Solex. XPEL y 3M son productos premium con costo variable.
                </p>
                <div className="mt-6">
                    <a href={WHATSAPP_LINK} className="text-orange-600 font-bold hover:underline">
                        Cotizar material premium →
                    </a>
                </div>
            </div>

            {/* B2B Section */}
            <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                    <Building2 className="text-orange-500" size={28} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Para Negocios y Empresas</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Oficinas, locales, escuelas y naves industriales. Reducimos el calor interior y el consumo de aire acondicionado.
                </p>
                <a 
                    href={WHATSAPP_LINK}
                    className="inline-block bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 font-semibold py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors text-sm"
                >
                    Cotizar proyecto comercial
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
