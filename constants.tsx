import { 
  ShieldCheck, 
  ThermometerSun, 
  Eye, 
  ThumbsUp, 
  Award, 
  Clock, 
  CarFront, 
  BadgeDollarSign,
  Sun
} from 'lucide-react';
import { Feature, PricingPlan, Brand } from './types';

export const WHATSAPP_LINK = "https://wa.me/521234567890?text=Hola,%20quisiera%20cotizar%20un%20polarizado%20para%20mi%20auto";

export const FEATURES_PROBLEM: Feature[] = [
  {
    title: "Reduce el calor real",
    description: "Tecnología diseñada para bloquear la energía solar térmica, no solo la luz.",
    icon: ThermometerSun
  },
  {
    title: "Protege el interior",
    description: "Evita que tableros y asientos se agrieten o decoloren por la radiación UV.",
    icon: ShieldCheck
  },
  {
    title: "Mejora el confort",
    description: "Maneja sin la sensación de ardor en la piel y reduce la fatiga visual.",
    icon: ThumbsUp
  },
  {
    title: "Eficiencia A/C",
    description: "Ayuda a que tu aire acondicionado enfríe más rápido y trabaje menos.",
    icon: Sun
  }
];

export const FEATURES_PRODUCT: string[] = [
  "Rechazo de calor de hasta 92%",
  "Bloqueo de rayos ultravioleta del 99%",
  "Alta visibilidad al manejar (HD)",
  "No interfiere con señal de celular, GPS o radio",
  "Material estable y de larga duración"
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Autos Chicos",
    price: "Desde $2,200 MXN",
    features: ["Vidrios laterales", "Vidrio trasero", "Garantía por escrito", "Instalación profesional"],
    isPremium: false
  },
  {
    title: "Paquete Completo",
    price: "Desde $3,500 MXN",
    features: ["Laterales + Trasero", "Parabrisas incluido", "Máxima protección", "Ahorro vs individual"],
    isPremium: true
  },
  {
    title: "Solo Parabrisas",
    price: "Desde $1,600 MXN",
    features: ["Polarizado inteligente", "Casi invisible", "Alto rechazo de calor", "Protección frontal"],
    isPremium: false
  }
];

export const BRANDS_AUTO: Brand[] = [
  { name: "Chirey" },
  { name: "Hyundai" },
  { name: "Toyota" },
  { name: "Nissan" },
  { name: "Changan" },
  { name: "Ford" }
];

export const BRANDS_FILM: Brand[] = [
  { name: "Solex" },
  { name: "XPEL" },
  { name: "3M" }
];
