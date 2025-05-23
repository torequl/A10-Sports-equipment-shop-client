import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import auth from "../firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/sports-logo.png"
const Navbar = () => {

    const { user } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        signOut(auth)
        toast.success('Log Out Successfully')
        navigate('/')
    }

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allEquipments'>All Equipment</Link></li>
        
        {
            user && <>
                <li><Link to='/addEquipment'>Add Equipment</Link></li>
                <li><Link to={`/myEquipment/${user?.email}`}>My Equipment</Link></li>
            </>
        }
    </>

    return (
        <div className="bg-base-200 sticky top-0 z-40 dark:bg-gray-700 dark:text-white">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-yellow-50 text-black menu-md dropdown-content z-[1] mt-3 w-52 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-24" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex gap-6">
                            <ThemeToggle/>
                            <a  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                            <img className="rounded-full cursor-pointer w-12 h-12 object-cover" src={user.photoURL} alt="" />
                            </a>
                            <button onClick={handleLogOut} className="btn btn-warning">Logout</button>
                        </div> :
                            <div className="flex gap-6">
                                <ThemeToggle/>
                                <Link className="btn btn-primary" to='/login'>Login</Link>
                                <Link className="btn btn-secondary" to='/signup'>Sign Up</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;