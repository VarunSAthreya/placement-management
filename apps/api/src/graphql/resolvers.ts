import { Context } from 'apollo-server-core';
import {
    createApplied,
    createCompany,
    createSelected,
    createUser,
    getAllApplied,
    getAllSelected,
    getCompanies,
    getCompany,
    getUser,
    getUsers,
} from '../db';

export const resolvers = {
    Query: {
        users: async () => getUsers(),

        user: async (_: Context, { USN }: { USN: string }) => getUser(USN),

        companies: async () => getCompanies(),

        company: async (_: Context, { name }: { name: string }) =>
            getCompany(name),

        applied: async () => getAllApplied(),

        selected: async () => getAllSelected(),
    },
    Mutation: {
        createUser: async (_: Context, { input }: { input: IUser }) =>
            createUser(input),

        createCompany: async (_: Context, { input }: { input: ICompany }) =>
            createCompany(input),

        createApplied: async (_: Context, { input }: { input: IApplied }) =>
            createApplied(input),

        createSelected: async (_: Context, { input }: { input: ISelected }) =>
            createSelected(input),
    },
};
