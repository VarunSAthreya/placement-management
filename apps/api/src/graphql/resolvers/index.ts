import mutation from './mutation';
import query from './query';

const resolvers = {
    Query: query,
    Mutation: mutation,
};

export default resolvers;
