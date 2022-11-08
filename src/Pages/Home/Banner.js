import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner/banner.png';

const Banner = () => {
    return (    
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-4xl text-left font-bold text-black sm:text-6xl lg:text-7xl">
                            Child Care
                            <div className="relative inline-flex">
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Expert.</h1>
                            </div>
                        </h1>
    
                        <p className="mt-8 text-left text-base text-black sm:text-xl">Facilisi commodo ac consequat erat risus duis velit quis velit fermentum feugiat sit bibendum pellentesque semper maecenas posuere cursus gravida.</p>
    
                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <Link to="/services" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600" role="button"> Start Services</Link>
                        </div>
                    </div>
    
                    <div>
                        <img className="w-full" src={banner} alt="Banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
















