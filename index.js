const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB } = require("./config.js");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typedefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
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
