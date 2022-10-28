import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import Category from "../Pages/Category";
import Courses from "../Pages/Courses";
import Error from "../Pages/Error";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
            ,
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
            ,
            {
                path: '/courses',
                element: <Courses></Courses>
            },

            {
                path: '/login',
                element: <div className="container"> <Login></Login></div>
            }
            ,
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])