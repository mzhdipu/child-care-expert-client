import React, { useEffect, useState } from 'react';
import ServicesHomeItems from './ServicesHomeItems';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/home-services`)
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 flex">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-end justify-between">
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">Services </h2>
                </div>
            </div>


            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">

            {
                services.map(service =><ServicesHomeItems key={service._id} service = {service}></ServicesHomeItems>)
            }

            </div>
        </div>
    </section>
    );
};

export default Services;