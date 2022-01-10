import { prisma } from '.';

export const getUsers = async () =>
    prisma.user.findMany({
        include: {
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
        },
    });

export const getUser = async (USN: string) =>
    prisma.user.findUnique({
        where: { USN },
        include: {
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
        },
    });

export const createUser = async (user: IUser) => {
    const { USN, password, role, details } = user;

    const res = await prisma.user.create({
        data: {
            USN,
            password,
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
    console.log(res);

    return getUserDetails(res.USN);
};
