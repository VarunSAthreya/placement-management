import { prisma } from '.';

export const getAllApplied = async () =>
    prisma.applied.findMany({
        include: {
            user: true,
            company: true,
        },
    });

export const getAppliedOnUSN = async (USN: string) =>
    prisma.applied.findMany({
        where: {
            userID: USN,
        },
        include: {
            user: true,
            company: true,
        },
    });

export const getAppliedOnCompany = async (companyID: string) =>
    prisma.applied.findMany({
        where: {
            companyID,
        },
        include: {
            user: true,
            company: true,
        },
    });

export const getApplied = async (USN: string, companyID: string) =>
    prisma.applied.findUnique({
        where: {
            userID_companyID: {
                userID: USN,
                companyID,
            },
        },
        include: {
            user: true,
            company: true,
        },
    });

export const createApplied = async (applied: IApplied) => {
    await prisma.applied.create({
        data: {
            userID: applied.userID,
            companyID: applied.companyID,
        },
    });

    return getApplied(applied.userID, applied.companyID);
};
