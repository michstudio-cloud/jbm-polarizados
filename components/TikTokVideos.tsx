import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay slightly to prioritize UI thread
            setTimeout(() => {
                setIsVisible(true);
            }, 200);
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
          }
        });
      },
      {
        rootMargin: '200px', // Load before it comes into full view
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Check if the script is already added
      const scriptId = 'tiktok-embed-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script exists, force check for new embeds
        if ((window as any).tiktok?.embed?.load) {
            (window as any).tiktok.embed.load();
        }
      }
    }
  }, [isVisible]);

  return (
    <div 
        ref={containerRef}
        className="flex-shrink-0 w-[325px] min-h-[580px] snap-center bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 relative"
    >
        {!isVisible ? (
            // Skeleton Loading State
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 animate-pulse">
                <div className="w-16 h-16 rounded-full bg-zinc-800 mb-4"></div>
                <div className="w-3/4 h-4 bg-zinc-800 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-zinc-800 rounded"></div>
                <div className="absolute bottom-6 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                </div>
            </div>
        ) : (
            // Actual Embed
            <blockquote 
                className="tiktok-embed" 
                cite={url} 
                data-video-id={id} 
                style={{ maxWidth: '325px', minWidth: '325px', margin: 0 }}
            > 
                <section> 
                    <div className="flex items-center justify-center h-[580px] w-full">
                        <Loader2 className="animate-spin text-orange-500" />
                    </div>
                </section> 
            </blockquote>
        )}
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