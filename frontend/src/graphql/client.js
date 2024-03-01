import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '<backend-graphql-endpoint>', // Replace with your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

export { client };
