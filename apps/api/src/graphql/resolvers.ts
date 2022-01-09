import { prisma } from '../db';

export const resolvers = {
    Query: {
        users: async () =>
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
            }),
        user: async (_: any, { USN }: { USN: string }) =>
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
            }),

        companies: async () =>
            prisma.company.findMany({
                include: {
                    eligibility: true,
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
            }),
        company: async (_: any, { name }: { name: string }) =>
            prisma.company.findUnique({
                where: { name },
                include: {
                    eligibility: true,
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
            }),
        applied: async () =>
            prisma.applied.findMany({
                include: {
                    user: true,
                    company: true,
                },
            }),
        selected: () =>
            prisma.selected.findMany({
                include: {
                    user: true,
                    company: true,
                },
            }),
    },
};
