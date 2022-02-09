import { ApolloError } from 'apollo-server';
import { prisma } from '.';
import { encryptPassword } from '../functions';

const detailsQuery = {
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
};

export const userQuery = {
    details: {
        include: detailsQuery,
    },
};

export const getUsers = async () =>
    prisma.user.findMany({
        include: userQuery,
        orderBy: { USN: 'asc' },
    });

export const getUser = async (USN: string) =>
    prisma.user.findUnique({
        where: { USN },
        include: userQuery,
    });

export const createUser = async (user: IUser, rol: string) => {
    try {
        console.log({ user });
        if (rol !== 'ADMIN') {
            // TODO: Add role based error for remanding
            throw new Error('You are not authorized to create a company');
        }

        const { USN, password, role, details } = user;

        const hashedPassword = await encryptPassword(password);

        const res = await prisma.user.create({
            data: {
                USN,
                password: hashedPassword,
                role,
                details: {
                    create: details,
                },
            },
        });

        if (!res) throw new Error('Error creating user');

        return getUser(res.USN);
    } catch (err: any) {
        throw new ApolloError(err.message);
    }
};

export const getAllUserDetails = async () =>
    prisma.userDetails.findMany({
        include: detailsQuery,
        orderBy: { USN: 'asc' },
    });

export const getUserDetails = async (USN: string) =>
    prisma.userDetails.findUnique({
        where: { USN },
        include: detailsQuery,
    });

export const updateUserDetails = async (
    userDetails: IUserDetails,
    role: string,
    usn: string
) => {
    try {
        if (role !== 'ADMIN' || userDetails.USN !== usn) {
            // TODO: Add role based error for remanding
            throw new Error('You are not authorized to update a company');
        }
        const { USN, ...rest } = userDetails;

        const res = await prisma.user.update({
            where: { USN },
            data: {
                details: {
                    update: rest,
                },
            },
        });

        if (!res) throw new Error('Error updating user details');

        return getUserDetails(res.USN);
    } catch (err: any) {
        throw new ApolloError(err.message);
    }
};

export const deleteUser = async (USN: string, role: string) => {
    try {
        if (role !== 'ADMIN') {
            // TODO: Add role based error for remanding
            throw new Error('You are not authorized to update a company');
        }

        const res = await getUser(USN);

        if (!res) throw new Error('User not found');

        const deleted = await prisma.user.delete({ where: { USN } });

        if (!deleted) throw new Error('Error deleting user');

        return res;
    } catch (err: any) {
        throw new ApolloError(err.message);
    }
};

export const getStudentCount = async (): Promise<number> =>
    prisma.user.count({
        where: { role: 'STUDENT' },
    });

export const getEligibleStudentsCount = async (): Promise<number> =>
    prisma.userDetails.count({
        where: {
            eligible: true,
        },
    });

export const getPlacedStudentsCount = async (): Promise<number> =>
    prisma.userDetails.count({
        where: {
            placed: true,
        },
    });

export const isStudentEligible = async (
    USN: string,
    name: string,
    role: string
): Promise<boolean> => {
    try {
        if (role == 'ADMIN') {
            return false;
        }

        const userDetails = await prisma.userDetails.findUnique({
            where: { USN },
        });
        if (!userDetails) {
            throw new Error('Student not found');
        }

        const company = await prisma.company.findUnique({
            where: { name },
            include: {
                eligibility: true,
            },
        });
        if (!company) {
            throw new Error('Company not found');
        }

        const { CGPA, backlogs, tenth, twelth, package: pkg } = userDetails;
        const {
            CGPA: CGPA_cutoff,
            backlogs: backlogs_cutoff,
            tenth: tenth_cutoff,
            twelth: twelth_cutoff,
        } = company.eligibility!;

        const { package: CTC } = company;

        console.log({ userDetails, company });

        return (
            CGPA > CGPA_cutoff &&
            backlogs <= backlogs_cutoff &&
            tenth > tenth_cutoff &&
            twelth > twelth_cutoff &&
            pkg * 1.3 <= CTC!
        );
    } catch (error: any) {
        throw new ApolloError(error.message);
    }
};

export const hasStudentApplied = async (
    USN: string,
    name: string
): Promise<boolean> => {
    const res = await prisma.applied.findUnique({
        where: {
            userID_companyID: {
                userID: USN,
                companyID: name,
            },
        },
    });

    return res !== null;
};
