import { gql } from "@apollo/client";

export const REPOS_BY_NAME = gql`
  query SearchRepos($repoName: String!) {
    search(query: $repoName, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;
