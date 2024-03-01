const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    # Define your query types here
  }

  type Mutation {
    # Define your mutation types here
  }

  # Define your custom types here
`;

module.exports = { typeDefs };
