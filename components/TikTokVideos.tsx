import React, { useRef } from 'react';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const TikTokVideos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = [
    "https://vt.tiktok.com/ZSa8aGr1N/",
    "https://vt.tiktok.com/ZSa8ab95k/",
    "https://vt.tiktok.com/ZSa8anSK2/",
    "https://vt.tiktok.com/ZSa8mhe6s/",
    "https://vt.tiktok.com/ZSa8mkotT/",
    "https://vt.tiktok.com/ZSa8mrnEs/",
    "https://vt.tiktok.com/ZSa8mArkJ/",
    "https://vt.tiktok.com/ZSa8mNuFt/",
    "https://vt.tiktok.com/ZSa8ujfXs/",
    "https://vt.tiktok.com/ZSa8muUhn/",
    "https://vt.tiktok.com/ZSa8u1uJf/",
    "https://vt.tiktok.com/ZSa8ujmHj/"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Approximate card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-xs font-bold tracking-wide uppercase mb-4 border border-pink-500/20">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                En Acción
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Resultados en Video
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Mira nuestras instalaciones y pruebas de calidad en TikTok. Transparencia total en cada trabajo.
            </p>
        </div>

        <div className="relative group">
            {/* Navigation Buttons */}
            <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm border border-zinc-800 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            
            <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm border border-zinc-800 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:flex"
                aria-label="Siguiente"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {videos.map((url, idx) => (
                    <a 
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-64 aspect-[9/16] relative snap-center rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group/card hover:border-zinc-700 transition-all hover:scale-[1.02] shadow-xl"
                    >
                        {/* Background Design since we don't have thumbnails */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00f2ea] to-[#ff0050] p-[2px] mb-6 group-hover/card:scale-110 transition-transform duration-500">
                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                    <Play size={24} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                            
                            <h3 className="text-white font-bold text-lg mb-2">Video #{idx + 1}</h3>
                            <p className="text-zinc-500 text-sm mb-6">Ver proceso de instalación y resultados</p>
                            
                            <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-4 py-2 rounded-full group-hover/card:bg-white/20 transition-colors">
                                Abrir TikTok <ExternalLink size={12} />
                            </span>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f2ea] to-[#ff0050]"></div>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokVideos;