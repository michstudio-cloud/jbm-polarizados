import React from 'react';
import { Camera, Facebook, ExternalLink, MoveRight } from 'lucide-react';

const Gallery: React.FC = () => {
  // Updated with new image list provided
  const images = [
    "https://polarizados.site/wp-content/uploads/2026/01/63d6cd8e3c6309595240d4495839b42f-1.webp", // Instalación profesional
    "https://polarizados.site/wp-content/uploads/2026/01/549977215_1391718112955780_8342074345367458224_n-2.jpg", // Trabajo en SUV Changan
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.44-1.jpg", // Trabajo en SUV
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.53.jpeg", // Polarizado inteligente
    "https://polarizados.site/wp-content/uploads/2026/01/615810071_1494866745974249_1659294192991222039_n.jpg", // Camioneta caja
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.49-2.jpg", // Proceso de instalación
    "https://polarizados.site/wp-content/uploads/2026/01/548976118_1388175596643365_3323515692048945738_n-2.jpg",
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.44-3.jpeg",
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.45.jpg",
    "https://polarizados.site/wp-content/uploads/2026/01/616243611_1494867429307514_6569322724305256898_n.jpg",
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.52.jpg",
    "https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.42-1.jpeg"
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
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
            <div className="text-center mb-8 md:mb-12">
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

            {/* Mobile Swipe Hint */}
            <div className="md:hidden flex items-center justify-end gap-2 mb-4 text-xs text-gray-400 animate-pulse px-2">
                <span>Desliza</span>
                <MoveRight size={16} />
            </div>

            {/* Gallery Container - Slideshow on Mobile / Grid on Desktop */}
            <div className="
                flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide
                md:grid md:grid-cols-3 md:gap-6 md:pb-0 md:overflow-visible
            ">
                {images.map((src, idx) => (
                    <a 
                        key={idx} 
                        href="https://www.facebook.com/solarcontrol20/photos"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="
                            flex-shrink-0 w-[85vw] snap-center
                            md:w-auto md:flex-shrink-1
                            group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 block
                        "
                    >
                        <img 
                            src={src} 
                            alt={`Instalación de polarizado ${idx + 1}`} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-bold flex items-center gap-2">
                                Ver en Facebook <ExternalLink size={14}/>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
            
            <div className="mt-8 md:mt-12 flex justify-center">
                <a 
                    href="https://www.facebook.com/solarcontrol20/photos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-bold text-lg"
                >
                    <Facebook size={24} />
                    <span>Ver galería completa en Facebook</span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Gallery;