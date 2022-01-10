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

export const createCompany = async (company: ICompany) => {
    const { name, arrival_date, package: pkg, type, eligibility } = company;

    await prisma.company.create({
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

    return getCompany(name);
};

export const updateCompany = async (company: ICompany) => {
    const { name, arrival_date, package: pkg, type, eligibility } = company;

    await prisma.company.update({
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

    return getCompany(name);
};

export const deleteCompany = async (name: string) => {
    const res = await getCompany(name);

    await prisma.company.delete({
        where: { name },
    });

    return res;
};
