import { prisma } from '.';

export const getSelected = async () =>
    prisma.selected.findMany({
        include: {
            user: true,
            company: true,
        },
    });
