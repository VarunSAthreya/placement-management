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
    getAllEligibleStudents,
    updateCompany,
    updateUserDetails,
} from '../../db';

const mutation = {
    createUser: async (_: Context, { input }: { input: IUser }) =>
        createUser(input),

    createCompany: async (_: Context, { input }: { input: ICompany }) =>
        createCompany(input),

    createApplied: async (_: Context, { input }: { input: IApplied }) =>
        createApplied(input),

    createSelected: async (_: Context, { input }: { input: ISelected }) =>
        createSelected(input),

    updateUserDetails: async (_: Context, { input }: { input: IUserDetails }) =>
        updateUserDetails(input),

    updateCompany: async (_: Context, { input }: { input: ICompany }) =>
        updateCompany(input),

    getAllEligibleStudents: async (_: Context, { input }: { input: string }) =>
        getAllEligibleStudents(input),

    deleteUser: async (_: Context, { USN }: { USN: string }) => deleteUser(USN),

    deleteCompany: async (_: Context, { name }: { name: string }) =>
        deleteCompany(name),

    deleteApplied: async (_: Context, { input }: { input: IApplied }) =>
        deleteApplied(input),

    deleteSelected: async (_: Context, { input }: { input: ISelected }) =>
        deleteSelected(input),
};

export default mutation;
