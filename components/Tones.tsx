import React from 'react';
import { Eye, Shield, Scale } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Tones: React.FC = () => {
  const tones = [
    { pct: "05%", label: "Muy Oscuro", desc: "Máxima privacidad", opacity: "bg-opacity-95" },
    { pct: "20%", label: "Oscuro Equilibrado", desc: "Balance privacidad/visión", opacity: "bg-opacity-80" },
    { pct: "35%", label: "Claro (Legal)", desc: "Visibilidad total ideal", opacity: "bg-opacity-65" },
  ];

  return (
    <section id="tonos" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Tonos recomendados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            El porcentaje indica cuánta luz entra. Entre más bajo el número, más oscuro se ve.
            Aquí no adivinamos, te recomendamos el tono correcto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tones.map((tone, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900">
               {/* Simulation of tint darkness */}
              <div className="h-48 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/600/400?car)' }}>
                  <div className={`absolute inset-0 bg-black ${tone.opacity} transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center`}>
                     <span className="text-4xl font-black text-white border-4 border-white p-4 rounded-full">{tone.pct}</span>
                  </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tone.label}</h3>
                <p className="text-gray-600 dark:text-gray-400">{tone.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Consideramos todo para tu recomendación
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-full text-orange-500"><Scale size={18} /></div>
                        <span>Reglamentos</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-full text-orange-500"><Eye size={18} /></div>
                        <span>Visibilidad</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <div className="p-2 bg-white dark:bg-zinc-800 rounded-full text-orange-500"><Shield size={18} /></div>
                        <span>Seguridad</span>
                    </div>
                </div>
            </div>
            <a 
                href={WHATSAPP_LINK}
                className="bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap"
            >
                Recibir recomendación
            </a>
        </div>
      </div>
    </section>
  );
};

export default Tones;
