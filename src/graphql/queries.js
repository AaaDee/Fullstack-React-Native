import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $after: String, $first: Int) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      first: $first,
      after: $after
    ) {
      totalCount
      edges {
        node {
          id
          ownerAvatarUrl
          stargazersCount
          reviewCount
          ratingAverage
          forksCount
          language
          description
          fullName
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const ME = gql`
query {
  me {
    id
    username
  }
}
`;

export const GET_REPOSITORY = gql`
query Repository($id: ID!, $after: String, $first: Int) {
  repository(id: $id) {
    id
    ownerAvatarUrl
    stargazersCount
    reviewCount
    ratingAverage
    forksCount
    language
    description
    fullName
    url
    reviews(
      first: $first,
      after: $after
    ) {
      totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    } 
  }
}
`
