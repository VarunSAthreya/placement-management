import { ApolloError, AuthenticationError } from 'apollo-server';
import { prisma } from '.';
import { comparePassword, encryptPassword, issueToken } from '../functions';
import { getUser, userQuery } from './user';

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

export const changePassword = async (
    USN: string,
    oldPassword: string,
    newPassword: string,
    senderUSN: string,
    role: string
) => {
    try {
        if (USN !== senderUSN && role !== 'ADMIN') {
            console.log({ senderUSN, role, USN });
            throw new Error('You are not authorized to change password');
        }
        const user = await prisma.user.findUnique({ where: { USN } });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await comparePassword(oldPassword, user.password);
        if (!isMatch) {
            throw new Error('Incorrect password');
        }

        const hashedPassword = await encryptPassword(newPassword);
        return prisma.user.update({
            where: { USN },
            data: { password: hashedPassword },
            include: userQuery,
        });
    } catch (error: any) {
        throw new ApolloError(error.message);
    }
};
