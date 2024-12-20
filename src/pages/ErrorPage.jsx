import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center p-5 items-center bg-blue-300">
            <div className="card bg-base-100 w-full rounded-md max-w-sm shrink-0 p-5 border-2 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">404 ERROR</h1>
                <h1 className="text-LG font-semibold text-center">PAGE NOT FOUND</h1>
                <Link to='/' className="btn rounded-full btn-accent">Please Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;