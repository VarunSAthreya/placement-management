import { prisma } from '.';

export const getAllSelected = async () =>
    prisma.selected.findMany({
        include: {
            user: true,
            company: true,
        },
    });

export const getSelectedOnUSN = async (USN: string) =>
    prisma.selected.findMany({
        where: {
            userID: USN,
        },
        include: {
            user: true,
            company: true,
        },
    });

export const getSelectedOnCompany = async (companyID: string) =>
    prisma.selected.findMany({
        where: {
            companyID,
        },
        include: {
            user: true,
            company: true,
        },
    });

export const getSelected = async (USN: string, companyID: string) =>
    prisma.selected.findUnique({
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

export const createSelected = async (applied: IApplied) => {
    await prisma.selected.create({
        data: {
            userID: applied.userID,
            companyID: applied.companyID,
        },
    });

    return getSelected(applied.userID, applied.companyID);
};
