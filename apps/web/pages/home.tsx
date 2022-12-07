import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import {
    Features,
    Importance,
    Main,
    TechnologyUsed,
} from '../components/Landing';
import Navigation from '../components/Navigation';
import { getUSNAndRole } from '../lib/functions';

const Home: NextPage = () => {
    const { role } = getUSNAndRole();
    useEffect(() => {
        if (role === 'ADMIN' || role === 'STUDENT') {
            Router.push('/dashboard');
        }
    }, [role]);

    return (
        <>
            <Navigation />
            <Main id="main" />
            <Importance id="importance" />
            <Features id="features" />
            <TechnologyUsed id="tech" />
            <Footer id="login" />
        </>
    );
};

export default Home;
