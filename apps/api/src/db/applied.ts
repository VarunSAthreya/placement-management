import { prisma } from '.';

export const getAllApplied = async () =>
    prisma.applied.findMany({
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getAppliedOnUSN = async (USN: string) =>
    prisma.applied.findMany({
        where: {
            userID: USN,
        },
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getAppliedOnCompany = async (companyID: string) =>
    prisma.applied.findMany({
        where: {
            companyID,
        },
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    prisma.applied.findUnique({
        where: {
            userID_companyID: {
                userID,
                companyID,
            },
        },
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });
};

export const createApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    await prisma.applied.create({
        data: {
            userID,
            companyID,
        },
    });

    return getApplied(applied);
};

export const deleteApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    const res = await getApplied(applied);

    await prisma.applied.delete({
        where: {
            userID_companyID: {
                userID,
                companyID,
            },
        },
    });

    return res;
};
