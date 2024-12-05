import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Layout from "../Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllEquipment from "../pages/AllEquipment";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Error />,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/allEquipments',
                element: <AllEquipment/>
            },
        ]
    }
])

export default Router;