import { students } from '../db';

export const resolvers = {
    Query: {
        students: async () => students,
    },
};
