import React from 'react';
import { Star, CheckCircle2, ArrowUpRight, MoveRight } from 'lucide-react';

const Reviews: React.FC = () => {
  const GOOGLE_REVIEWS_LINK = "https://share.google/vwRGOss1PbFTi2Vz5"; 

  const reviews = [
    {
      name: "Roberto Cantú",
      role: "Propietario Verificado",
      car: "Ford Lobo 2023",
      date: "Hace 2 semanas",
      text: "La verdad tenía dudas si el nanocerámico valía la pena por el precio, pero con el calorón de Reynosa se nota demasiado la diferencia. El aire enfría mucho más rápido. Muy buen trabajo de instalación, sin burbujas ni detalles.",
      stars: 5
    },
    {
      name: "Mariana Treviño",
      role: "Propietario Verificado",
      car: "Mazda CX-30",
      date: "Hace 1 mes",
      text: "Me encantó que me explicaran con el medidor digital cuánto calor rechaza cada tono. Puse el tono legal en los vidrios de adelante y oscuro atrás para mis hijos. Se ve súper elegante y me siento más segura.",
      stars: 5
    },
    {
      name: "Ing. David Salinas",
      role: "Cliente Corporativo",
      car: "Flotilla Nissan",
      date: "Hace 3 meses",
      text: "Llevamos 3 unidades de la empresa para polarizado de seguridad. Cumplieron con el tiempo de entrega y la facturación fue al momento. Es difícil encontrar proveedores serios aquí, ellos sí lo son.",
      stars: 5
    },
    {
      name: "Alejandro G.",
      role: "Local Guide de Google",
      car: "Honda Civic",
      date: "Hace 1 mes",
      text: "Excelente servicio. Fui por recomendación y no fallaron. El material XPEL se siente de mucha calidad, nada que ver con el que ponen en la calle. Vale cada peso.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900 overflow-hidden">
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
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Summary & CTA (Sticky feel) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Opiniones Reales</span>
                </div>
                
                <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                    La confianza se gana con <span className="text-orange-600 dark:text-orange-500">resultados.</span>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                    No solo instalamos polarizado, mejoramos tu experiencia de manejo diaria. Nuestros clientes en Reynosa lo confirman.
                </p>

                <div className="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 mb-8">
                    <div className="flex items-end gap-3 mb-2">
                        <span className="text-6xl font-black text-gray-900 dark:text-white leading-none">4.2</span>
                        <div className="mb-2">
                            <div className="flex text-yellow-400 gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={20} 
                                        fill={i < 4 ? "currentColor" : "none"} 
                                        className={i >= 4 ? "text-gray-300 dark:text-gray-600" : ""}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-500 font-medium ml-1">Promedio General</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                         <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Basado en reseñas de Google Maps</span>
                    </div>
                </div>

                <a 
                    href={GOOGLE_REVIEWS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-gray-900 dark:text-white font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition-colors"
                >
                    Leer todas las opiniones en Google
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>

            {/* Right Column: Reviews Cards */}
            <div className="lg:col-span-8">
                {/* Mobile Swipe Hint */}
                <div className="md:hidden flex items-center gap-2 mb-4 text-xs text-gray-400 animate-pulse px-1">
                    <span>Desliza para ver más</span>
                    <MoveRight size={16} />
                </div>

                <div className="flex overflow-x-auto pb-8 gap-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-visible">
                    {reviews.map((review, idx) => (
                        <div 
                            key={idx} 
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300 h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-lg font-bold text-gray-600 dark:text-gray-300">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{review.name}</h4>
                                        <div className="flex items-center gap-1 mt-1">
                                            <CheckCircle2 size={12} className="text-green-500" />
                                            <span className="text-xs text-gray-500">{review.role}</span>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-5 h-5 opacity-40 grayscale" />
                            </div>

                            <div className="flex text-yellow-400 gap-0.5 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                "{review.text}"
                            </p>

                            <div className="pt-4 border-t border-gray-50 dark:border-zinc-800/50 flex justify-between items-center mt-auto">
                                <span className="text-xs font-medium text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-900/10 px-2 py-1 rounded">
                                    {review.car}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;