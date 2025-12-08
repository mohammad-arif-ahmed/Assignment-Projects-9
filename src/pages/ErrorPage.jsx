
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider"; 
import toast from "react-hot-toast"; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext); 
    const [isOpen, setIsOpen] = useState(false); 

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
                    isActive ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600"
                }
            >
                Home
            </NavLink></li>
            
            {user && (
                <li><NavLink 
                    to="/my-profile" 
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                        isActive ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" : "text-gray-700 hover:text-blue-600"
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
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                
                <Link to="/" className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition duration-300">
                    SkillSwap
                </Link>

                <ul className="hidden lg:flex items-center space-x-6">
                    {navLinks}
                </ul>

                <div className="flex items-center space-x-4">
                    
                    {user ? (
                        <div className="flex items-center space-x-3">
                            <div 
                                className="relative group" 
                            >
                                <img 
                                    className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-blue-400" 
                                    src={user.photoURL || 'https://i.ibb.co/3k5f50y/default-avatar.png'}
                                    alt="User Profile" 
                                />
                                <div className="absolute hidden group-hover:block top-full mt-2 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
                                    {user.displayName || user.email || 'User'}
                                </div>
                            </div>

                            <button 
                                onClick={handleLogOut} 
                                className="btn btn-sm px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-x-2">
                            <Link to="/login" className="btn btn-sm px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                Login
                            </Link>
                            <Link to="/signup" className="btn btn-sm px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hidden sm:inline-flex transition duration-300">
                                Sign Up
                            </Link>
                        </div>
                    )}
                    
                    <button 
                        className="lg:hidden text-gray-700 text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className={`absolute top-full left-0 w-full bg-white shadow-lg lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <ul className="flex flex-col items-start space-y-3 p-4">
                        {navLinks}
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;