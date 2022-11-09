import { Link } from "react-router-dom";

export const menuItems = <>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/home'>Home</Link>
    </li>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/services'>Services</Link>
    </li>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/blog'>Blog</Link>
    </li>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/add-services'>Add Services</Link>
    </li>

    {/* <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/login'>Login</Link>
    </li> */}

    <li tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
    </li>
</>