import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Root/Context/AuthProvider';
import PrivateRoute from '../../Root/Router/PrivateRoute';
import ServiceReview from '../MyReviews/ServiceReview';
import ServicesReviews from '../MyReviews/ServicesReviews';


const ServicesDetails = () => {
    const {user} = useContext(AuthContext)
    const serviceDetails = useLoaderData()
    const {_id, title, img, description} = serviceDetails
    console.log(serviceDetails)
    return (
        <section class="py-10 bg-white sm:py-16 lg:py-24">
            <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                       {title}
                    </h2>
                </div>

                <div class=" mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                    <div>
                        <img class="w-full mx-auto sm:max-w-xs" src={img} alt="" />
                    </div>

                    <div>
                        <p class="mt-4 text-lg text-gray-700">{description}</p>
                    </div>
                </div>

                <ServiceReview></ServiceReview>

                {
                    user?.uid ? <ServicesReviews></ServicesReviews> :
                    <Link to="/login">
                        <button className="btn btn-primary">Please Login now</button>
                    </Link>
                    
                }
                
               
                
            </div>
        </section>

    );
};

export default ServicesDetails;