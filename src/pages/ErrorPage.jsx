import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
            <h1 className="text-9xl font-extrabold text-violet-600">404</h1>
            <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-500 mt-2 mb-8">
                {error?.statusText || error?.message || "The page you are looking for doesn't exist."}
            </p>
            <Link to="/">
                <button className="btn bg-violet-600 hover:bg-violet-700 text-white px-8 rounded-full">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;