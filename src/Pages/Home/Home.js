import React from 'react';
import AllServices from '../../components/Shared/AllServices/AllServices';
import CallToAction from '../../components/Shared/CallToAction/CallToAction';
import About from './About';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AllServices></AllServices>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;