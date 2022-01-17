import {
    getAllApplied,
    getAllSelected,
    getAllUserDetails,
    getCompanies,
    getCompany,
    getSelectedByCompany,
    getUser,
    getUserDetails,
    getUsers,
} from '../../db';

const query = {
    users: async () => getUsers(),

    user: async (_: any, { USN }: { USN: string }) => getUser(USN),

    studentDetails: async (_: any, { USN }: { USN: string }) =>
        getUserDetails(USN),

    allStudentDetails: async () => getAllUserDetails(),

    companies: async () => getCompanies(),

    company: async (_: any, { name }: { name: string }) => getCompany(name),

    applied: async () => getAllApplied(),

    selected: async () => getAllSelected(),

    getSelectedByCompany: async (_: any, { name }: { name: string }) =>
        getSelectedByCompany(name),
};

export default query;
