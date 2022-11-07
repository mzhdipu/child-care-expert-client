import { Link } from "react-router-dom";

export const menuItems = <>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/'>Home</Link>
    </li>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/services'>Services</Link>
    </li>

    <li className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
        <Link to='/blog'>Blog</Link>
    </li>
</>