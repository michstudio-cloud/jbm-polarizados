import React, { useRef, useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

// Video data extracted from the provided embeds
const TIKTOK_DATA = [
  { id: '7552701695441095954', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7552701695441095954' },
  { id: '7594697694078094599', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7594697694078094599' },
  { id: '7584652938250046727', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7584652938250046727' },
  { id: '7572019956620004626', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7572019956620004626' },
  { id: '7558130562163150088', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7558130562163150088' },
  { id: '7566105310008560904', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7566105310008560904' },
  { id: '7566446331221249288', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7566446331221249288' },
  { id: '7566449531177536786', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7566449531177536786' },
  { id: '7559784082155080978', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7559784082155080978' },
  { id: '7560856821670350088', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7560856821670350088' },
  { id: '7559051380179078418', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7559051380179078418' },
  { id: '7558702573025381650', url: 'https://www.tiktok.com/@jbm.tecnologiasolar/video/7558702573025381650' }
];

const TikTokEmbedItem: React.FC<{ id: string; url: string }> = ({ id, url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Check if the script is already added
      const scriptId = 'tiktok-embed-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script exists, we might need to tell it to check for new embeds
        // TikTok's embed.js usually observes the DOM, but sometimes needs a nudge if added late
        if ((window as any).tiktok?.embed?.load) {
            (window as any).tiktok.embed.load();
        }
      }
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div 
        onClick={() => setIsLoaded(true)}
        className="flex-shrink-0 w-[325px] h-[580px] relative snap-center rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group/card hover:border-zinc-700 transition-all cursor-pointer shadow-xl flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50"></div>
        
        <div className="relative z-10 flex flex-col items-center p-6 text-center">
             <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00f2ea] to-[#ff0050] p-[3px] mb-6 group-hover/card:scale-110 transition-transform duration-500 shadow-lg shadow-black/50">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Play size={32} className="text-white fill-white ml-2" />
                </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Ver Video</h3>
            <p className="text-zinc-500 text-sm">Cargar contenido de TikTok</p>
        </div>
        
        {/* TikTok decorative branding */}
        <div className="absolute bottom-6 flex gap-1">
             <div className="w-2 h-2 rounded-full bg-[#00f2ea] animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-[#ff0050] animate-pulse delay-75"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-[325px] snap-center bg-zinc-900 rounded-2xl overflow-hidden">
        <blockquote 
            className="tiktok-embed" 
            cite={url} 
            data-video-id={id} 
            style={{ maxWidth: '325px', minWidth: '325px' }}
        > 
            <section> 
                <a target="_blank" href={`https://www.tiktok.com/@jbm.tecnologiasolar?refer=embed`}>@jbm.tecnologiasolar</a> 
            </section> 
        </blockquote>
    </div>
  );
};

const TikTokVideos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // width + gap
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
                Mira nuestras instalaciones y pruebas de calidad en TikTok.
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
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 items-start"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {TIKTOK_DATA.map((video) => (
                    <TikTokEmbedItem key={video.id} id={video.id} url={video.url} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokVideos;