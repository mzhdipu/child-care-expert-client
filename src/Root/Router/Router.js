import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceReview from "../../Pages/MyReviews/ServiceReview";
import ServicesReviews from "../../Pages/MyReviews/ServicesReviews";
import Registration from "../../Pages/Registration/Registration";
import Services from "../../Pages/Services/Services";
import ServicesDetails from "../../Pages/Services/ServicesDetails";
import ServicesHome from "../../Pages/Services/ServicesHome";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                path : "/services",
                element : <ServicesHome></ServicesHome>,
                loader: () => {
                   return fetch(`http://localhost:5000/services`)
                }
            },
          
            {
                path : "/services/:id",
                element : <ServicesDetails></ServicesDetails>,
                loader: ({params})=>{
                   return fetch(`http://localhost:5000/services/${params.id}`) 
                }
            },
                                         
            {
                path : "/add-services",
                element : <AddServices></AddServices>
            },

            {
                path : "/my-reviews",
                element : <MyReviews></MyReviews>,
            },
                                         
            {
                path : "/blog",
                element : <Blog></Blog>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/registration",
                element : <Registration></Registration>
            },
        ]
    }
])