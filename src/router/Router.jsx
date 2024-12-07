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
        path: '*',
        element: <Error />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/equipments')
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
                loader: () => fetch('http://localhost:5000/equipments')
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
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.itemName}`)
            },
            {
                path: '/:email',
                element: <MyEquipment />,
                loader: ({ params }) => fetch(`http://localhost:5000/${params?.email}`)
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
            },
        ]
    }
])

export default Router;