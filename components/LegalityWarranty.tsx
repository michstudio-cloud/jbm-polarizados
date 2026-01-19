import React from 'react';
import { BadgeCheck, ScrollText, AlertTriangle } from 'lucide-react';

interface LegalityWarrantyProps {
  onOpenModal: () => void;
}

const LegalityWarranty: React.FC<LegalityWarrantyProps> = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Legalidad y Garantía
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
                La diferencia entre un buen trabajo y un problema futuro está en la recomendación y la instalación.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                    <BadgeCheck className="text-green-500" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Garantía por Escrito</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Instalación conforme a normativa, limpia y precisa. Si hay un problema de material o instalación, respondemos.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Contra decoloración prematura
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Contra burbujas por instalación
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Respaldo real en Reynosa
                    </li>
                </ul>
                <div className="mt-6 relative z-10">
                    <a href="#/garantia" className="text-sm font-bold text-gray-900 dark:text-white border-b-2 border-green-500 hover:text-green-600 transition-colors">
                        Ver detalles de garantía
                    </a>
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ScrollText size={100} />
                </div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <AlertTriangle className="text-orange-500" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Garantía vs Multas</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 relative z-10">
                    La garantía por temas de multa aplica únicamente cuando:
                </p>
                <div className="space-y-3 relative z-10">
                     <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800/30">
                        <p className="text-sm font-semibold text-orange-800 dark:text-orange-200">
                            1. Se instala polarizado inteligente
                        </p>
                     </div>
                     <div className="p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800/30">
                        <p className="text-sm font-semibold text-orange-800 dark:text-orange-200">
                            2. Se utilizan los tonos recomendados
                        </p>
                     </div>
                </div>
                <div className="mt-6 relative z-10">
                    <button onClick={onOpenModal} className="text-sm font-bold text-gray-900 dark:text-white border-b-2 border-orange-500 hover:text-orange-600 transition-colors">
                        Instalar con respaldo legal
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LegalityWarranty;