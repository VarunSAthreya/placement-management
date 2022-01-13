import {
    authenticateUser,
    getAllApplied,
    getAllSelected,
    getCompanies,
    getCompany,
    getUser,
    getUsers,
} from '../../db';

const query = {
    users: async () => getUsers(),

    user: async (_: any, { USN }: { USN: string }) => getUser(USN),

    companies: async () => getCompanies(),

    company: async (_: any, { name }: { name: string }) => getCompany(name),

    applied: async () => getAllApplied(),

    selected: async () => getAllSelected(),

    authenticate: async (
        _: any,
        { USN, password }: { USN: string; password: string }
    ) => authenticateUser(USN, password),
};

export default query;
