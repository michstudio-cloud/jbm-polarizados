import React from 'react';
import { Shield, Car, Building2, Sun, CheckCircle2, FileSearch, AlertCircle } from 'lucide-react';

interface SecurityFilmsProps {
  onOpenModal: () => void;
}

const SecurityFilms: React.FC<SecurityFilmsProps> = ({ onOpenModal }) => {
  return (
    <section id="seguridad" className="py-20 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-wide uppercase mb-4 border border-blue-200 dark:border-blue-800/50">
            <Shield size={14} className="fill-current" />
            Protección Integral
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
            Películas de Seguridad y Control Solar
            <span className="block text-xl md:text-2xl mt-2 text-orange-600 dark:text-orange-500 font-bold">Automotriz y Arquitectónica</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Además del polarizado tradicional, trabajamos con películas diseñadas específicamente para proteger vehículos, personas y espacios, especialmente ante el clima y entorno de Reynosa.
            Estas películas no solo reducen el calor, también refuerzan el vidrio y aumentan la seguridad.
          </p>
        </div>

        {/* Dual Grid: Auto vs Arch */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Automotive Card */}
          <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-900/50 transition-colors">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                <Car size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Seguridad Automotriz</h3>
                <p className="text-sm text-gray-500">Refuerzo de cristales y reducción de riesgos.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Shield size={16} className="text-orange-500" /> Beneficios principales:
              </h4>
              <ul className="space-y-3">
                {[
                  "Refuerzan el vidrio en caso de impacto",
                  "Ayudan a evitar que el cristal se fragmente",
                  "Mantienen los fragmentos unidos ante roturas",
                  "Aumentan la seguridad de pasajeros",
                  "Combinables con control solar"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wide">Ideales para:</h4>
              <div className="flex flex-wrap gap-2">
                {["Autos particulares", "SUVs y camionetas", "Flotillas", "Vehículos de trabajo"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-zinc-900 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural Card */}
          <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-900/50 transition-colors">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-orange-600 dark:text-orange-400">
                <Building2 size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Seguridad y Control Solar Arquitectónico</h3>
                <p className="text-sm text-gray-500">Para oficinas, comercios y naves industriales.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Sun size={16} className="text-orange-500" /> Beneficios principales:
              </h4>
              <ul className="space-y-3">
                {[
                  "Reducción significativa de calor en interiores",
                  "Protección contra rayos UV",
                  "Refuerzo del vidrio ante impactos",
                  "Menor riesgo por estallamiento de cristales",
                  "Mayor confort para empleados y clientes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wide">Aplicaciones comunes:</h4>
              <div className="flex flex-wrap gap-2">
                {["Oficinas", "Locales comerciales", "Escuelas", "Naves industriales", "Fachadas"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-zinc-900 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Info & CTA Section */}
        <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800">
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Recommendation Logic */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-bold">
                <FileSearch size={24} className="text-blue-600 dark:text-blue-400" />
                <h3>Recomendación profesional</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                No todas las películas funcionan igual en todos los casos. Por eso evaluamos:
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-4">
                {["Tipo de vidrio", "Exposición al sol", "Uso del espacio/vehículo", "Nivel de seguridad"].map((item, idx) => (
                   <li key={idx} className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> {item}
                   </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                Con esta información recomendamos la solución correcta, no la más oscura ni la más económica.
              </p>
            </div>

            {/* Pricing & CTA */}
            <div className="flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-white font-bold">
                  <AlertCircle size={20} className="text-orange-600 dark:text-orange-400" />
                  <h3>Importante sobre precios</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                  El costo varía según el tipo de película, espesor, nivel de protección, área a cubrir y aplicación (automotriz o arquitectónica). Es necesario revisar el vehículo o recibir medidas para una cotización exacta.
                </p>
              </div>
              
              <button
                onClick={onOpenModal}
                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-3 rounded-xl hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
              >
                Cotizar películas de seguridad
              </button>
            </div>

          </div>
        </div>

        {/* Key Message Banner */}
        <div className="mt-12 text-center">
            <div className="inline-block px-6 py-4 rounded-xl border border-orange-200 dark:border-orange-900/30 bg-orange-50 dark:bg-orange-900/10">
                <p className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                    "Más que polarizar, se trata de <span className="text-orange-600 dark:text-orange-500 underline decoration-2 underline-offset-4">proteger</span>."
                </p>
                <p className="text-sm text-gray-500 mt-2">Personas, vehículos y espacios frente al calor y los riesgos.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityFilms;