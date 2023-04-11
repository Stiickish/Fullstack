import app from './app';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './src/resolvers';
import { typeDefs } from './src/schema';

const DB = process.env.DATABASE_DEV!.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {}).then(() => console.log('DB connection succesfull!'));

const serverStart = async (server: ApolloServer) => {
  await server.start();
  server.applyMiddleware({ app });
};

const port = process.env.PORT;
const server = new ApolloServer({ typeDefs, resolvers });
serverStart(server);

//export const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
