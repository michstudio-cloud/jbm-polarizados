import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  logo?: string;
}