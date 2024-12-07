import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);

    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }

    return (
        <Navigate
        state={location.pathname}
        to={'/login'}>
        </Navigate>
    );
};

export default PrivetRoute;