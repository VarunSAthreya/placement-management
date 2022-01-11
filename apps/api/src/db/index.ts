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
export { createSelected, deleteSelected, getAllSelected } from './selected';
export {
    createUser,
    deleteUser,
    getUser,
    getUserDetails,
    getUsers,
    updateUserDetails,
} from './user';
