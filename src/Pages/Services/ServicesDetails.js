import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServicesDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
    return (
        <div>
            <p>{serviceDetails.title}</p>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestias harum officiis dolores similique repellat, ipsum aspernatur enim, voluptates quas est asperiores, sint eligendi repellendus explicabo odit iste reprehenderit blanditiis.</h1>
        </div>
    );
};

export default ServicesDetails;