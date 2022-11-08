import React from 'react';
import AllServices from '../../components/Shared/AllServices/AllServices';
import CallToAction from '../../components/Shared/CallToAction/CallToAction';
import About from './About';
import Banner from './Banner';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicesHome></ServicesHome>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;