import { prisma } from '.';

export const getAllSelected = async () =>
    prisma.selected.findMany({
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getSelectedOnUSN = async (USN: string) =>
    prisma.selected.findMany({
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

export const getSelectedOnCompany = async (companyID: string) =>
    prisma.selected.findMany({
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

export const getSelected = async (selected: ISelected) => {
    const { userID, companyID } = selected;

    return prisma.selected.findUnique({
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

export const createSelected = async (selected: ISelected) => {
    const { userID, companyID } = selected;

    await prisma.selected.create({
        data: { userID, companyID },
    });

    return getSelected(selected);
};

export const deleteSelected = async (selected: ISelected) => {
    const { userID, companyID } = selected;
    const res = await getSelected(selected);

    await prisma.selected.delete({
        where: {
            userID_companyID: { userID, companyID },
        },
    });

    return res;
};
