import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    );
};

export default Layout;