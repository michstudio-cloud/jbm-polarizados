import React from 'react';
import { SERVICES } from '../data/services';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img 
                  src="https://polarizados.site/wp-content/uploads/2026/01/jbm-logo.svg" 
                  alt="JBM Tecnología Solar" 
                  className="h-12 w-auto mb-6"
                />
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Expertos en control solar automotriz y arquitectónico en Reynosa. Instalación certificada de marcas líderes como XPEL y Solex.
                </p>
                <div className="text-sm text-gray-400">
                    <p>📍 Eje San Pedro 462, Reynosa, Tamps.</p>
                    <p>📞 899 255 7561</p>
                </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
                <h4 className="font-bold text-white text-lg mb-6">Navegación</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Inicio</a></li>
                    <li><a href="#precios" className="hover:text-orange-500 transition-colors">Precios y Paquetes</a></li>
                    <li><a href="#ubicacion" className="hover:text-orange-500 transition-colors">Ubicación y Horarios</a></li>
                    <li><a href="#galeria" className="hover:text-orange-500 transition-colors">Galería de Trabajos</a></li>
                    <li><a href="#/garantia" className="hover:text-orange-500 transition-colors">Garantía de Polarizado</a></li>
                    <li><a href="#/terminos" className="hover:text-orange-500 transition-colors">Términos y Condiciones</a></li>
                </ul>
            </div>

            {/* Services Links (Dynamic from Data) */}
            <div className="text-center md:text-left">
                <h4 className="font-bold text-white text-lg mb-6">Servicios Especializados</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                    {Object.values(SERVICES).map((service) => (
                        <li key={service.id}>
                            <a href={`#/servicios/${service.id}`} className="hover:text-orange-500 transition-colors">
                                {service.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Legal / Trust */}
            <div className="text-center md:text-left">
                 <h4 className="font-bold text-white text-lg mb-6">Calidad Garantizada</h4>
                 <p className="text-gray-500 text-sm mb-4">
                    Todos nuestros servicios cuentan con garantía por escrito en instalación y material.
                 </p>
                 <div className="flex gap-4 justify-center md:justify-start grayscale opacity-50">
                    {/* Placeholder for small brand logos/certifications */}
                    <div className="w-12 h-8 bg-zinc-800 rounded"></div>
                    <div className="w-12 h-8 bg-zinc-800 rounded"></div>
                    <div className="w-12 h-8 bg-zinc-800 rounded"></div>
                 </div>
            </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-700">
            <p>&copy; {new Date().getFullYear()} JBM Tecnología Solar. Todos los derechos reservados.</p>
            <div className="flex gap-4">
                <a href="#/terminos" className="hover:text-gray-500">Aviso de Privacidad</a>
                <a href="#/terminos" className="hover:text-gray-500">Términos de Uso</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;