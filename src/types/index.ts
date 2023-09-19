export interface Material {
  name: string;
  url: string;
  description: string;
  advantages: string[];
  disadvantage: string[];
}

export interface Project {
  serviceId: number;
  service?: Service;
  slug: string;
  title: string;
  description: string;
  images: Image[];
}

export interface Image {
  title: string;
  url: string;
}

export interface Service {
  name: string;
  icon: string;
  id: number;
  description: string;
  slug: string;
}
