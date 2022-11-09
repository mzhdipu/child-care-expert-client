import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServicesDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails);
    return (
        <div>
            <p>{serviceDetails.title}</p>
        </div>
    );
};

export default ServicesDetails;