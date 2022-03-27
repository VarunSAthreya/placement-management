import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';

export const issueToken = async (user: IUser | User) => {
    const { USN, role, version } = user;
    const token = sign({ USN, role, version }, process.env.JWT_SECRET!, {
        expiresIn: 60 * 60 * 24 * 30,
    });
    return `Bearer ${token}`;
};

export const verifyToken = async (token: string) => {
    if (!token || token === '') {
        return null;
    }

    token = token.split(' ')[1];
    if (!token || token === '') {
        return null;
    }

    return verify(token, process.env.JWT_SECRET!);
};

export const encryptPassword = async (password: string) =>
    bcrypt.hash(password, 10);

export const comparePassword = async (
    password: string,
    encrypted_password: string
) => bcrypt.compare(password, encrypted_password);
