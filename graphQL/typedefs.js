const { gql } = require("apollo-server");
module.exports = gql`
  type post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [post]
    getPost(postId: ID!): post
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input registerInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Mutation {
    register(registerInput: registerInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): post!
    deletePost(postId: ID!): String!
  }
`;
