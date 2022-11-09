import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div>
            <p>{service.title}</p>
        </div>
    );
};

export default ServicesDetails;