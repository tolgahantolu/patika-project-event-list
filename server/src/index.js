import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "@typeDefs/index.js";
import resolvers from "@resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 4000 || process.env.PORT;
const standAloneServer = async () => {
  return await startStandaloneServer(server, {
    listen: { port },
  });
};
standAloneServer();

console.log(`🚀  Server is READY on PORT ${port}`);
