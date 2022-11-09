import React, { useContext } from 'react';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Root/Context/AuthProvider';

const MenuItems = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>
            <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                <Link to='/home'>Home</Link>
            </li>

            <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                <Link to='/services'>Services</Link>
            </li>

            <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                <Link to='/blog'>Blog</Link>
            </li>

            {
                user?.email ? 
                <>
                    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                        <Link to='/add-services'>Add Services</Link>
                    </li>

                    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                        <Link to='/my-reviews'>My Reviews</Link>
                    </li>

                    <li>
                        {user?.photoURL ?
                            <img src={user?.photoURL} style={{ height: '40px' }} className= "rounded-full"/>
                            // <Image
                            //     style={{ height: '30px' }}
                            //     roundedCircle
                            //     src={user?.photoURL}>
                            // </Image>
                            : 
                            <Link onClick={handleLogOut}>
                                <FaUserAlt/>
                            </Link>
                        }
                    </li>

                    <li onClick={handleLogOut} className='font-semibold'><Link>Logout</Link></li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default MenuItems;
