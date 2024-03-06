const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');
const { middlewares } = require('./middlewares/auth.middleware')

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: middlewares
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('Error launching the server:', error);
});
