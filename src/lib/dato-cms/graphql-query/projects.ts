export const GET_PROJECTS = `{
  allProjects {
    content
    description
    id
    title
    images {
      id
      alt
      url
      title
      width
      height
      responsiveImage {
        alt
        height
        src
        title
        width
      }
    }
  }
}`;

export const GET_PROJECT_BY_ID = `query ($id: ItemId!) {
  project(filter: {id: {eq: $id}}) {
    id
    title
    description
    content
    images {
      id
      height
      width
      title
      url
      responsiveImage {
        alt
        title
        src
        height
        width
      }
    }
  }
}`;
