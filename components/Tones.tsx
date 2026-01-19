import React from 'react';
import { Eye, Shield, Scale, ScanEye, MoveRight } from 'lucide-react';
import { BRANDS_FILM } from '../constants';

interface TonesProps {
  onOpenModal: () => void;
}

const Tones: React.FC<TonesProps> = ({ onOpenModal }) => {
  const xpelBrand = BRANDS_FILM.find(b => b.name === 'XPEL');

  const tones = [
    { pct: "05%", label: "Muy Oscuro", desc: "Máxima privacidad", opacity: "bg-opacity-95" },
    { pct: "20%", label: "Oscuro Equilibrado", desc: "Balance privacidad/visión", opacity: "bg-opacity-80" },
    { pct: "35%", label: "Claro (Legal)", desc: "Visibilidad total ideal", opacity: "bg-opacity-65" },
    { pct: "50%", label: "Extra Claro", desc: "Protección con mucha luz", opacity: "bg-opacity-50" },
    { pct: "70%", label: "Semitransparente", desc: "Casi invisible, alto rechazo", opacity: "bg-opacity-30" },
    { pct: "100%", label: "Transparente", desc: "Invisible (Parabrisas)", opacity: "bg-opacity-0" },
  ];

  return (
    <section id="tonos" className="py-20 bg-white dark:bg-zinc-950">
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
        <div className="text-center mb-16">
          
          {/* XPEL Badge Optimized */}
          <div className="mb-10 flex flex-col items-center justify-center animate-fade-in-up w-full">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                Calidad Internacional
            </span>
            
            <div className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900/30 transition-all duration-300 max-w-full">
                <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap tracking-tight">
                    Instaladores Certificados
                </span>
                
                {/* Vertical Divider */}
                <div className="h-4 w-px bg-gray-200 dark:bg-zinc-700"></div>

                {/* Logo Container with fixed widths for stability */}
                <div className="h-4 sm:h-5 w-[70px] sm:w-[90px] flex items-center justify-center text-black dark:text-white opacity-90 group-hover:opacity-100 transition-opacity">
                    {xpelBrand?.icon ? (
                         <div className="w-full h-full flex items-center">
                            {xpelBrand.icon}
                         </div>
                    ) : xpelBrand?.logo ? (
                        <img 
                            src={xpelBrand.logo} 
                            alt="XPEL" 
                            className="h-full w-auto object-contain" 
                        />
                    ) : null}
                </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Tonos recomendados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            El porcentaje indica cuánta luz entra. Entre más bajo el número, más oscuro se ve.
            Aquí no adivinamos, te recomendamos el tono correcto.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center gap-2 mb-2 text-xs text-gray-400 animate-pulse px-1">
            <span>Desliza para ver tonos</span>
            <MoveRight size={16} />
        </div>

        <div className="
            flex overflow-x-auto pb-4 gap-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide mb-12
            md:grid md:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
        ">
          {tones.map((tone, idx) => (
            <div 
                key={idx} 
                className="
                    flex-shrink-0 w-[85vw] snap-center
                    md:w-auto
                    group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900
                "
            >
               {/* Use the tint meter photo for simulation context */}
              <div className="h-48 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.51.jpg)' }}>
                  <div className={`absolute inset-0 bg-black ${tone.opacity} transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center`}>
                     <span className="text-4xl font-black text-white border-4 border-white p-4 rounded-full drop-shadow-lg">{tone.pct}</span>
                  </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tone.label}</h3>
                <p className="text-gray-600 dark:text-gray-400">{tone.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Consideramos todo para tu recomendación
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-full text-orange-500"><Scale size={18} /></div>
                        <span>100% en Regla</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-full text-orange-500"><Eye size={18} /></div>
                        <span>Visibilidad a tu gusto</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-full text-orange-500"><Shield size={18} /></div>
                        <span>Inversión Segura</span>
                    </div>
                </div>
            </div>
            <button 
                onClick={onOpenModal}
                className="w-full md:w-auto bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap"
            >
                Recibir recomendación
            </button>
        </div>

        {/* Tint Meter Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-800 flex flex-col md:block md:relative">
            {/* Image Container */}
            <div className="relative h-80 md:h-[500px] w-full">
                <img 
                    src="https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.51.jpg" 
                    alt="Medidor de transmisión de luz (Tint Meter)" 
                    className="w-full h-full object-cover object-center"
                />
                {/* Desktop Overlay Gradient (Hidden on Mobile) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent hidden md:block"></div>
            </div>

            {/* Text Content */}
            {/* Mobile: Solid Dark Background. Desktop: Transparent Overlay. */}
            <div className="bg-zinc-900 md:bg-transparent p-8 md:p-12 md:absolute md:inset-0 flex flex-col justify-center md:justify-end">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-2 text-orange-500">
                        <ScanEye size={32} />
                        <span className="font-bold uppercase tracking-wider text-sm">Precisión Garantizada</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                        No adivinamos: Medimos.
                    </h3>
                    <p className="text-gray-300 text-lg">
                        Utilizamos medidores digitales (Tint Meter) para demostrarte el porcentaje real de luz que ingresa a través del vidrio. Te aseguras de cumplir con la ley y obtener la protección exacta que pagaste.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Tones;