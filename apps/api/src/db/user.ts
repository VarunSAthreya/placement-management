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
    const res = await prisma.user.create({
        data: {
            USN: user.USN,
            password: user.password,
            role: user.role,
            details: {
                create: user.details,
            },
        },
    });
    return getUser(res.USN);
};
