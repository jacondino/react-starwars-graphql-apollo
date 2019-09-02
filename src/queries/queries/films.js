import gql from 'graphql-tag';

export const ListQuery = gql`
query {
  allFilms {
      id
      title
    }
}
`;