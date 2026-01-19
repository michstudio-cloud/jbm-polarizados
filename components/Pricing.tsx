import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

interface PricingProps {
  onOpenModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="precios" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Precios en Reynosa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Inversión transparente para proteger tu auto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
                key={idx} 
                className={`relative rounded-3xl p-8 border ${
                    plan.isPremium 
                    ? 'bg-zinc-900 text-white border-orange-500 shadow-2xl shadow-orange-500/20 transform scale-105 z-10' 
                    : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:border-orange-300 dark:hover:border-orange-900'
                } transition-all duration-300`}
            >
              {plan.isPremium && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Más Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-4 ${plan.isPremium ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {plan.title}
              </h3>
              
              <div className="mb-6">
                <span className={`text-3xl font-black ${plan.isPremium ? 'text-orange-400' : 'text-orange-600'}`}>
                    {plan.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <Check size={18} className={plan.isPremium ? 'text-orange-400' : 'text-orange-500'} />
                    <span className={`text-sm ${plan.isPremium ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                        {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenModal}
                className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${
                    plan.isPremium
                    ? 'bg-white text-zinc-900 hover:bg-gray-100'
                    : 'bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700'
                }`}
              >
                Cotizar este
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 dark:bg-zinc-900/50 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800 max-w-3xl mx-auto">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Precios variables</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                El costo puede variar según si es sedán, SUV o camioneta, y la marca del material (Solex, XPEL, 3M). 
                También contamos con polarizado para <span className="text-orange-600 font-bold">Panorámico Doble desde $850 MXN</span>.
            </p>
            <button onClick={onOpenModal} className="text-orange-600 font-bold hover:underline">
                Enviar datos de mi auto para cotización exacta
            </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;