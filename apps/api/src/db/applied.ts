import { prisma } from '.';

export const getApplied = async () =>
    prisma.applied.findMany({
        include: {
            user: true,
            company: true,
        },
    });
