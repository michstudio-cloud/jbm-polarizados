import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
                    JBM Tecnología Solar
                </h2>
                <p className="text-gray-500 text-sm max-w-md">
                    Polarizado recomendado correctamente, instalado profesionalmente y diseñado para el calor de Reynosa.
                </p>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-orange-500 transition-colors">Inicio</a>
                <a href="#precios" className="hover:text-orange-500 transition-colors">Precios</a>
                <a href="#ubicacion" className="hover:text-orange-500 transition-colors">Ubicación</a>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-gray-700">
            <p>&copy; {new Date().getFullYear()} JBM Tecnología Solar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
