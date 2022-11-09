import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login Now</h2>

                        <p className="mt-2">Already have an account?  
                            <Link to="/registration" className='ml-2 text-blue-900 font-bold'>
                                 Registration
                            </Link>
                        </p>

                        <LoginForm></LoginForm>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;