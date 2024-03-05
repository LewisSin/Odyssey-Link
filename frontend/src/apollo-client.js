// File: apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

// Replace 'YOUR_GRAPHQL_SERVER_URI' with your actual GraphQL endpoint
const client = new ApolloClient({
  uri: 'http://localhost:${PORT}${server.graphqlPath}',
  cache: new InMemoryCache(),
});

export default client;
