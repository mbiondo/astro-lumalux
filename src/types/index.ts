export interface HomeResponse {
  data: HomeData;
}

export interface HomeData {
  home: Home;
}

export interface Home {
  content: string;
  title: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  image: Image;
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

export interface ProjectByIDResponse {
  data: ProjectData;
}

export interface ProjectsResponse {
  data: ProjectsData;
}

export interface ProjectData {
  project: Project;
}

export interface ProjectsData {
  allProjects: Project[];
}

export interface Project {
  content: string;
  description: string;
  id: string;
  title: string;
  images: Image[];
}

export interface ProjectVariables {
  id: string;
}
