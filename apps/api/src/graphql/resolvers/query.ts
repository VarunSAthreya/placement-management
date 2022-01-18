import {
    getAllApplied,
    getAllSelected,
    getAllUserDetails,
    getAppliedCount,
    getCompanies,
    getCompany,
    getCompanyCount,
    getSelectedByCompany,
    getSelectedCount,
    getStudentCount,
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

    studentCount: async () => getStudentCount(),

    companyCount: async () => getCompanyCount(),

    appliedCount: async () => getAppliedCount(),

    selectedCount: async () => getSelectedCount(),
};

export default query;
