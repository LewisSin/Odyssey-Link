const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options as needed...
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
});
