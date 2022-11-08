import React from 'react';

const ServicesHomeItems = ({service}) => {
    const {_id, title, img, description, price} = service
    return (
        <>
            <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
                <div className="relative">
                    <img className="object-cover w-full h-full" src={img} alt="" />
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                <p className="mt-5 text-2xl font-semibold text-black">
                    {title}
                </p>
                <p className="mt-4 text-base text-gray-600">{description}</p>
                
                <span title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Continue Reading
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </span>
            </div>
        </div>
        </>
    );
};

export default ServicesHomeItems;