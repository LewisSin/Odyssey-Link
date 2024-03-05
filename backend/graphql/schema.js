const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    createdAt: String!
  }
  extend type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  extend type Mutation {
    addPost(title: String!, content: String!): Post
  }

  # Assuming you already have a User type
  type User {
    id: ID!
    username: String!
    posts: [Post]
  }

  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String!): Post
    deletePost(id: ID!): String
  }
`;

module.exports = { typeDefs };
