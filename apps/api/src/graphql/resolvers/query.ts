import { Context } from 'apollo-server-core';
import {
    getAllApplied,
    getAllSelected,
    getCompanies,
    getCompany,
    getUser,
    getUsers,
} from '../../db';

const query = {
    users: async () => getUsers(),

    user: async (_: Context, { USN }: { USN: string }) => getUser(USN),

    companies: async () => getCompanies(),

    company: async (_: Context, { name }: { name: string }) => getCompany(name),

    applied: async () => getAllApplied(),

    selected: async () => getAllSelected(),
};

export default query;
