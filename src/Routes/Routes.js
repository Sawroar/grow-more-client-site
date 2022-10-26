import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
            ,
            {
                path: '/category/:id',
                element: <Category></Category>
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
            }
        ]
    }
])