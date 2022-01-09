import {
    getApplied,
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

        applied: async () => getApplied(),

        selected: async () => getSelected(),
    },
};
