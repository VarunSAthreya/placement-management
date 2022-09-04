import type { NextPage } from 'next';
import Footer from '../components/Footer';
import {
    Features,
    Importance,
    Main,
    TechnologyUsed,
} from '../components/Landing';
import Navigation from '../components/Navigation';

const Landing: NextPage = () => {
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

export default Landing;
