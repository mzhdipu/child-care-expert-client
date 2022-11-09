import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Home/ServicesHome/Services";
import ServicesDetails from "../../Pages/Home/ServicesHome/ServicesDetails";
import Login from "../../Pages/Login/Login";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:"/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader: () => {
                    return fetch(`http://localhost:5000/services`)
                 },
            },
            {
                path : "/home",
                element : <Home></Home>,
                loader: () => {
                    return fetch(`http://localhost:5000/services`)
                 }
            },
            {
                path : "/services",
                element : <Services></Services>,
                loader: () => {
                   return fetch(`http://localhost:5000/services`)
                }
            },
            {
                path : "/services/:id",
                element : <ServicesDetails></ServicesDetails>,
                loader: ({params})=>{
                    fetch(`http://localhost:5000/services/${params.id}`) 
                }
            },
                                         
            {
                path : "/blog",
                element : <Blog></Blog>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
        ]
    }
])