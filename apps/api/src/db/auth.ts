import { ApolloError, AuthenticationError } from 'apollo-server';
import { prisma } from '.';
import { comparePassword, encryptPassword, issueToken } from '../functions';
import { getUser } from './user';

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

        if (oldPassword === newPassword) {
            throw new Error('New password cannot be the same as old password');
        }

        if (newPassword.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        const user = await prisma.user.findUnique({
            where: { USN },
            select: {
                password: true,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await comparePassword(oldPassword, user.password);
        if (!isMatch) {
            throw new Error('Incorrect password');
        }

        const hashedPassword = await encryptPassword(newPassword);

        const res = await prisma.user.update({
            where: { USN },
            data: { password: hashedPassword },
            select: {
                password: true,
            },
        });

        if (res !== null) {
            const usr = await prisma.user.update({
                where: { USN },
                data: {
                    version: {
                        increment: 1,
                    },
                },
            });

            return issueToken(usr);
        } else {
            throw new Error('Error Updating Password');
        }
    } catch (error: any) {
        throw new ApolloError(error.message);
    }
};
