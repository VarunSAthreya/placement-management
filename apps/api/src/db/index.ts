import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({ log: ['query'] });

export { createApplied, getAllApplied } from './applied';
export {
    createCompany,
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
export { createUser, getUser, getUsers, updateUserDetails } from './user';
