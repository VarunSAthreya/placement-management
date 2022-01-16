import { prisma } from '.';
import { getApplied } from './applied';

const query = {
    user: true,
    company: {
        include: {
            eligibility: true,
        },
    },
};

export const getAllSelected = async () =>
    prisma.selected.findMany({
        include: query,
        orderBy: { userID: 'asc' },
    });

export const getSelectedOnUSN = async (USN: string) =>
    prisma.selected.findMany({
        where: {
            userID: USN,
        },
        include: query,
        orderBy: { companyID: 'asc' },
    });

export const getSelectedOnCompany = async (companyID: string) =>
    prisma.selected.findMany({
        where: {
            companyID,
        },
        include: query,
        orderBy: { userID: 'asc' },
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
        include: query,
    });
};

export const createSelected = async (selected: ISelected) => {
    const { userID, companyID } = selected;

    const applied = await getApplied(selected);

    if (applied !== null) {
        await prisma.selected.create({
            data: { userID, companyID },
        });

        return getSelected(selected);
    } else {
        return null;
    }
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
