import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const Reviews: React.FC = () => {
  // El enlace proporcionado por el usuario
  const GOOGLE_REVIEWS_LINK = "https://share.google/vwRGOss1PbFTi2Vz5"; 

  const reviews = [
    {
      name: "Cliente Satisfecho",
      date: "Hace 1 mes",
      text: "Excelente servicio y atención. Me explicaron muy bien los tipos de polarizado y cuál me convenía más para el calor de aquí. El trabajo quedó impecable.",
      stars: 5
    },
    {
      name: "Usuario Google",
      date: "Hace 2 meses",
      text: "Muy recomendados. La instalación fue rápida y limpia. Se nota mucho la diferencia de temperatura en el auto. Vale la pena la inversión.",
      stars: 5
    },
    {
      name: "Cliente Local",
      date: "Hace 3 meses",
      text: "Profesionalismo total. Cumplieron con el horario de la cita y me entregaron el carro a tiempo. La película se ve de muy buena calidad.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-2 rounded-full">
                <Star size={20} fill="currentColor" />
             </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-300">
             <span>4.9</span>
             <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" />
                ))}
             </div>
             <span className="text-sm font-normal text-gray-500 dark:text-gray-500 ml-2">en Google Maps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-lg">
                    <Quote className="absolute top-6 right-6 text-gray-200 dark:text-zinc-800 rotate-180" size={48} />
                    
                    <div className="flex text-yellow-400 mb-4 relative z-10">
                        {[...Array(review.stars)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10 italic">
                        "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</p>
                            <p className="text-xs text-gray-400">{review.date}</p>
                        </div>
                        <div className="ml-auto">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center">
            <a 
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline text-lg group"
            >
                Ver todas las opiniones en Google
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-400 mt-2">
                Tu opinión nos ayuda a seguir mejorando.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Reviews;