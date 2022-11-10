import React from 'react';
import CallToAction from '../../components/Shared/CallToAction/CallToAction';
import ServicesHome from '../Services/ServicesHome';
import About from './About';
import Banner from './Banner';

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