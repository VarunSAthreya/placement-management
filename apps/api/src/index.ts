import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import context from './graphql/context';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';

dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
});

server.listen().then(({ url }: { url: string }) => {
    console.log(`Server listening at ${url}`);
});
