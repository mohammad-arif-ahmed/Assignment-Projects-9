
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider"; 
import toast from "react-hot-toast"; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import siteLogo from '../assets/logo.png'; 

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext); 
    const [isOpen, setIsOpen] = useState(false); 

    const defaultAvatar = 'https://i.ibb.co.com/qYrhk6YS/codingx.png';

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch(error => {
                console.error(error);
                toast.error("Logout failed. Please try again.");
            });
    };

    const navLinks = (
        <>
            <li><NavLink 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                    isActive ? "text-violet-600 font-bold border-b-2 border-violet-600 pb-1" : "text-gray-600 hover:text-violet-600 transition duration-200"
                }
            >
                Home
            </NavLink></li>
            
            {user && (
                <li><NavLink 
                    to="/my-profile" 
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                        isActive ? "text-violet-600 font-bold border-b-2 border-violet-600 pb-1" : "text-gray-600 hover:text-violet-600 transition duration-200"
                    }
                >
                    My Profile
                </NavLink></li>
            )}
            
        </>
    );
    
    if (loading) {
        return null;
    }

    return (
        <nav className="bg-white shadow-lg shadow-gray-100 sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                
                <Link to="/" className="flex items-center space-x-2">
                    <img src={siteLogo} alt="SkillSwap Logo" className="w-8 h-8"/> 
                    <span className="text-3xl font-extrabold text-violet-600 hover:text-violet-700 transition duration-300 tracking-wider">
                        SkillSwap
                    </span>
                </Link>

                {/* ২. ডেস্কটপ মেনু */}
                <ul className="hidden lg:flex items-center space-x-8 text-lg font-medium">
                    {navLinks}
                </ul>

                {/* ৩. Auth Buttons / Profile & Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    
                    {user ? (
                        <div className="flex items-center space-x-3">
                            <div 
                                className="relative group" 
                            >
                                <img 
                                    className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-violet-400 transition duration-200 hover:border-violet-600" 
                                    src={user.photoURL || defaultAvatar}
                                    alt="User Profile" 
                                />
                                {/* Custom Tooltip */}
                                <div className="absolute hidden group-hover:block top-full mt-2 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap opacity-90 transition duration-300">
                                    {user.displayName || user.email || 'User'}
                                </div>
                            </div>

                            <button 
                                onClick={handleLogOut} 
                                className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 font-medium shadow-md"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-x-3">
                            <Link to="/login" className="px-4 py-2 text-sm bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition duration-300 font-medium shadow-md shadow-violet-200/50">
                                Login
                            </Link>
                            <Link to="/signup" className="px-4 py-2 text-sm border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-600 hover:text-white hidden sm:inline-flex transition duration-300 font-medium">
                                Sign Up
                            </Link>
                        </div>
                    )}
                    
                    <button 
                        className="lg:hidden text-gray-700 text-2xl hover:text-violet-600 transition duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className={`absolute top-[68px] left-0 w-full bg-white shadow-xl shadow-gray-200/50 lg:hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <ul className="flex flex-col items-start space-y-4 p-4 font-medium">
                        {navLinks}
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;