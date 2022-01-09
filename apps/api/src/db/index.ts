import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export { getApplied } from './applied';
export { createCompany, getCompanies, getCompany } from './company';
export {
    applied,
    companies,
    eligibility,
    selected,
    userDetails,
    users,
} from './dummy';
export { getSelected } from './selected';
export { createUser, getUser, getUsers } from './user';
