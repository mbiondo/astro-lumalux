import data from '../data/data.json';
import type { Project, Service } from '../types';

const getServices = async (): Promise<Service[]> => {
  return new Promise<Service[]>((resolve) => {
    resolve(data.services);
  });
};

const getServiceById = async (id: number): Promise<Service> => {
  return new Promise<Service>((resolve) => {
    const service = data.services.find(
      (service) => service.id === id
    ) as Service;
    resolve(service);
  });
};

const getProjects = async (): Promise<Project[]> => {
  return new Promise<Project[]>((resolve) => {
    const services = data.services;
    const projects = data.projects.map((project) => {
      return {
        ...project,
        service: services.find((service) => service.id === project.serviceId),
      };
    });
    resolve(projects);
  });
};

const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  return new Promise<Project | undefined>((resolve) => {
    let project = data.projects.find(
      (project) => project.slug === slug
    ) as Project;
    project.service = data.services.find(
      (service) => service.id === project?.serviceId
    );
    resolve(project);
  });
};

export { getProjects, getProjectBySlug, getServices, getServiceById };
