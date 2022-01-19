import jwt_decode from 'jwt-decode';

export const getUSNAndRole = (): ILocalStorageData => {
    let token;
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token');
    }

    if (!token) return null;

    const { USN, role }: ILocalStorageData = jwt_decode(token);

    return { USN, role };
};
