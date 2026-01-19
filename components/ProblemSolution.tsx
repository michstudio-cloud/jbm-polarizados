import React from 'react';
import { FEATURES_PROBLEM } from '../constants';
import { ShieldAlert, Flame, MoveRight } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenModal: () => void;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenModal }) => {
  return (
    <section id="problema" className="py-20 bg-white dark:bg-zinc-950">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-2 text-orange-600 font-bold mb-4">
              <Flame size={24} />
              <span>EL PROBLEMA LOCAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
              En Reynosa, el calor no es normal. <br/>
              <span className="text-gray-500 dark:text-gray-500">El polarizado tampoco debería serlo.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              No instalamos polarizado genérico. Trabajamos con películas diseñadas para climas extremos, porque entendemos lo que el sol de Reynosa le hace a un vehículo.
            </p>
            <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg">
              <div className="flex gap-4">
                <ShieldAlert className="text-red-500 flex-shrink-0" size={24} />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  Esto no es teoría. Es lo que hacemos todos los días en Reynosa para proteger tu piel y el interior de tu auto.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center gap-2 mb-2 text-xs text-gray-400 animate-pulse px-1 mt-8 lg:mt-0">
             <span>Desliza para ver beneficios</span>
             <MoveRight size={16} />
          </div>

          <div className="
            flex overflow-x-auto pb-4 gap-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide
            sm:grid sm:grid-cols-2 sm:gap-6 sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible
          ">
            {FEATURES_PROBLEM.map((feature, idx) => (
              <div 
                key={idx} 
                className="
                    flex-shrink-0 w-[85vw] snap-center
                    sm:w-auto
                    bg-gray-50 dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-orange-500/30 transition-colors
                "
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
             onClick={onOpenModal}
             className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-3 px-8 rounded-full hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors"
          >
            Proteger mi auto
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;