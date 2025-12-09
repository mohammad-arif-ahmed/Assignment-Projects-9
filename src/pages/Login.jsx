
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); 
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const from = location.state?.from?.pathname || "/"; 

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError(''); 

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success("Login successful! Welcome back.");
                navigate(from, { replace: true }); 
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid email or password. Please try again.");
                toast.error("Login failed. Check details.");
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Signed in with Google successfully!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error("Google sign-in failed.");
            });
    };


    return (
        <div className="container mx-auto px-4 py-12 flex justify-center items-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl shadow-violet-100/50 border border-gray-100">
                
                <h2 className="text-3xl font-bold text-center text-violet-600">Login to SkillSwap</h2>
                <p className="text-center text-gray-500">Welcome back! Access your shared skills.</p>

                <form onSubmit={handleLogin} className="space-y-5">
                    
                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Email Address</label>
                        <input type="email" name="email" placeholder="you@example.com" required 
                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="••••••••" required 
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 pr-10" />
                            
                            {/* Password Toggle Button */}
                            <span onClick={() => setShowPassword(!showPassword)} 
                                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        
                        <div className="flex justify-end mt-2">
                             <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-violet-600 font-medium">Forgot Password?</Link>
                        </div>

                        {/* Login Error */}
                        {loginError && (
                            <p className="text-red-500 text-sm mt-1 font-medium text-center">{loginError}</p>
                        )}
                    </div>
                    
                    {/* Login Button */}
                    <button type="submit" 
                            className="w-full px-4 py-2 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition duration-300 font-semibold shadow-md shadow-violet-200/50">
                        Login
                    </button>
                </form>

                {/* Social Login & Link to Signup */}
                <div className="space-y-4">
                    <div className="divider text-gray-400">OR</div>
                    
                    {/* Google Login Button */}
                    <button onClick={handleGoogleSignIn} type="button" 
                            className="w-full flex justify-center items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 12.01c0-.79-.07-1.54-.2-2.28H12v4.3h5.71a5.19 5.19 0 0 1-2.25 3.39v2.89h3.75c2.2-2.03 3.44-5.04 3.44-8.4z"/><path d="M12 21c3.27 0 5.86-1.09 7.82-2.97l-3.75-2.89c-.98.71-2.24 1.13-4.07 1.13-3.08 0-5.7-2.06-6.65-4.83H1.67v2.95c1.97 3.9 6.2 6.74 10.33 6.74z"/><path d="M5.35 14.83c-.24-.71-.38-1.46-.38-2.26s.14-1.55.38-2.26V7.4h-4.04c-.66 1.3-1.01 2.76-1.01 4.29s.35 2.99 1.01 4.29l4.04-2.95z"/><path d="M12 5.01c1.88 0 3.38.65 4.6 1.77l3.3-3.3c-2.04-1.89-4.73-3.13-7.9-3.13-4.13 0-8.36 2.84-10.33 6.74l4.04 2.95c.95-2.77 3.57-4.83 6.65-4.83z"/></svg>
                        <span>Login with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? 
                        <Link to="/signup" className="text-violet-600 hover:text-violet-700 font-semibold ml-1">Register here</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;