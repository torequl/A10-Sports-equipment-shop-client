import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Layout from "../Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import ViewDetails from "../pages/ViewDetails";
import MyEquipment from "../pages/MyEquipment";
import Update from "../pages/Update";
import PrivetRoute from "./PrivetRoute";

const Router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        // errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://assignment-10-server-roan-eight.vercel.app/equipments')
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/allEquipments',
                element: <AllEquipment />,
                loader: () => fetch('https://assignment-10-server-roan-eight.vercel.app/equipments')
            },
            {
                path: '/addEquipment',
                element: <PrivetRoute>
                    <AddEquipment />
                </PrivetRoute>
            },
            {
                path: '/details/:itemName',
                element: <PrivetRoute>
                    <ViewDetails />
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-roan-eight.vercel.app/details/${params.itemName}`)
            },
            {
                path: '/myEquipment/:email',
                element: <PrivetRoute>
                    <MyEquipment />
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-roan-eight.vercel.app/${params?.email}`)
            },
            {
                path: '/update/:id',
                element: <PrivetRoute>
                    <Update />
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-roan-eight.vercel.app/update/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default Router;