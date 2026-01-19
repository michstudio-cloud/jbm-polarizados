import React, { useState } from 'react';
import { X, Building2 } from 'lucide-react';

interface BusinessQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessQuoteModal: React.FC<BusinessQuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    projectType: '',
    location: '',
    solutions: [] as string[],
    area: '',
    glassType: '',
    hasFilm: '',
    comments: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentSolutions = prev.solutions;
      if (checked) {
        return { ...prev, solutions: [...currentSolutions, value] };
      } else {
        return { ...prev, solutions: currentSolutions.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const solutionsText = formData.solutions.length > 0 ? formData.solutions.join(', ') : 'No especificado';
    const areaText = formData.area || 'No especificado';
    const glassText = formData.glassType || 'No especificado';
    const filmText = formData.hasFilm || 'No especificado';

    const message = `Hola, soy ${formData.contactName} de ${formData.companyName} y quiero cotizar un proyecto de películas para empresa.

Datos del proyecto:
• Tipo de proyecto: ${formData.projectType}
• Ubicación: ${formData.location}
• Área aproximada: ${areaText}

Tipo de solución requerida:
${solutionsText}

Tipo de vidrio:
${glassText}

¿El vidrio ya cuenta con película?
${filmText}

Contacto:
${formData.phone}

Comentarios adicionales:
${formData.comments || 'Ninguno'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528992557561?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Cotización Empresarial</h2>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Proyecto Arquitectónico</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          {/* Section 1: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-zinc-800 pb-2">Información de Contacto</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre de la empresa *</label>
                <input 
                  type="text" 
                  name="companyName" 
                  required 
                  placeholder="Nombre de la empresa"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre del contacto *</label>
                <input 
                  type="text" 
                  name="contactName" 
                  required 
                  placeholder="Persona responsable"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.contactName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono o WhatsApp *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="Ej. 899 000 0000"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Section 2: Project Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-zinc-800 pb-2">Detalles del Proyecto</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de proyecto *</label>
                <select 
                  name="projectType" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona...</option>
                  <option value="Oficina">Oficina</option>
                  <option value="Nave industrial">Nave industrial</option>
                  <option value="Maquiladora">Maquiladora</option>
                  <option value="Local comercial">Local comercial</option>
                  <option value="Escuela">Escuela</option>
                  <option value="Edificio corporativo">Edificio corporativo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ubicación del proyecto *</label>
                <input 
                  type="text" 
                  name="location" 
                  required 
                  placeholder="Zona o colonia en Reynosa"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tipo de solución requerida (Selecciona varias)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Control solar (reducción de calor)",
                  "Película de seguridad",
                  "Película de privacidad",
                  "Control de deslumbramiento",
                  "Combinación de soluciones"
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer transition-colors">
                    <input 
                      type="checkbox" 
                      value={option}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Área aproximada a cubrir *</label>
                <select 
                  name="area" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.area}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona...</option>
                  <option value="Menos de 20 m²">Menos de 20 m²</option>
                  <option value="20 a 50 m²">20 a 50 m²</option>
                  <option value="50 a 100 m²">50 a 100 m²</option>
                  <option value="Más de 100 m²">Más de 100 m²</option>
                  <option value="No lo sé (requiere visita técnica)">No lo sé (requiere visita técnica)</option>
                </select>
               </div>
               <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de vidrio</label>
                <select 
                  name="glassType" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.glassType}
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona...</option>
                  <option value="Vidrio claro">Vidrio claro</option>
                  <option value="Vidrio tintex / verde">Vidrio tintex / verde</option>
                  <option value="Vidrio templado">Vidrio templado</option>
                  <option value="Vidrio doble">Vidrio doble</option>
                  <option value="No lo sé">No lo sé</option>
                </select>
               </div>
            </div>

            {/* Existing Film */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">¿El vidrio ya cuenta con película?</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="hasFilm" 
                    value="Sí" 
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Sí</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="hasFilm" 
                    value="No" 
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">No</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="hasFilm" 
                    value="No estoy seguro" 
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={handleInputChange}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">No estoy seguro</span>
                </label>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Comentarios adicionales</label>
            <textarea 
              name="comments"
              placeholder="Horarios, urgencia, normas internas, accesos, etc."
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              value={formData.comments}
              onChange={handleInputChange}
            />
          </div>

          {/* Submit */}
          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-gray-200 font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            <Building2 size={20} />
            Cotizar proyecto empresarial
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-2">
            La cotización final puede requerir evaluación o visita técnica.
          </p>

        </form>
      </div>
    </div>
  );
};

export default BusinessQuoteModal;