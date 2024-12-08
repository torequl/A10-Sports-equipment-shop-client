import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex flex-col gap-6 justify-center items-center">

                <h2 className="text-4xl font-bold">404 PAGE NOT FOUND</h2>
                <Link to='/' className="btn btn-primary">Back To Home</Link>
            
        </div>
    );
};

export default Error;