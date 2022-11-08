import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddServices from "../../Pages/Services/AddServices/AddServices";
import Services from "../../Pages/Services/Services";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:"/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/home",
                element : <Home></Home>
            },
            {
                path : "/services",
                element : <Services></Services>,
                loader: ()=>{
                   return fetch(`http://localhost:5000/services`)
                }
            },
            {
                path : "/blog",
                element : <Blog></Blog>
            },
            {
                path : "/add/services",
                element : <AddServices></AddServices>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
        ]
    }
])