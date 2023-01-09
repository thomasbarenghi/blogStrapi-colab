import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
query {
  blogPosts {
    data {
      id
      attributes {
        urlSlug
        title
        description
        content
        destacado
        portada {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;


export {GET_ALL_POSTS};