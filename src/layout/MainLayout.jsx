
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MainLayout = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-xl text-blue-600 font-semibold">Loading Application...</span>
            </div>
        );
    }

    return (
        <div>
            <Navbar /> 
            
            <div className="min-h-[calc(100vh-80px)]"> 
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;