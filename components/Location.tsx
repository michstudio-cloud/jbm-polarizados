import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6">Estamos en Reynosa, Tamaulipas</h2>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <MapPin className="text-orange-500 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-lg">Ubicación</h4>
                        <p className="text-gray-400">Fracc. San Pedro, Reynosa, Tamaulipas.</p>
                        <a href="#" className="text-orange-500 text-sm hover:underline mt-1 inline-block">Ver en Google Maps</a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <Clock className="text-orange-500 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-lg">Horario</h4>
                        <p className="text-gray-400">Atendemos con cita</p>
                        <p className="text-gray-400">Lunes a Sábado: 9:00 a.m. a 6:30 p.m.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">¿Listo para proteger tu inversión?</h3>
                <p className="text-gray-400 mb-6">Reduce el calor, cuida el interior de tu vehículo y maneja con mayor confort todos los días.</p>
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-900/50 transition-all"
                >
                    Agendar cita por WhatsApp
                </a>
            </div>
          </div>

          <div className="h-96 bg-zinc-800 rounded-2xl overflow-hidden relative">
            {/* Placeholder for map */}
            <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Mapa Ubicación" 
                className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800 text-center">
                    <MapPin className="text-orange-500 mx-auto mb-2" size={32} />
                    <span className="font-bold">Ver Ubicación</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
