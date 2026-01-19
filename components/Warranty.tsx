import React, { useEffect } from 'react';
import { ShieldCheck, AlertTriangle, Droplets, Clock, FileText, CheckCircle2, XCircle, Sun } from 'lucide-react';

const Warranty: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-zinc-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold tracking-wide uppercase mb-4 border border-green-200 dark:border-green-800/50">
            <ShieldCheck size={14} className="fill-current" />
            Respaldo Profesional
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Garantía de Polarizado
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            En JBM Tecnología Solar garantizamos el correcto funcionamiento del polarizado instalado, conforme a los términos y años especificados en la nota de venta, contados a partir de la fecha de instalación.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="space-y-12">

          {/* Intro Section */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Todos nuestros servicios se realizan con materiales certificados y procesos profesionales, y están respaldados tanto por nuestra garantía de instalación como por la garantía del fabricante <strong>XPEL</strong>, cuando el producto aplicado corresponde a dicha marca.
            </p>
          </div>

          {/* XPEL Warranty */}
          <div className="bg-zinc-900 text-white rounded-2xl p-8 md:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
               <ShieldCheck size={200} />
            </div>
            
            <div className="relative z-10">
                <h2 className="text-2xl font-black text-yellow-500 mb-6 flex items-center gap-3">
                   <ShieldCheck size={28} /> Garantía del fabricante XPEL
                </h2>
                <p className="text-gray-300 mb-6">
                    Las películas XPEL cuentan con una garantía limitada del fabricante, la cual respalda el desempeño del material bajo condiciones normales de uso.
                </p>

                <h3 className="font-bold text-lg mb-4 text-white border-b border-zinc-700 pb-2">Defectos de fabricación cubiertos:</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                    {[
                        "Decoloración", 
                        "Craquelado", 
                        "Desprendimiento del adhesivo", 
                        "Fallas estructurales del material",
                        "Pérdida prematura de desempeño óptico o térmico"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle2 className="text-yellow-500 flex-shrink-0" size={16} />
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700">
                    <h3 className="font-bold text-sm text-yellow-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                        📌 Condiciones XPEL
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Aplica únicamente cuando el producto ha sido instalado por un instalador certificado XPEL.</li>
                        <li>• La cobertura y duración dependen del tipo de película instalada (automotriz o arquitectónica).</li>
                        <li>• La garantía del fabricante cubre exclusivamente el material, conforme a las políticas vigentes de XPEL.</li>
                        <li>• No cubre daños por uso indebido, accidentes, vandalismo o instalación realizada por terceros.</li>
                    </ul>
                </div>
            </div>
          </div>

          {/* JBM Coverage */}
          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={24} />
                    Cobertura JBM
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Nuestra garantía cubre defectos de instalación o fabricación, incluyendo:
                </p>
                <ul className="space-y-2 mb-6">
                    {["Aparición de burbujas", "Desprendimiento de la película", "Cambio de color", "Decoloración atribuible al material"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg text-xs text-green-800 dark:text-green-300 border border-green-100 dark:border-green-800/30">
                    <strong>🔧 Nota:</strong> El reemplazo será sin costo si la falla es del material/instalación. Se requiere reportar en los primeros 20 días y presentar nota de venta.
                </div>
             </div>

             <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <XCircle className="text-red-500" size={24} />
                    Exclusiones
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    La garantía no será válida en los siguientes casos:
                </p>
                <ul className="space-y-2 mb-6">
                    {[
                        "Rasgaduras, cortes o ralladuras",
                        "Golpes, impactos o accidentes",
                        "Uso de productos abrasivos o con amoniaco",
                        "Manchas por químicos o agentes agresivos",
                        "Manipulación indebida del polarizado",
                        "Instalaciones/reparaciones por terceros"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="text-xs text-gray-400 italic text-center">
                    ❗ La garantía es personal y no transferible.
                </div>
             </div>
          </div>

          {/* Care Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Droplets className="text-blue-500" size={28} />
                Cuidados y Mantenimiento
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">Para mantener vigente la garantía:</h4>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-red-500">NO</span>
                            Lavar el vehículo durante los primeros 3 a 5 días.
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-red-500">NO</span>
                            Bajar las ventanas durante los primeros 3 a 5 días.
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-green-500">SÍ</span>
                            Limpiar cristales interiores solo con productos sin amoniaco.
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-green-500">SÍ</span>
                            Dejar el vehículo al sol para facilitar el secado.
                        </li>
                        <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-orange-500">OJO</span>
                            No intentar retirar burbujas de aire/agua; contáctenos.
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                        <Clock size={16} /> Tiempos de secado estimado
                    </h4>
                    <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-blue-100 dark:border-blue-800/20 shadow-sm space-y-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Polarizados estándar</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">15 a 20 días</p>
                        </div>
                        <div className="border-t border-gray-100 dark:border-zinc-800 pt-3">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Películas de seguridad</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">20 a 30 días</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Technical Info & Duration */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-orange-500" />
                        Duración de la garantía
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        La duración dependerá del material instalado y se especificará en la nota de venta:
                    </p>
                    <div className="text-2xl font-black text-gray-900 dark:text-white">
                        1 a 10 años
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Según el producto contratado y la cobertura XPEL.</p>
                </div>

                <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Sun size={20} className="text-orange-500" />
                        Códigos de Materiales
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["SM05", "SM20", "SM35", "SM50", "CR05", "CR20", "CR35", "CR50", "PSC35", "PS05", "PS20", "PS35", "PS50", "UL50", "UL60", "SP70V", "SP70A", "SIL05", "SIL15", "AN05", "AN20", "AN35", "AN50"].map((code, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded text-xs font-mono text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700">
                                {code}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Otros materiales disponibles bajo cotización.</p>
                </div>
            </div>
          </div>

          {/* Legal Note */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-zinc-800 pt-8">
            <p>
                <strong className="block mb-1">🔐 Nota legal</strong>
                La garantía del fabricante XPEL se rige por sus términos y condiciones oficiales vigentes al momento de la instalación. En caso de discrepancia, prevalecerán las políticas del fabricante.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <a 
              href="/"
              className="inline-flex items-center text-orange-600 font-bold hover:underline"
            >
              ← Volver al inicio
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Warranty;