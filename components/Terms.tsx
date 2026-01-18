import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="pt-24 pb-20 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
            Términos y Condiciones de Uso
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">
            Última actualización: {currentDate}
          </p>

          <p>
            El presente documento establece los Términos y Condiciones de Uso que regulan el acceso y utilización del sitio web (en adelante, el “Sitio”), así como los servicios, contenidos y funcionalidades ofrecidos por Tecnología Solar (en adelante, “la Empresa”, “nosotros”).
          </p>
          <p>
            Al acceder, navegar o utilizar este Sitio, el usuario acepta plena y expresamente estos Términos y Condiciones. Si no está de acuerdo con ellos, deberá abstenerse de utilizar el Sitio.
          </p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Objeto del Sitio</h3>
          <p>El Sitio tiene como finalidad proporcionar información comercial, publicitaria y de contacto relacionada con los servicios de:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Polarizado automotriz</li>
            <li>Polarizado residencial, comercial e industrial</li>
            <li>Películas de control solar, seguridad, privacidad y protección UV</li>
            <li>Servicios relacionados con instalación y asesoría técnica</li>
          </ul>
          <p>La información publicada tiene carácter informativo y promocional, y no constituye una oferta contractual vinculante.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Uso del Sitio</h3>
          <p>El usuario se compromete a:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Utilizar el Sitio de forma lícita y conforme a la legislación aplicable</li>
            <li>No realizar actividades que dañen, sobrecarguen o interfieran con el funcionamiento del Sitio</li>
            <li>No utilizar el contenido con fines fraudulentos, ilegales o no autorizados</li>
          </ul>
          <p>La Empresa se reserva el derecho de suspender o restringir el acceso a cualquier usuario que incumpla estos Términos.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Información y Publicidad</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Los textos, imágenes, gráficos, precios, promociones y descripciones son meramente ilustrativos y referenciales.</li>
            <li>Los precios, promociones, disponibilidad y especificaciones técnicas pueden cambiar sin previo aviso.</li>
            <li>Las imágenes utilizadas pueden no representar el resultado final exacto del servicio.</li>
            <li>Ningún contenido del Sitio constituye garantía expresa o implícita, salvo que se establezca por escrito en un contrato firmado.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Resultados y Variabilidad del Servicio</h3>
          <p>El usuario reconoce y acepta que:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Los resultados del polarizado pueden variar según el tipo de vidrio, vehículo, edificio, condiciones climáticas, instalación y uso.</li>
            <li>Los niveles de rechazo de calor, protección UV, privacidad o seguridad dependen del producto seleccionado y su correcta instalación.</li>
            <li>La Empresa no garantiza resultados idénticos a ejemplos visuales o demostraciones.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">5. Cumplimiento Legal y Normativo</h3>
          <p>El usuario es responsable de verificar que el producto o servicio contratado cumpla con las leyes, reglamentos y normas locales, estatales o federales aplicables, incluyendo, sin limitarse a:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Normativa de tránsito y vialidad</li>
            <li>Reglamentos de polarizado automotriz</li>
            <li>Regulaciones municipales o estatales</li>
          </ul>
          <p>La Empresa no será responsable por sanciones, multas o consecuencias derivadas del uso de productos no permitidos por la legislación vigente.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">6. Garantías</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Las garantías, cuando existan, estarán sujetas exclusivamente a los términos del fabricante y/o al contrato de servicio firmado.</li>
            <li>La Empresa no otorga garantías adicionales más allá de las expresamente indicadas por escrito.</li>
            <li>El uso indebido, modificaciones no autorizadas o instalaciones realizadas por terceros pueden anular cualquier garantía.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">7. Propiedad Intelectual</h3>
          <p>Todos los contenidos del Sitio, incluyendo textos, imágenes, logotipos, diseños, videos, iconografía y código, son propiedad de la Empresa o se utilizan bajo licencia.</p>
          <p>Queda estrictamente prohibida su reproducción, distribución, modificación o uso comercial sin autorización previa y por escrito.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">8. Enlaces a Terceros</h3>
          <p>El Sitio puede contener enlaces a sitios web de terceros. La Empresa no controla ni se responsabiliza por:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>El contenido de dichos sitios</li>
            <li>Sus políticas de privacidad</li>
            <li>La disponibilidad o funcionamiento de los mismos</li>
          </ul>
          <p>El acceso a enlaces externos se realiza bajo responsabilidad del usuario.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">9. Limitación de Responsabilidad</h3>
          <p>La Empresa no será responsable por:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Daños directos o indirectos derivados del uso del Sitio</li>
            <li>Errores tipográficos, interrupciones del servicio o fallas técnicas</li>
            <li>Pérdida de información, virus o accesos no autorizados</li>
            <li>Decisiones tomadas por el usuario basadas en el contenido del Sitio</li>
          </ul>
          <p>El uso del Sitio se realiza bajo el propio riesgo del usuario.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">10. Protección de Datos</h3>
          <p>El tratamiento de los datos personales se rige por el Aviso de Privacidad, el cual forma parte integral de estos Términos y Condiciones.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">11. Modificaciones</h3>
          <p>La Empresa se reserva el derecho de modificar, actualizar o eliminar estos Términos y Condiciones en cualquier momento, sin previo aviso. Las modificaciones entrarán en vigor a partir de su publicación en el Sitio.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">12. Legislación Aplicable y Jurisdicción</h3>
          <p>Estos Términos y Condiciones se rigen por las leyes aplicables en México. Cualquier controversia será sometida a los tribunales competentes, renunciando las partes a cualquier otro fuero que pudiera corresponderles.</p>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">13. Aceptación</h3>
          <p>El uso continuado del Sitio implica la aceptación expresa de estos Términos y Condiciones en su totalidad.</p>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
            <a 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;