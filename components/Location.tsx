import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface LocationProps {
  onOpenModal: () => void;
}

const Location: React.FC<LocationProps> = ({ onOpenModal }) => {
  return (
    <section id="ubicacion" className="py-20 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">Estamos en Reynosa, Tamaulipas</h2>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <MapPin className="text-orange-600 dark:text-orange-500 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">Ubicación</h4>
                        <p className="text-gray-600 dark:text-gray-400">Eje San Pedro 462, Sin Nombre de Col 18, 88754 Reynosa, Tamps., Mexico</p>
                        <a 
                            href="https://maps.app.goo.gl/fEXVitcrRdE8kX7P7" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-orange-600 dark:text-orange-500 text-sm hover:underline mt-1 inline-block"
                        >
                            Ver en Google Maps
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <Clock className="text-orange-600 dark:text-orange-500 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">Horario</h4>
                        <p className="text-gray-600 dark:text-gray-400">Atendemos con cita</p>
                        <p className="text-gray-600 dark:text-gray-400">Lunes a Sábado: 9:00 a.m. a 6:30 p.m.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="h-96 bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative border border-gray-200 dark:border-zinc-700 shadow-xl">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.134894454796!2d-98.32365152457562!3d26.04081049701564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505c3cab58f13%3A0xcb202a18f3def61d!2sJBM%20TECNOLOG%C3%8DA%20SOLAR!5e1!3m2!1sen!2sus!4v1768802728730!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación JBM Tecnología Solar"
                className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;