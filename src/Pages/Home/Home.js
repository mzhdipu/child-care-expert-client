import React from 'react';
import CallToAction from '../../components/Shared/CallToAction/CallToAction';
import About from './About';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;