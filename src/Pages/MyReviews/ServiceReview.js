import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../Root/Context/AuthProvider';

const ServiceReview = ({addReviews}) => {
    const {user} = useContext(AuthContext);
    console.log(addReviews.review)

    return (
        <section class="bg-white">
            <div class="max-w-4xl px-3 mx-auto sm:px-3 lg:px-3">

            <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl text-center font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-14">Reviews</h2>
                    </div>
                </div>


                <div class="md:flex md:items-left">
                    <div class="relative flex-shrink-0 w-48 h-48">
                        <div class="absolute w-20 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                        <img class="relative object-cover w-20 rounded-full" src={user.photoURL} alt="" />
                    </div>

                    <div class="mt-10 md:mt-0">
                        <blockquote>
                            <p class="text-xl text-black text-left">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceReview;