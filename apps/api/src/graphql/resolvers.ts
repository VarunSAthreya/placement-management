import {
    createApplied,
    createCompany,
    createUser,
    getAllApplied,
    getCompanies,
    getCompany,
    getSelected,
    getUser,
    getUsers,
} from '../db';

export const resolvers = {
    Query: {
        users: async () => getUsers(),

        user: async (_: any, { USN }: { USN: string }) => getUser(USN),

        companies: async () => getCompanies(),

        company: async (_: any, { name }: { name: string }) => getCompany(name),

        applied: async () => getAllApplied(),

        selected: async () => getSelected(),
    },
    Mutation: {
        createUser: async (_: any, { input }: { input: IUser }) =>
            createUser(input),
        createCompany: async (_: any, { input }: { input: ICompany }) =>
            createCompany(input),
        createApplied: async (_: any, { input }: { input: IApplied }) =>
            createApplied(input),
    },
};
