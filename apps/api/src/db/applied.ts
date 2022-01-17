import { ApolloError } from 'apollo-server';
import { prisma } from '.';
import { getCompany } from './company';
import { getUserDetails } from './user';

const query = {
    user: true,
    company: {
        include: {
            eligibility: true,
        },
    },
};

export const getAllApplied = async () =>
    prisma.applied.findMany({
        include: query,
        orderBy: { userID: 'asc' },
    });

export const getAppliedOnUSN = async (USN: string) =>
    prisma.applied.findMany({
        where: {
            userID: USN,
        },
        include: query,
        orderBy: { companyID: 'asc' },
    });

export const getAppliedOnCompany = async (companyID: string) =>
    prisma.applied.findMany({
        where: {
            companyID,
        },
        include: query,
        orderBy: { userID: 'asc' },
    });

export const getApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    return prisma.applied.findUnique({
        where: {
            userID_companyID: {
                userID,
                companyID,
            },
        },
        include: query,
    });
};

export const createApplied = async (applied: IApplied) => {
    try {
        const { userID, companyID } = applied;

        const userDetails = await getUserDetails(userID);
        if (!userDetails) throw new Error('User not found');

        const company = await getCompany(companyID);
        if (!company) throw new Error('Company not found');

        const { CGPA, backlogs, tenth, twelth } = userDetails!;
        const {
            CGPA: CGPA_cutoff,
            backlogs: backlogs_cutoff,
            tenth: tenth_cutoff,
            twelth: twelth_cutoff,
        } = company!.eligibility!;

        if (
            CGPA < CGPA_cutoff ||
            backlogs >= backlogs_cutoff ||
            tenth < tenth_cutoff ||
            twelth < twelth_cutoff
        )
            throw new Error('User not eligible');

        const res = await prisma.applied.create({
            data: {
                userID,
                companyID,
            },
        });

        if (!res) throw new Error('Application failed');

        return getApplied(applied);
    } catch (err: any) {
        return new ApolloError(err.message);
    }
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
