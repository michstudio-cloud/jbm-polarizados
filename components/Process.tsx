import React from 'react';
import { MessageCircle, Search, ScanEye, CalendarCheck, ShieldCheck, Hand } from 'lucide-react';

interface ProcessProps {
  onOpenModal: () => void;
}

const Process: React.FC<ProcessProps> = ({ onOpenModal }) => {
  const steps = [
    { 
        icon: MessageCircle, 
        title: "1. Cotiza Rápido", 
        desc: "Clic aquí para mandar WhatsApp con tu modelo y recibir precio." 
    },
    { 
        icon: Search, 
        title: "2. Asesoría Real", 
        desc: "No vendemos por vender. Te decimos qué material te conviene (y cuál no)." 
    },
    { 
        icon: ScanEye, 
        title: "3. Eliges Tono", 
        desc: "Te mostramos las películas físicamente y probamos con medidor digital." 
    },
    { 
        icon: CalendarCheck, 
        title: "4. Cita Segura", 
        desc: "Sin filas ni esperas largas. Tu lugar y horario quedan 100% reservados." 
    },
    { 
        icon: ShieldCheck, 
        title: "5. Instalación Pro", 
        desc: "Aplicación limpia, sin burbujas y con acabado de agencia garantizado." 
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Compacto */}
        <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                Tu auto listo en 5 pasos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Sin complicaciones, sin letras chiquitas y con garantía desde el primer día.
            </p>
        </div>

        <div className="relative">
             
             {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                {steps.map((step, idx) => {
                    const isFirst = idx === 0;
                    return (
                        <div 
                            key={idx} 
                            onClick={isFirst ? onOpenModal : undefined}
                            className={`
                                relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 group
                                ${isFirst 
                                    ? 'bg-white dark:bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/20 scale-105 z-20 cursor-pointer hover:bg-orange-50 dark:hover:bg-zinc-800 hover:scale-110 active:scale-95' 
                                    : 'bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-orange-200 dark:hover:border-zinc-700'
                                }
                            `}
                        >
                            {/* Hand Hint for First Step */}
                            {isFirst && (
                                <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-bounce">
                                    ¡Clic aquí!
                                </div>
                            )}

                            {/* Icon Circle */}
                            <div className={`
                                w-20 h-20 rounded-full flex items-center justify-center mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110
                                ${isFirst 
                                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg ring-4 ring-orange-100 dark:ring-orange-900/30' 
                                    : 'bg-gray-50 dark:bg-zinc-800 text-orange-600 dark:text-orange-500 border-4 border-white dark:border-zinc-900'
                                }
                            `}>
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            
                            {/* Content */}
                            <h3 className={`text-lg font-bold mb-2 ${isFirst ? 'text-orange-600 dark:text-orange-500 underline decoration-2 underline-offset-4' : 'text-gray-900 dark:text-white'}`}>
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;