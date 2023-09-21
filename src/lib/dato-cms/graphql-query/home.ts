export const GET_HOME = `
  query {
    home {
      content
      title
      image {
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
      sections {
        id
        title
        description
      }
    }
  }
`;
