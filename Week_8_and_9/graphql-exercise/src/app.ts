import * as dotenv from 'dotenv';
dotenv.config({ path: '../config.env' });
import express from 'express';
import morgan from 'morgan';
import peopleRouter from '../routes/peopleRouter';
import addressRouter from '../routes/addressRouter';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../graphql_stuff/graphql_schema';
import { Query } from '../graphql_stuff/resolvers/Query';
import Mutation from '../graphql_stuff/resolvers/mutation';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const httpServer = http.createServer(app);
const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  plugins: [
    ApolloServerPluginDrainHttpServer({
      httpServer,
    }),
  ],
});

await server.start();

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server),
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('Development mode...');
}

app.use(cors());
app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files
app.use('/api/v1/persons', peopleRouter);
app.use('/api/v1/address', addressRouter);

export default app;
