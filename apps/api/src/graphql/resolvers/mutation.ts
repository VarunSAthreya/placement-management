import {
    authenticateUser,
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
    createUser: async (
        _: any,
        { input }: { input: IUser },
        { role }: { role: string }
    ) => createUser(input),

    authenticate: async (
        _: any,
        { USN, password }: { USN: string; password: string }
    ) => authenticateUser(USN, password),

    createCompany: async (
        _: any,
        { input }: { input: ICompany },
        { role }: { role: string }
    ) => createCompany(input, role),

    createApplied: async (_: any, { input }: { input: IApplied }) =>
        createApplied(input),

    createSelected: async (_: any, { input }: { input: ISelected }) =>
        createSelected(input),

    updateUserDetails: async (_: any, { input }: { input: IUserDetails }) =>
        updateUserDetails(input),

    updateCompany: async (_: any, { input }: { input: ICompany }) =>
        updateCompany(input),

    getAllEligibleStudents: async (_: any, { input }: { input: string }) =>
        getAllEligibleStudents(input),

    deleteUser: async (_: any, { USN }: { USN: string }) => deleteUser(USN),

    deleteCompany: async (_: any, { name }: { name: string }) =>
        deleteCompany(name),

    deleteApplied: async (_: any, { input }: { input: IApplied }) =>
        deleteApplied(input),

    deleteSelected: async (_: any, { input }: { input: ISelected }) =>
        deleteSelected(input),
};

export default mutation;
