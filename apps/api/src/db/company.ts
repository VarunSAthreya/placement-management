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
    console.log(JSON.stringify(company));

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
    console.log('\n\n');

    console.log(JSON.stringify(res));

    return getCompany(res.name);
};
