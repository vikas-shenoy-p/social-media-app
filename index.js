const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const post = require("./models/post");
const { MONGODB } = require("./config.js");
const typeDefs = gql`
  type post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [post]
  }
`;
const resolvers = {
  Query: {
    async getPosts() {
      try {
        const posts = await post.find();
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewURLParser: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 430 });
  })

  .then((res) => {
    console.log(`server runnig at ${res.url}`);
  });
