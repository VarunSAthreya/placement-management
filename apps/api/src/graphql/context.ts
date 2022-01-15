import { verifyToken } from '../functions';

const context = async ({ req }: { req: any }) => {
    // TODO: Temp Fix for studio must be removed
    // if (req.headers.host === 'localhost:4000') {
    //     return { role: 'ADMIN' };
    // }

    const token = req.headers.authorization || '';
    console.log(token);

    const user = await verifyToken(token);
    console.log({ user });

    if (!user) {
        return { USN: null, role: null };
    }
    const { USN, role } = user;
    return { USN, role };
};

export default context;
