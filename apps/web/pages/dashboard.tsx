import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { AdminHome, StudentHome } from '../components/Home';
import { getUSNAndRole } from '../lib/functions';

const Dashboard: NextPage = () => {
    const { role } = getUSNAndRole();
    useEffect(() => {
        if (!role) {
            Router.push('/');
        }
    }, [role]);
    if (!role) return null;

    return role === 'ADMIN' ? <AdminHome /> : <StudentHome />;
};

export default Dashboard;
