import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export { createApplied, getAllApplied } from './applied';
export { createCompany, getCompanies, getCompany } from './company';
export {
    applied,
    companies,
    eligibility,
    selected,
    userDetails,
    users,
} from './dummy';
export { createSelected, getAllSelected } from './selected';
export { createUser, getUser, getUsers } from './user';
