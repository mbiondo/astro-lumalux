export const GET_HOME = `
  query {
    home {
      content
      title
      sections {
        id
        title
        description
        image {
          height
          format
          width
          id
          title
          size
          url
          responsiveImage {
            src
            title
            width
            height
          }
        }
      }
    }
  }
`;
