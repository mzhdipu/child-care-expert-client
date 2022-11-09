import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
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
                            services.map(service =>
                                <div className="overflow-hidden bg-white rounded shadow">
                                <div className="p-5">
                                    <div className="relative">
                                        <img className="object-cover w-full h-full" src={service.img} alt="" />
                                    </div>
                                    
                                    <p className="mt-5 text-2xl font-semibold">
                                        {service.title} 
                                    </p>
                                    <p className="mt-4 text-base text-gray-600">
                                        {
                                        service.description.length > 100 ? service.description.slice(0, 100) : service.description
                                        }
                                    </p>
    
                                    <span title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                        <Link to={`/services/${service._id}`}>
                                            Continue Reading
                                        </Link>
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>  
                            )
                        }
                           
                    </div>
                </div>
            </section>
    );
};

export default Services;