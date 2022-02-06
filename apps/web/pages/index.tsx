import { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { AdminHome, StudentHome } from '../components/Home';
import { getUSNAndRole } from '../lib/functions';

const Home: NextPage = () => {
    const role = getUSNAndRole().role;

    useEffect(() => {
        if (!role) {
            Router.push('/login');
        }
    }, []);

    return role === 'ADMIN' ? <AdminHome /> : <StudentHome />;
};

export default Home;
