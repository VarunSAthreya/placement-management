import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({ log: ['query'] });

export { createApplied, deleteApplied, getAllApplied } from './applied';
export {
    createCompany,
    deleteCompany,
    getCompanies,
    getCompany,
    updateCompany,
} from './company';
export {
    applied,
    companies,
    eligibility,
    selected,
    userDetails,
    users,
} from './dummy';
export { createSelected, getAllSelected } from './selected';
export {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUserDetails,
} from './user';
