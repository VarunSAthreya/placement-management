import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({ log: ['query'] });

export * from './applied';
export * from './company';
export * from './selected';
export * from './user';
