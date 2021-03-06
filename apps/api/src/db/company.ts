import { Company } from '@prisma/client';
import { ApolloError } from 'apollo-server';
import { prisma } from '.';

const query = {
    eligibility: true,
    applied: {
        include: {
            user: true,
            company: true,
        },
    },
    selected: {
        include: {
            user: true,
            company: true,
        },
    },
};

export const getCompanies = async () =>
    prisma.company.findMany({
        include: query,
        orderBy: { name: 'asc' },
    });

export const getCompany = async (name: string) =>
    prisma.company.findUnique({
        where: { name },
        include: query,
    });

export const createCompany = async (company: ICompany, role: string) => {
    try {
        if (role !== 'ADMIN') {
            // TODO: Add role based error for remanding
            throw new Error('You are not authorized to create a company');
        }
        const { name, arrival_date, package: pkg, type, eligibility } = company;

        const res = await prisma.company.create({
            data: {
                name,
                arrival_date,
                package: pkg,
                type,
                eligibility: {
                    create: eligibility,
                },
            },
        });

        if (!res) {
            throw new Error('Error creating company');
        }

        return getCompany(name);
    } catch (error: any) {
        throw new ApolloError(error.message);
    }
};

export const updateCompany = async (company: ICompany, role: string) => {
    try {
        if (role !== 'ADMIN') {
            // TODO: Add role based error for remanding
            throw new Error('You are not authorized to update a company');
        }

        const { name, arrival_date, package: pkg, type, eligibility } = company;

        const res = await prisma.company.update({
            where: { name },
            data: {
                arrival_date,
                package: pkg,
                type,
                eligibility: {
                    update: eligibility,
                },
            },
        });

        if (!res) throw new Error('Error updating company');

        return getCompany(name);
    } catch (error: any) {
        throw new ApolloError(error.message);
    }
};

export const deleteCompany = async (name: string) => {
    const res = await getCompany(name);

    await prisma.company.delete({
        where: { name },
    });

    return res;
};

export const getAllEligibleStudentsForCompany = async (name: string) => {
    const company = await getCompany(name);
    const { CGPA, backlogs, tenth, twelth } = company!.eligibility!;

    return prisma.userDetails.findMany({
        where: {
            CGPA: { gte: CGPA },
            backlogs: { lte: backlogs },
            tenth: { gte: tenth },
            twelth: { gte: twelth },
        },
        orderBy: { USN: 'asc' },
    });
};

export const getCompanyCount = async (): Promise<number> =>
    prisma.company.count();

export const getUpcomingCompanies = async (): Promise<Company[] | []> => {
    const companies = await prisma.company.findMany({
        where: {
            arrival_date: {
                gt: new Date(),
            },
        },
        orderBy: { arrival_date: 'asc' },
        include: query,
    });
    console.log({ companies });

    return companies ?? [];
};
