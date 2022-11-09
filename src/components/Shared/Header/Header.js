import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Root/Context/AuthProvider';
import MenuItems, { menuItems } from './MenuItems';

const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <header className="pb-6 bg-white lg:pb-0 shadow-md">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex">
                        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Child Care <span class="text-blue-600 dark:text-blue-500">Expert</span></h1>
                        </Link>
                       
                    </div>

                    <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                        
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                        </svg>

                        
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <ul className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <MenuItems></MenuItems>
                    </ul>

                    <Link to="/profile">
                        {user?.photoURL ?
                             <Link className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> My Account </Link>
                            : 
                            <Link to="/login" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Login Now </Link>
                        }
                    </Link>
                    
                    {/* <Link to="/login" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> My Account </Link> */}
                </nav>

                
                <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                        <ul className="flex flex-col px-6 -my-2 space-y-1">
                            <MenuItems></MenuItems>
                        </ul>
                    </div>

                    {/* <div className="px-6 mt-6">
                        <Link to="/login" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Login </Link>
                    </div> */}
                </nav>
            </div>
        </header>

    );
};

export default Header;