import * as dotenv from 'dotenv'
dotenv.config({path:'./.env'});
import * as mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./graphql_schemas";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const DB = process.env.DATABASE_DEV!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!,
);
mongoose.connect(DB, {
}).then(() => console.log('DB connection has succeed!'));

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    },
});

const port = parseInt(process.env.PORT!);

const { url } = await startStandaloneServer(server, {
    listen: { port: port },
});

console.log(`🚀  Server ready at: ${url}`);




