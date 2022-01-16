import {
    getAllApplied,
    getAllSelected,
    getAllUserDetails,
    getCompanies,
    getCompany,
    getUser,
    getUsers,
} from '../../db';

const query = {
    users: async () => getUsers(),

    user: async (_: any, { USN }: { USN: string }) => getUser(USN),

    studentDetails: async () => getAllUserDetails(),

    companies: async () => getCompanies(),

    company: async (_: any, { name }: { name: string }) => getCompany(name),

    applied: async () => getAllApplied(),

    selected: async () => getAllSelected(),
};

export default query;
