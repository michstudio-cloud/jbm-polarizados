import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿El polarizado que instalan es legal?",
      answer: (
        <>
          <p className="mb-2"><strong>✅ Sí.</strong> Usamos polarizado que cumple con la normativa mexicana, permitiendo una visibilidad del 70% o más, tal como exige la ley.</p>
          <p>Conduce tranquilo y evita multas.</p>
        </>
      )
    },
    {
      question: "¿Qué beneficios ofrece su polarizado?",
      answer: (
        <ul className="space-y-2 list-none">
          <li>🔥 Reduce el calor interior hasta 15 °C</li>
          <li>🌞 Bloquea más del 99% de los rayos UV</li>
          <li>👀 Mejora visibilidad sin oscurecer en exceso</li>
          <li>🚓 Cumple la ley y brinda privacidad</li>
          <li>✨ Protege el interior del auto y mejora su estética</li>
        </ul>
      )
    },
    {
      question: "¿En cuánto tiempo se instala?",
      answer: (
        <>
          <p className="mb-2"><strong>⏱ La instalación profesional toma entre 1 y 2 horas</strong>, dependiendo del vehículo.</p>
          <p>Podemos agendar tu cita el mismo día, según disponibilidad.</p>
        </>
      )
    },
    {
      question: "¿Cuánto cuesta el servicio?",
      answer: (
        <>
          <p className="mb-3">💰 El precio depende del modelo de tu auto y el tipo de película que elijas.</p>
          <p className="mb-3">Cotizamos gratis por WhatsApp en minutos.</p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline"
          >
            <MessageCircle size={18} />
            Pedir cotización aquí
          </a>
        </>
      )
    },
    {
      question: "¿Cuánto dura el polarizado?",
      answer: (
        <p>🛡 Usamos películas de alta calidad como XPEL, con <strong>duración de 5 a 10 años</strong>, según el uso. Incluye garantía por escrito.</p>
      )
    },
    {
      question: "¿Puedo agendar por WhatsApp?",
      answer: (
        <p>📲 <strong>¡Sí!</strong> Solo mándanos mensaje y te respondemos en minutos. Agendas rápido, sin llamadas ni complicaciones.</p>
      )
    },
    {
      question: "¿Qué pasa si no me gusta el resultado?",
      answer: (
        <p>😌 <strong>Garantizamos tu satisfacción.</strong> Si algo no queda perfecto, lo corregimos sin costo. Tu inversión está protegida y respaldada.</p>
      )
    },
    {
      question: "¿Pueden instalar el polarizado a domicilio?",
      answer: (
        <>
          <p className="mb-2">🚗 Sí, ofrecemos instalación a domicilio en Reynosa con condiciones:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Sujeto a disponibilidad</li>
            <li>Necesitamos un lugar techado, limpio y seguro</li>
            <li>Aplica principalmente para autos particulares</li>
          </ul>
          <p>Contáctanos por WhatsApp y te confirmamos si tu ubicación aplica.</p>
        </>
      )
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer: (
        <p>💳 Aceptamos tarjeta de crédito y débito, transferencia bancaria y también efectivo. Te damos total flexibilidad para tu comodidad.</p>
      )
    },
    {
      question: "¿Debo llevar el auto limpio para la instalación?",
      answer: (
        <>
          <p className="mb-2">🧼 <strong>Sí, lo ideal es traer el auto lavado y con vidrios limpios.</strong></p>
          <p>Si no está limpio, necesitaremos hacerlo nosotros y la instalación tomará más tiempo. Esto garantiza un acabado impecable sin imperfecciones.</p>
        </>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-orange-600 dark:text-orange-500">
            <HelpCircle size={24} />
            <span className="font-bold uppercase tracking-wider text-sm">Resuelve tus dudas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Todo lo que necesitas saber antes de agendar tu cita.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden transition-all duration-200 hover:border-orange-200 dark:hover:border-orange-900/50"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-orange-600 dark:text-orange-500' : 'text-gray-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-orange-600' : 'text-gray-400'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-zinc-800 mt-2">
                  <div className="pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;