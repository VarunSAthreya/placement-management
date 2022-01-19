import {
    authenticateUser,
    changePassword,
    createApplied,
    createCompany,
    createSelected,
    createUser,
    deleteApplied,
    deleteCompany,
    deleteSelected,
    deleteUser,
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

    createSelected: async (_: any, { input }: { input: ISelectedInput }) =>
        createSelected(input),

    updateUserDetails: async (_: any, { input }: { input: IUserDetails }) =>
        updateUserDetails(input),

    updateCompany: async (_: any, { input }: { input: ICompany }) =>
        updateCompany(input),

    deleteUser: async (_: any, { USN }: { USN: string }) => deleteUser(USN),

    deleteCompany: async (_: any, { name }: { name: string }) =>
        deleteCompany(name),

    deleteApplied: async (_: any, { input }: { input: IApplied }) =>
        deleteApplied(input),

    deleteSelected: async (_: any, { input }: { input: ISelected }) =>
        deleteSelected(input),

    changePassword: async (
        _: any,
        {
            USN,
            oldPassword,
            newPassword,
        }: { USN: string; oldPassword: string; newPassword: string },
        { USN: senderUSN, role }: { USN: string; role: string }
    ) => changePassword(USN, oldPassword, newPassword, senderUSN, role),
};

export default mutation;
