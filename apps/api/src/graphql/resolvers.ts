import { Context } from 'apollo-server-core';
import {
    createApplied,
    createCompany,
    createSelected,
    createUser,
    deleteApplied,
    deleteCompany,
    deleteSelected,
    deleteUser,
    getAllApplied,
    getAllSelected,
    getCompanies,
    getCompany,
    getUser,
    getUsers,
    updateCompany,
    updateUserDetails,
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
        updateUserDetails: async (
            _: Context,
            { input }: { input: IUserDetails }
        ) => updateUserDetails(input),

        updateCompany: async (_: Context, { input }: { input: ICompany }) =>
            updateCompany(input),

        deleteUser: async (_: Context, { USN }: { USN: string }) =>
            deleteUser(USN),

        deleteCompany: async (_: Context, { name }: { name: string }) =>
            deleteCompany(name),

        deleteApplied: async (_: Context, { input }: { input: IApplied }) =>
            deleteApplied(input),

        deleteSelected: async (_: Context, { input }: { input: ISelected }) =>
            deleteSelected(input),
    },
};
