export const performQuery = async <T, V>(
  query: string,
  variables?: V
): Promise<T> => {
  return fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());
};
