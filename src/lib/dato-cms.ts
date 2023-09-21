import type {
  Home,
  HomeResponse,
  Project,
  ProjectVariables,
  ProjectsResponse,
  Service,
  ServiceVariables,
  ServicesResponse,
  ServiceByIdResponse,
  Image,
  ImagesResponse,
  ProjectByIdResponse,
  ImageVariables,
  ImageByIdResponse,
} from '../types';
import { GET_HOME } from './dato-cms/graphql-query/home.ts';
import { performQuery } from './dato-cms/fetcher/fetcher.ts';
import {
  GET_PROJECTS,
  GET_PROJECT_BY_ID,
} from './dato-cms/graphql-query/projects.ts';
import {
  GET_SERVICES,
  GET_SERVICE_BY_ID,
} from './dato-cms/graphql-query/services.ts';
import {
  GET_IMAGES,
  GET_IMAGE_BY_ID,
} from './dato-cms/graphql-query/images.ts';

export const getHome = async (): Promise<Home> => {
  return performQuery<HomeResponse, never>(GET_HOME).then(
    (res) => res.data.home
  );
};

export const getProjects = async (): Promise<Project[]> => {
  return performQuery<ProjectsResponse, never>(GET_PROJECTS).then(
    (res) => res.data.allProjects
  );
};

export const getProjectById = async (id: string): Promise<Project> => {
  return performQuery<ProjectByIdResponse, ProjectVariables>(
    GET_PROJECT_BY_ID,
    {
      id,
    }
  ).then((res) => res.data.project);
};

export const getServices = async (): Promise<Service[]> => {
  return performQuery<ServicesResponse, never>(GET_SERVICES).then(
    (res) => res.data.allServices
  );
};

export const getServiceById = async (id: string): Promise<Service> => {
  return performQuery<ServiceByIdResponse, ServiceVariables>(
    GET_SERVICE_BY_ID,
    {
      id,
    }
  ).then((res) => res.data.service);
};

export const getAllImages = async (): Promise<Image[]> => {
  return performQuery<ImagesResponse, never>(GET_IMAGES).then(
    (res) => res.data.allUploads
  );
};

export const getImageById = async (id: string): Promise<Image> => {
  return performQuery<ImageByIdResponse, ImageVariables>(GET_IMAGE_BY_ID, {
    id,
  }).then((res) => res.data.upload);
};
