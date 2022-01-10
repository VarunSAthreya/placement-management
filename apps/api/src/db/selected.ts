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
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const createSelected = async (applied: ISelected) => {
    await prisma.selected.create({
        data: {
            userID: applied.userID,
            companyID: applied.companyID,
        },
    });

    return getSelected(applied.userID, applied.companyID);
};

export const deleteSelected = async (applied: ISelected) => {
    const { userID, companyID } = applied;
    const res = await getSelected(userID, companyID);

    await prisma.selected.delete({
        where: {
            userID_companyID: {
                userID,
                companyID,
            },
        },
    });

    return res;
};
