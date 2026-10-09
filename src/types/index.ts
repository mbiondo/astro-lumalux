export interface CompanyInfo {
  name: string;
  tagline: string;
  since?: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  location?: string;
  coverage: string;
  hours: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Home {
  content: string;
  title: string;
  badge?: string;
  headline?: string;
  stats?: StatItem[];
  image: Image;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
}

export interface Image {
  height: number;
  format: string;
  id: string;
  title?: string;
  size: number;
  width: number;
  url: string;
  responsiveImage: ResponsiveImage;
}

export interface ResponsiveImage {
  src: string;
  title: null;
  width: number;
  height: number;
}

export interface GalleryItem {
  id: string;
  category: 'corredizos' | 'fijos' | 'cerramientos' | 'pergolas' | string;
  categoryLabel: string;
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  location?: string;
  category?: string;
  images: Image[];
}

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  content: string;
  features?: string[];
  image: Image;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SiteData {
  company: CompanyInfo;
  home: Home;
  services: Service[];
  projects: Project[];
  process: ProcessStep[];
  faq: FaqItem[];
}
