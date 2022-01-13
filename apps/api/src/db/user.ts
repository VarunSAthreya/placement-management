import { AuthenticationError } from 'apollo-server';
import { prisma } from '.';
import { comparePassword, encryptPassword, issueToken } from '../functions';

const query = {
    details: {
        include: {
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
        },
    },
};

export const getUsers = async () =>
    prisma.user.findMany({
        include: query,
    });

export const getUser = async (USN: string) =>
    prisma.user.findUnique({
        where: { USN },
        include: query,
    });

export const createUser = async (user: IUser) => {
    const { USN, password, role, details } = user;

    const encrypted_password = await encryptPassword(password);

    const res = await prisma.user.create({
        data: {
            USN,
            password: encrypted_password,
            role,
            details: {
                create: details,
            },
        },
    });

    return getUser(res.USN);
};

export const getUserDetails = async (USN: string) =>
    prisma.userDetails.findUnique({ where: { USN } });

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
