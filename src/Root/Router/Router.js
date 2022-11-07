import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:"/",
        element : <Main></Main>,
        children : [
            {
                path : "/home",
                element : <Home></Home>
            },
            {
                path : "/services",
                element : <Services></Services>
            },
            {
                path : "/blog",
                element : <Blog></Blog>
            },
        ]
    }
])