import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from '../../components/Shared/AllServices/AllServices';

const Services = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <AllServices services={services}></AllServices>
        </div>
    );
};

export default Services;