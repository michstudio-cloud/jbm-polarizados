import React from 'react';
import { FEATURES_PRODUCT } from '../constants';
import { Check, Layers } from 'lucide-react';

interface ProductInfoProps {
  onOpenModal: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ onOpenModal }) => {
  return (
    <section id="producto" className="py-20 bg-gray-50 dark:bg-zinc-900 border-y border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="relative bg-white dark:bg-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-zinc-800">
               {/* High Quality Product Image */}
               <div className="h-48 overflow-hidden">
                  <img 
                    src="https://polarizados.site/wp-content/uploads/2026/01/2023-Tesla-Model-Y-Grey-Black-HTX-XRP-WC-19-png.jpg" 
                    alt="Tesla con polarizado de alta calidad"
                    className="w-full h-full object-cover"
                  />
               </div>
               
               <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600">
                        <Layers size={32} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Tecnología Nanocerámica</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Estructura multicapa de alto rendimiento</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                        "Capa Anti-Rayaduras",
                        "Película Nanocerámica (Rechazo IR)",
                        "Capa Filtro UV 99%",
                        "Adhesivo de Alta Claridad",
                        "Liner de Protección"
                    ].map((layer, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-900 rounded border border-gray-100 dark:border-zinc-800">
                             <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{layer}</span>
                        </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-orange-600 font-bold tracking-wide uppercase mb-3 text-sm">🔥 Producto más vendido</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
              Polarizado Inteligente y Nanocerámico
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Este es el polarizado que sí funciona en el calor extremo de Reynosa. No se trata solo de oscurecer vidrios, se trata de controlar el calor correctamente.
            </p>

            <ul className="space-y-4 mb-10">
              {FEATURES_PRODUCT.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded text-green-600 dark:text-green-400">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenModal}
              className="text-orange-600 dark:text-orange-500 font-bold hover:underline flex items-center gap-2"
            >
              Ver opciones y cotizar <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;