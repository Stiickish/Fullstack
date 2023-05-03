/* // npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import pkg from 'body-parser';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

interface MyContext {
  token?: String;
}
const { json } = pkg;
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve),
);
console.log(`🚀 Server ready at http://localhost:4000`); */

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import app from '../app';

const port = 4000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    token: req.headers.authorization,
  }),
});

const expressServer = express();

expressServer.use(cors(), express.json());

const startServer = async () => {
  await apolloServer.start();

  apolloServer.applyMiddleware({
    app: expressServer,
    path: '/graphql',
  });

  expressServer.use('/api/v1/persons', app);

  const httpServer = http.createServer(expressServer);

  httpServer.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
};

startServer();
