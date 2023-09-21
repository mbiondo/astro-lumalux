export const GET_SERVICES = `
{
  allServices {
    id
    description
    content
    title
    image {
      url
      height
      width
      responsiveImage {
        alt
        height
        src
        width
      }
      alt
    }
  }
}`;

export const GET_SERVICE_BY_ID = `query ($id: ItemId!) {
  service(filter: {id: {eq: $id}}) {
    id
    title
    description
    content
    image {
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
