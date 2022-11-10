import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData()
    return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl text-center font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Services</h2>
                    </div>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                    
                    
                    {
                        services.map(service =>  <Service key={service._id} service={service}></Service>)
                    }
                        
                </div>

            </div>
        </section>
    );
};

export default Services;