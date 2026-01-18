import React from 'react';
import { Camera, Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  // Using specific IDs or random seeds to get consistent "car-like" or texture images
  const images = [
    "https://picsum.photos/seed/car1/600/400",
    "https://picsum.photos/seed/car2/600/400",
    "https://picsum.photos/seed/car3/600/400",
    "https://picsum.photos/seed/car4/600/400",
    "https://picsum.photos/seed/car5/600/400",
    "https://picsum.photos/seed/car6/600/400"
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4 text-orange-600">
                    <Camera size={24} />
                    <span className="font-bold uppercase tracking-wider text-sm">Nuestros Trabajos</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                    Resultados Impecables
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Así se ve la protección profesional. Acabados limpios, sin burbujas y con la tonalidad exacta que tu auto necesita.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {images.map((src, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
                        <img 
                            src={src} 
                            alt={`Instalación de polarizado ${idx + 1}`} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-medium">Ver detalle</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 flex justify-center">
                <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-medium"
                >
                    <Instagram size={20} />
                    <span>Ver más trabajos en Instagram</span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Gallery;