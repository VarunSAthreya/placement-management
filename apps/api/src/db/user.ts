import { ApolloError, AuthenticationError } from 'apollo-server';
import { prisma } from '.';
import { comparePassword, encryptPassword, issueToken } from '../functions';

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

const userQuery = {
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

export const createUser = async (user: IUser) => {
    console.log({ user });

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

    return getUser(res.USN);
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

export const updateUserDetails = async (userDetails: IUserDetails) => {
    const { USN, ...rest } = userDetails;

    const res = await prisma.user.update({
        where: { USN },
        data: {
            details: {
                update: rest,
            },
        },
    });

    return getUserDetails(res.USN);
};

export const deleteUser = async (USN: string) => {
    const res = await getUser(USN);
    await prisma.user.delete({ where: { USN } });
    return res;
};

export const authenticateUser = async (USN: string, password: string) => {
    try {
        const user: any = await getUser(USN);
        if (!user) {
            return new Error('User not found');
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return new Error('Incorrect password');
        }

        const token = await issueToken(user);

        return { user, token };
    } catch (error: any) {
        throw new AuthenticationError(error.message);
    }
};

export const getStudentCount = async (): Promise<number> => {
    const students = await prisma.user.count({
        where: { role: 'STUDENT' },
    });
    console.log({ students });

    return students;
};

export const getEligibleStudentsCount = async (): Promise<number> => {
    const res = await prisma.userDetails.count({
        where: {
            eligible: true,
        },
    });

    console.log({ res });

    return res;
};

export const getPlacedStudentsCount = async (): Promise<number> => {
    const res = await prisma.userDetails.count({
        where: {
            placed: true,
        },
    });

    console.log({ res });

    return res;
};

export const isStudentEligible = async (
    USN: string,
    name: string
): Promise<boolean> => {
    try {
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

        const { CGPA, backlogs, tenth, twelth, package: pkg } = userDetails!;
        const {
            CGPA: CGPA_cutoff,
            backlogs: backlogs_cutoff,
            tenth: tenth_cutoff,
            twelth: twelth_cutoff,
        } = company!.eligibility!;

        const { package: CTC } = company!;

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
