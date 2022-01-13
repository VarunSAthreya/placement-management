import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { getUser } from './db';
import { issueToken } from './functions';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const func = async () => {
    const user: any = await getUser('1JS19CS186');
    if (user) {
        const token = await issueToken(user);
        console.log({ token });
    }
};

server.listen().then(({ url }: { url: string }) => {
    console.log(`Server listening at ${url}`);
});
