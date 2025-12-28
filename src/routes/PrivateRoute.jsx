
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); 

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-violet-500"></div>
                <span className="text-xl text-violet-600 font-semibold">Loading Content...</span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;