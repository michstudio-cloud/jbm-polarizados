import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    unitType: '',
    hasTint: '',
    areas: [] as string[],
    filmType: '',
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
      const currentAreas = prev.areas;
      if (checked) {
        return { ...prev, areas: [...currentAreas, value] };
      } else {
        return { ...prev, areas: currentAreas.filter(area => area !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const areasText = formData.areas.length > 0 ? formData.areas.join(', ') : 'No especificado';
    const filmText = formData.filmType || 'No especificado';

    const message = `Hola, soy ${formData.name} y quiero cotizar ${filmText} para mi vehículo.

Datos del vehículo:
• Marca: ${formData.brand}
• Modelo: ${formData.model}
• Año: ${formData.year}
• Tipo de unidad: ${formData.unitType}

¿El vehículo ya tiene polarizado?
${formData.hasTint}

Deseo polarizar:
${areasText}

Tipo de polarizado / marca:
${filmText}

Comentarios adicionales:
${formData.comments || 'Ninguno'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528992557561?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white">Cotizar Polarizado</h2>
            <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Automotriz</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre *</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Tu nombre"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Vehículo Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Marca *</label>
              <select 
                name="brand" 
                required 
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                value={formData.brand}
                onChange={handleInputChange}
              >
                <option value="">Selecciona...</option>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Nissan</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Kia">Kia</option>
                <option value="Mazda">Mazda</option>
                <option value="Honda">Honda</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Chirey">Chirey</option>
                <option value="Changan">Changan</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Modelo *</label>
              <input 
                type="text" 
                name="model" 
                required 
                placeholder="Ej. Corolla"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                value={formData.model}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Año *</label>
              <input 
                type="number" 
                name="year" 
                required 
                placeholder="Ej. 2024"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                value={formData.year}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de unidad *</label>
              <select 
                name="unitType" 
                required 
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                value={formData.unitType}
                onChange={handleInputChange}
              >
                <option value="">Selecciona...</option>
                <option value="Sedán">Sedán</option>
                <option value="SUV">SUV</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Pickup">Pickup</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          {/* Estado actual */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">¿El vehículo ya tiene polarizado? *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="hasTint" 
                  value="Sí, ya tiene polarizado" 
                  required
                  className="text-orange-600 focus:ring-orange-500"
                  onChange={handleInputChange}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">Sí, ya tiene polarizado</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="hasTint" 
                  value="No, sería instalación por primera vez" 
                  required
                  className="text-orange-600 focus:ring-orange-500"
                  onChange={handleInputChange}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">No, sería instalación por primera vez</span>
              </label>
            </div>
          </div>

          {/* Áreas a polarizar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Deseo polarizar (Selecciona varias) *</label>
            <div className="space-y-2">
              {[
                "Dos puertas delanteras",
                "Solo parabrisas completo",
                "Todos los vidrios laterales y vidrio trasero",
                "Todos los vidrios laterales, trasero y parabrisas"
              ].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    value={option}
                    className="text-orange-600 rounded focus:ring-orange-500"
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Marca / Tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de polarizado / marca *</label>
            <select 
              name="filmType" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={formData.filmType}
              onChange={handleInputChange}
            >
              <option value="">Selecciona...</option>
              <option value="Polarizado inteligente / nanocerámico – Solex">Polarizado inteligente / nanocerámico – Solex</option>
              <option value="Polarizado premium – XPEL">Polarizado premium – XPEL</option>
              <option value="Polarizado premium – 3M">Polarizado premium – 3M</option>
              <option value="Película de seguridad">Película de seguridad</option>
              <option value="No estoy seguro (quiero recomendación)">No estoy seguro (quiero recomendación)</option>
            </select>
          </div>

          {/* Comentarios */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Comentarios adicionales</label>
            <textarea 
              name="comments"
              placeholder="Uso diario, mucho sol, carretera, flotilla, etc."
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
              value={formData.comments}
              onChange={handleInputChange}
            />
          </div>

          {/* Submit */}
          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            <MessageCircle size={20} />
            Cotizar por WhatsApp
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-2">
            La cotización final se confirma según tu vehículo y el material recomendado.
          </p>

        </form>
      </div>
    </div>
  );
};

export default QuoteModal;