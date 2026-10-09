import type {
  Home,
  Project,
  Service,
  Image,
  CompanyInfo,
  ProcessStep,
  FaqItem,
  GalleryItem,
} from '../types';
import siteData from '../data/site-data.json';

export const getGallery = async (): Promise<GalleryItem[]> => {
  return (siteData.gallery as GalleryItem[]) || [];
};

export const getCompany = async (): Promise<CompanyInfo> => {
  return siteData.company as CompanyInfo;
};

export const getHome = async (): Promise<Home> => {
  return siteData.home as unknown as Home;
};

export const getProjects = async (): Promise<Project[]> => {
  return (siteData.projects as unknown as Project[]) || [];
};

export const getProjectById = async (id: string): Promise<Project> => {
  const projects = await getProjects();
  const found = projects.find((p) => p.id === id);
  return (found || projects[0]) as Project;
};

export const getServices = async (): Promise<Service[]> => {
  return (siteData.services as unknown as Service[]) || [];
};

export const getServiceById = async (id: string): Promise<Service> => {
  const services = await getServices();
  const found = services.find((s) => s.id === id);
  return (found || services[0]) as Service;
};

export const getProcess = async (): Promise<ProcessStep[]> => {
  return siteData.process as ProcessStep[];
};

export const getFaq = async (): Promise<FaqItem[]> => {
  return siteData.faq as FaqItem[];
};

export const getAllImages = async (): Promise<Image[]> => {
  const images: Image[] = [];
  if (siteData.home?.image) {
    images.push(siteData.home.image as unknown as Image);
  }
  for (const s of siteData.services) {
    if (s.image) {
      images.push(s.image as unknown as Image);
    }
  }
  for (const p of siteData.projects) {
    if (p.images) {
      images.push(...(p.images as unknown as Image[]));
    }
  }
  return images;
};

export const getImageById = async (id: string): Promise<Image> => {
  const all = await getAllImages();
  const found = all.find((img) => img.id === id);
  return (found || all[0]) as Image;
};
