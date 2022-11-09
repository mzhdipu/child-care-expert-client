import React from 'react';
import Reviews from './Reviews';

const MyReviews = () => {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">My Reviews</h2>
            </div>

            <div className="max-w-5xl mx-auto mt-12 sm:mt-16">

                <div className="mt-6 overflow-hidden bg-white rounded-xl">
                    <div className="px-6 py-12 sm:p-12">

                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <Reviews></Reviews>
                            </tbody>
                            
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MyReviews;