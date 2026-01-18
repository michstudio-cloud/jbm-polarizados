import React from 'react';
import { Building2, Factory, Store, School, Zap, ChevronRight } from 'lucide-react';
import { WHATSAPP_BUSINESS_LINK } from '../constants';

const Business: React.FC = () => {
  const targets = [
    { icon: Building2, label: "Oficinas" },
    { icon: Store, label: "Locales Comerciales" },
    { icon: School, label: "Escuelas" },
    { icon: Factory, label: "Naves Industriales" },
    { icon: Store, label: "Franquicias" },
  ];

  const benefits = [
    "Reducir el calor en interiores",
    "Disminuir el deslumbramiento",
    "Mejorar el confort laboral",
    "Proteger mobiliario y equipo",
    "Reducir el consumo de aire acondicionado"
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide uppercase mb-6">
                    <Building2 size={14} />
                    Soluciones Arquitectónicas
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                    Polarizado para negocios y empresas en Reynosa
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Evaluamos cada proyecto de forma individual para ofrecer la solución exacta según el espacio, la orientación del sol y el presupuesto.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                    {targets.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800">
                            <t.icon className="text-blue-600 dark:text-blue-500" size={16} />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t.label}</span>
                        </div>
                    ))}
                </div>

                <div className="space-y-3 mb-10">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 min-w-[20px]">
                                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                                </div>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                        </div>
                    ))}
                </div>

                <a
                    href={WHATSAPP_BUSINESS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-4 px-8 rounded-xl hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-zinc-200 dark:shadow-none"
                >
                    Cotizar para mi negocio
                    <ChevronRight size={20} />
                </a>
            </div>

            {/* Right Column: Visual */}
            <div className="relative">
                 {/* Abstract representation of a building with window tint */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800 aspect-[4/5] lg:aspect-square">
                    <img 
                        src="https://picsum.photos/seed/office/800/800" 
                        alt="Edificio corporativo con polarizado" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                         <div className="text-white">
                            <p className="font-bold text-xl mb-2">Confort Visual y Térmico</p>
                            <p className="text-gray-300 text-sm">Mejora la productividad de tu equipo reduciendo el calor y el brillo excesivo.</p>
                         </div>
                    </div>
                </div>
                
                {/* Float Card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-zinc-800 max-w-xs hidden md:block">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg text-green-600">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">Ahorro de Energía</p>
                            <p className="text-xs text-gray-500">Menor carga para el A/C</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Business;