import { Shield, Sun, Zap, Eye, Lock, Layers, Palette, Maximize } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  benefits: string[];
  applications?: string[];
  seoKeywords: string[];
  image: string;
}

export const SERVICES: Record<string, ServiceData> = {
  'nanoceramico': {
    id: 'nanoceramico',
    title: 'Polarizado Nanocerámico XPEL',
    icon: Sun,
    shortDesc: 'La solución más avanzada en control solar con tecnología certificada.',
    fullDesc: 'La instalación de polarizados cerámicos y nanocerámicos es la solución definitiva en control solar automotriz y arquitectónico en Reynosa. En JBM Tecnología Solar, utilizamos películas de tecnología nanocerámica certificada por XPEL y marcas premium, diseñadas meticulosamente para ofrecer el máximo rechazo de calor infrarrojo sin sacrificar la visibilidad nocturna ni bloquear señales electrónicas.',
    specs: [
      'Rechazo de calor infrarrojo (IR): hasta 96%',
      'Bloqueo de rayos UV: 99% (Protección de piel e interiores)',
      'Tecnología: Nanopartículas de cerámica multicapa',
      'Claridad: Alta definición óptica (Sin distorsión)',
      'Conectividad: No metálico (No interfiere con GPS, TAGs o Celular)',
      'Durabilidad: Garantía de por vida contra decoloración'
    ],
    benefits: [
      'Reducción drástica de la temperatura interior',
      'Protección contra cáncer de piel y envejecimiento prematuro',
      'Ahorro de combustible y eficiencia del A/C',
      'Apariencia elegante y tono negro profundo'
    ],
    seoKeywords: ['polarizados cerámicos', 'polarizado nanocerámico reynosa', 'control solar xpel', 'polarizado automotriz premium', 'reducción de calor auto'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.53.jpeg'
  },
  'antirrayas': {
    id: 'antirrayas',
    title: 'Polarizado Antirrayas de Alto Tráfico',
    icon: Layers,
    shortDesc: 'Durabilidad y resistencia superior para uso diario intensivo.',
    fullDesc: 'Nuestros polarizados antirrayas están ingenierilmente diseñados para ofrecer una resistencia mecánica superior al uso diario. Son la opción ideal para vehículos de flotilla, transporte de personal, Uber/Didi y aplicaciones comerciales donde los vidrios se bajan y suben constantemente.',
    specs: [
      'Capa protectora: Hard-Coat antiabrasión de alta densidad',
      'Resistencia: Soporta limpieza frecuente y fricción de empaques',
      'Adherencia: Pegamento de alta resistencia',
      'Espesor: Optimizado para durabilidad sin afectar elevadores'
    ],
    benefits: [
      'Vida útil extendida frente a polarizados convencionales',
      'Visibilidad limpia por más tiempo (menos rayones)',
      'Excelente relación costo-beneficio',
      'Ideal para flotillas y vehículos de trabajo'
    ],
    seoKeywords: ['polarizado antirrayas', 'polarizado resistente', 'polarizado para uber reynosa', 'polarizado flotillas', 'película duradera'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.44-1.jpg'
  },
  'inteligente': {
    id: 'inteligente',
    title: 'Polarizado Inteligente (Smart Film)',
    icon: Zap,
    shortDesc: 'Privacidad a demanda. De transparente a opaco con un clic.',
    fullDesc: 'La tecnología PDLC (Polymer Dispersed Liquid Crystal) transforma sus vidrios en una superficie inteligente. Los polarizados inteligentes permiten controlar la transparencia del vidrio mediante activación eléctrica, pasando de totalmente transparente a opaco (privacidad total) en milisegundos.',
    specs: [
      'Tecnología: PDLC (Cristal Líquido Disperso en Polímero)',
      'Activación: Interruptor, control remoto o domótica',
      'Tiempo de respuesta: < 0.1 segundos',
      'Bloqueo UV: 98% en modo opaco',
      'Voltaje: Bajo consumo energético'
    ],
    benefits: [
      'Privacidad instantánea sin cortinas ni persianas',
      'Funciona como pantalla de proyección en modo opaco',
      'Modernización inmediata de espacios corporativos',
      'Factor "Wow" para clientes y visitas'
    ],
    applications: ['Salas de juntas', 'Consultorios médicos', 'Oficinas ejecutivas', 'Divisiones de baño en hoteles'],
    seoKeywords: ['polarizado inteligente', 'smart film reynosa', 'vidrio inteligente', 'privacidad eléctrica', 'pdlc film mexico'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.43-2.jpeg'
  },
  'reflecta': {
    id: 'reflecta',
    title: 'Polarizado Reflecta (Espejo)',
    icon: Eye,
    shortDesc: 'Máxima privacidad diurna y rechazo de calor industrial.',
    fullDesc: 'Los polarizados de la línea Reflecta ofrecen la máxima privacidad visual durante el día gracias a su acabado espejo. Son altamente efectivos para rechazar la energía solar directa en edificios, oficinas y naves industriales, actuando como un escudo térmico.',
    specs: [
      'Rechazo de Energía Solar Total: hasta 79%',
      'Acabados: Plata, Humo-Reflectivo, Bronce, Azul',
      'Efecto: Espejo exterior (Privacidad unidireccional)',
      'Control de deslumbramiento: Excelente'
    ],
    benefits: [
      'Nadie te ve desde afuera durante el día',
      'Reducción masiva de calor en ventanales grandes',
      'Estética moderna y uniforme en fachadas',
      'Reducción de fatiga visual por exceso de luz'
    ],
    seoKeywords: ['polarizado espejo', 'polarizado reflecta', 'película plata', 'privacidad oficinas', 'control solar reflectivo'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.44-3.jpeg'
  },
  'seguridad': {
    id: 'seguridad',
    title: 'Películas de Seguridad Antiasalto',
    icon: Shield,
    shortDesc: 'Convierte tus vidrios en un escudo resistente a impactos.',
    fullDesc: 'Las películas de seguridad JBM refuerzan la estructura del vidrio, manteniéndolo unido en caso de impacto, accidente o intento de vandalismo (cristalazo). Es una capa invisible de protección vital para la seguridad de tu familia y bienes en Reynosa.',
    specs: [
      'Espesores disponibles: 4, 8, 12 milésimas de pulgada',
      'Resistencia: Hasta 400 lbs/pulgada de fuerza de ruptura',
      'Adhesivo: Sensible a la presión de alto impacto',
      'Certificaciones: Cumple normas de seguridad ANSI'
    ],
    benefits: [
      'Retrasa el ingreso de intrusos (Antiasalto)',
      'Evita lesiones por esquirlas de vidrio volando en choques',
      'Protección contra tormentas y objetos lanzados',
      'Tranquilidad al manejar en zonas de riesgo'
    ],
    seoKeywords: ['película de seguridad', 'polarizado antiasalto', 'blindaje ligero', 'seguridad automotriz reynosa', 'protección cristales'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.52.jpg'
  },
  'seguridad-ceramica': {
    id: 'seguridad-ceramica',
    title: 'Seguridad + Control Solar Cerámico',
    icon: Lock,
    shortDesc: 'Lo mejor de dos mundos: Protección física y térmica.',
    fullDesc: 'Para quienes no aceptan compromisos. Esta película híbrida combina la resistencia al impacto de una película de seguridad de alto espesor con las propiedades de rechazo de calor de la nanocerámica. Es el producto más completo del mercado.',
    specs: [
      'Tecnología: Híbrida (Seguridad multicapa + Cerámica)',
      'Rechazo IR: Superior al 80%',
      'Espesor: Grado de seguridad (Safety & Security)',
      'Visibilidad: Clara y sin distorsión'
    ],
    benefits: [
      'Vehículo fresco y seguro simultáneamente',
      'No necesitas instalar dos películas separadas',
      'Máxima protección para SUVs familiares y ejecutivos',
      'Inversión inteligente de largo plazo'
    ],
    seoKeywords: ['seguridad ceramica', 'película inteligente seguridad', 'polarizado alto desempeño', 'protección total auto'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/548976118_1388175596643365_3323515692048945738_n-2.jpg'
  },
  'tintex': {
    id: 'tintex',
    title: 'Películas Tintex (Control y Estética)',
    icon: Palette,
    shortDesc: 'Privacidad y estética clásica con buen desempeño.',
    fullDesc: 'Los polarizados Tintex son la opción clásica para quienes buscan privacidad inmediata, mejora estética y un control solar equilibrado. Ideal para igualar tonos de fábrica o dar un look deportivo al vehículo.',
    specs: [
      'Tonos disponibles: 5%, 20%, 35%, 50%',
      'Estabilidad de color: Tecnología "Color Stable"',
      'Privacidad: Alta (en tonos 5% y 20%)',
      'Protección UV: Básica a Media'
    ],
    benefits: [
      'Privacidad inmediata para los ocupantes',
      'Reduce el deslumbramiento del sol',
      'Mejora la estética del vehículo',
      'Costo accesible'
    ],
    seoKeywords: ['polarizado tintex', 'polarizado oscuro', 'polarizado económico reynosa', 'privacidad auto', 'tintado lunas'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.12.51.jpg'
  },
  'decorativa': {
    id: 'decorativa',
    title: 'Películas Decorativas y Esmeriladas',
    icon: Maximize,
    shortDesc: 'Diseño y privacidad para espacios arquitectónicos.',
    fullDesc: 'Transforma vidrios simples en elementos de diseño. Las películas decorativas y esmeriladas permiten separar ambientes visualmente sin perder la entrada de luz natural. Son esenciales en oficinas modernas y consultorios.',
    specs: [
      'Acabados: Esmerilado (Frost), Rayas, Cuadros, Diseños Custom',
      'Opacidad: Configurable según diseño',
      'Instalación: Interior',
      'Mantenimiento: Fácil limpieza'
    ],
    benefits: [
      'Privacidad visual sin oscurecer el ambiente',
      'Diseño corporativo y branding en vidrios',
      'Separación elegante de áreas de trabajo',
      'Alternativa económica al vidrio grabado con ácido'
    ],
    applications: ['Divisiones de oficina', 'Fachadas comerciales', 'Puertas de baño', 'Logotipos en vidrio'],
    seoKeywords: ['película esmerilada', 'vinil decorativo vidrio', 'privacidad oficinas', 'diseño interiores reynosa', 'película frost'],
    image: 'https://polarizados.site/wp-content/uploads/2026/01/WhatsApp-Image-2025-11-11-at-13.06.43-2.jpeg'
  }
};