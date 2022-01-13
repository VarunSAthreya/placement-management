import bcrypt from 'bcrypt';
import { prisma } from '.';

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

    const encry_password = await bcrypt.hash(password, 10);

    const res = await prisma.user.create({
        data: {
            USN,
            password: encry_password,
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
