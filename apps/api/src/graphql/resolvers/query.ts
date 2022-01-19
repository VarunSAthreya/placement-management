import {
    getAllApplied,
    getAllEligibleStudentsForCompany,
    getAllSelected,
    getAllUserDetails,
    getAppliedCount,
    getCompanies,
    getCompany,
    getCompanyCount,
    getEligibleStudentsCount,
    getPlacedStudentsCount,
    getSelectedByCompany,
    getSelectedCount,
    getStudentCount,
    getUser,
    getUserDetails,
    getUsers,
    hasStudentApplied,
    isStudentEligible,
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

    eligibleCount: async () => getEligibleStudentsCount(),

    placedStudentCount: async () => getPlacedStudentsCount(),

    isStudentEligible: async (
        _: any,
        { USN, company }: { USN: string; company: string }
    ) => isStudentEligible(USN, company),

    getAllEligibleStudentsForCompany: async (
        _: any,
        { company }: { company: string }
    ) => getAllEligibleStudentsForCompany(company),

    hasStudentApplied: async (
        _: any,
        { USN, company }: { USN: string; company: string }
    ) => hasStudentApplied(USN, company),
};

export default query;
