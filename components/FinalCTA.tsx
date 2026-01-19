import React from 'react';
import { ShieldCheck, CreditCard, Flame, Sun, Receipt, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-24 md:py-32 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://polarizados.site/wp-content/uploads/2026/01/63d6cd8e3c6309595240d4495839b42f.jpg" 
          alt="Protección profesional para tu auto" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
            <Flame size={14} className="fill-current" />
            Inversión Segura
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
          ¿Listo para proteger tu inversión?
        </h2>
        <p className="text-xl text-orange-500 mb-8 tracking-wide">
            Protege tu unidad con un polarizado de calidad Premium
        </p>
        
        {/* High Conversion Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-12 text-left shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-5">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500 mt-1">
                            <Flame size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-lg leading-tight uppercase">Alto Rechazo de Calor</h4>
                            <p className="text-gray-300 text-sm mt-1">Materiales legales y de máxima eficiencia térmica.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-500/20 rounded-lg text-green-500 mt-1">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-lg leading-tight uppercase">Garantía hasta 8 años</h4>
                            <p className="text-gray-300 text-sm mt-1">Por escrito en instalación y contra decoloración.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500 mt-1">
                            <Sun size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-lg leading-tight uppercase">Varios Tonos</h4>
                            <p className="text-gray-300 text-sm mt-1">Manejamos oscuridad permitida y privacidad total.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 md:border-l md:border-white/10 md:pl-8">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-lg leading-tight uppercase">Pagos con Tarjeta</h4>
                            <p className="text-gray-300 text-sm mt-1">Aceptamos todas las tarjetas de crédito y débito.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1">
                            <Receipt size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-lg leading-tight uppercase">Facturación 8% IVA</h4>
                            <p className="text-gray-300 text-sm mt-1">Precios más IVA. Facturamos al momento.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400 mt-1">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-black text-lg leading-tight uppercase">100% Legal</h4>
                            <p className="text-gray-300 text-sm mt-1">Evita multas con material certificado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button
            onClick={onOpenModal}
            className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-xl font-black py-4 px-12 rounded-xl shadow-2xl shadow-orange-900/50 transition-all transform hover:scale-105 hover:-translate-y-1 uppercase tracking-wider"
        >
            Cotizar por WhatsApp
        </button>
        
      </div>
    </section>
  );
};

export default FinalCTA;