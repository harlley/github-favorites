import { ApolloClient, InMemoryCache } from "@apollo/client";

const GITHUB_API_ENDPOINT = "https://api.github.com/graphql";

const client = new ApolloClient({
  uri: GITHUB_API_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
  },
});

export default client;
