import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

export const issueToken = async (user: IUser) => {
    const { USN, role, details } = user;
    const token = sign({ USN, role, details }, process.env.JWT_SECRET!, {
        expiresIn: 60 * 60 * 24 * 30,
    });
    return `Bearer ${token}`;
};

export const encryptPassword = async (password: string) =>
    bcrypt.hash(password, 10);

export const comparePassword = async (
    password: string,
    encrypted_password: string
) => bcrypt.compare(password, encrypted_password);
