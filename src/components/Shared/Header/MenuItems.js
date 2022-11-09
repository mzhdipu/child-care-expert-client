import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Root/Context/AuthProvider';

const MenuItems = () => {
    const {user} = useContext(AuthContext);
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

                    <li to="/profile">
                        {user?.photoURL ?
                            <img src={user?.photoURL}/>
                            // <Image
                            //     style={{ height: '30px' }}
                            //     roundedCircle
                            //     src={user?.photoURL}>
                            // </Image>
                            : <FaUser></FaUser>
                        }
                    </li>
                    {/* <li tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </li> */}
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default MenuItems;
