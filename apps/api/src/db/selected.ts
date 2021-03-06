import { ApolloError } from 'apollo-server';
import { getApplied, prisma } from '.';

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

export const getSelectedByUSN = async (USN: string) =>
    prisma.selected.findMany({
        where: {
            userID: USN,
        },
        include: query,
        orderBy: { companyID: 'asc' },
    });

export const getSelectedByCompany = async (companyID: string) =>
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

export const createSelected = async (selected: ISelectedInput) => {
    try {
        const { userID, companyID } = selected;

        const user = await prisma.userDetails.findUnique({
            where: { USN: userID },
        });
        if (!user) throw new Error('User not found');

        const company = await prisma.company.findUnique({
            where: { name: companyID },
        });
        if (!company) throw new Error('Company not found');

        if (!selected.package) {
            selected.package = company.package!;
        }

        const applied = await getApplied(selected);
        if (!applied) throw new Error('Student not applied');

        const update = await prisma.userDetails.update({
            where: { USN: userID },
            data: {
                package:
                    selected.package > user.package
                        ? selected.package
                        : user.package,
                placed: true,
            },
        });

        if (!update) throw new Error('Update failed');

        const res = await prisma.selected.create({
            data: { userID, companyID },
        });

        if (!res) throw new Error('Update failed');

        return getSelected(selected);
    } catch (error: any) {
        return new ApolloError(error.message);
    }
};

export const deleteSelected = async (selected: ISelected) => {
    try {
        const { userID, companyID } = selected;
        const res = await getSelected(selected);

        if (!res) throw new Error('Selected not found');

        const deleted = await prisma.selected.delete({
            where: {
                userID_companyID: { userID, companyID },
            },
        });

        if (!deleted) throw new Error('Delete failed');

        return res;
    } catch (err: any) {
        return new ApolloError(err.message);
    }
};

export const getSelectedCount = async (): Promise<number> =>
    prisma.selected.count();
