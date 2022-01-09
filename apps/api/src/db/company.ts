import { prisma } from '.';

export const getCompanies = async () =>
    prisma.company.findMany({
        include: {
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
        },
    });

export const getCompany = async (name: string) =>
    prisma.company.findUnique({
        where: { name },
        include: {
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
        },
    });
