import type {
  Home,
  HomeResponse,
  Project,
  ProjectByIDResponse,
  ProjectVariables,
  ProjectsResponse,
} from '../types';
import { GET_HOME } from './cms-dato/graphql-query/home.ts';
import { performQuery } from './cms-dato/fetcher/fetcher.ts';
import {
  GET_PROJECTS,
  GET_PROJECT_BY_ID,
} from './cms-dato/graphql-query/projects.ts';

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
  return performQuery<ProjectByIDResponse, ProjectVariables>(
    GET_PROJECT_BY_ID,
    {
      id,
    }
  ).then((res) => res.data.project);
};
