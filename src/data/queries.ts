import { gql } from "@apollo/client";

export const REPOS_BY_NAME = gql`
  query SearchRepos($repoName: String!) {
    search(query: $repoName, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          description
          id
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
