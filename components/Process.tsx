import React from 'react';
import { MessageCircle, Search, ThumbsUp, CalendarClock, Hammer, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenModal: () => void;
}

const Process: React.FC<ProcessProps> = ({ onOpenModal }) => {
  const steps = [
    { icon: MessageCircle, title: "1. Escribes", desc: "Nos contactas por WhatsApp." },
    { icon: Search, title: "2. Revisamos", desc: "Analizamos tu vehículo y uso." },
    { icon: ThumbsUp, title: "3. Recomendamos", desc: "Elegimos el material ideal." },
    { icon: CalendarClock, title: "4. Agendamos", desc: "Fijamos día y hora." },
    { icon: Hammer, title: "5. Instalamos", desc: "Trabajo profesional y limpio." },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Proceso simple y claro
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
                Sin improvisaciones. Sin promesas falsas.
            </p>
        </div>

        <div className="relative">
             {/* Steps Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-4 md:gap-8 relative z-10">
                {steps.map((step, idx) => {
                    const isLast = idx === steps.length - 1;
                    return (
                        <div 
                            key={idx} 
                            className={`
                                relative flex flex-col items-center text-center group transition-all duration-300
                                ${isLast 
                                    ? 'col-span-2 md:col-span-1 bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-orange-200 dark:border-zinc-800 shadow-lg md:shadow-none md:bg-transparent md:dark:bg-transparent md:p-0 md:border-0' 
                                    : ''}
                            `}
                        >
                            <div className="w-16 h-16 bg-white dark:bg-zinc-800 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <step.icon size={28} />
                            </div>
                            
                            {/* Arrow Connector (Desktop Only) */}
                            {!isLast && (
                                <div className="hidden md:flex absolute top-8 -right-8 w-8 h-8 -mt-4 items-center justify-center z-0 text-gray-300 dark:text-zinc-700">
                                    <ArrowRight size={24} strokeWidth={1.5} />
                                </div>
                            )}

                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[140px]">{step.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="mt-12 text-center">
             <button
                onClick={onOpenModal}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
                Cotizar ahora
            </button>
        </div>
      </div>
    </section>
  );
};

export default Process;