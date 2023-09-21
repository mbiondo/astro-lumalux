export const GET_IMAGES = `{
  allUploads {
    id
    responsiveImage {
      alt
      height
      src
      title
      width
    }
    height
    alt
    title
    url
    width
  }
}`;

export const GET_IMAGE_BY_ID = `query upload($id: UploadId!) {
    upload(filter: {id: {eq: $id}}) {
        id
        responsiveImage {
            alt
            height
            src
            title
            width
        }
        height
        alt
        title
        url
        width
    }
}`;
