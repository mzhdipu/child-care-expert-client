import React from 'react';
import ServiceItems from './ServiceItems';

const AllServices = ({services}) => {

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 flex">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">Services </h2>
                    </div>
                </div>

                {
                    services.map(service => <ServiceItems key={service._id} service={service}></ServiceItems>)
                }
            </div>
        </section>
    );
};

export default AllServices;