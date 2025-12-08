
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-900 text-gray-300 border-t-8 border-violet-600">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <aside className="col-span-2 md:col-span-1">
                    <span className="text-3xl font-extrabold text-violet-400 tracking-wider">SkillSwap</span>
                    <p className="text-gray-400 mt-2 text-sm">
                        Local Skill Exchange Platform<br />
                        Connecting communities through learning.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-white font-bold mb-3">Services</h6>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">Skill Exchange</Link>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">Local Mentorship</Link>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">Community Events</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-white font-bold mb-3">Company</h6>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">About Us</Link>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">Contact</Link>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">Privacy Policy</Link>
                    <Link to="/" className="link link-hover hover:text-violet-400 transition duration-200">Terms of Use</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-white font-bold mb-3">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="hover:text-violet-400 transition duration-200" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className="hover:text-violet-400 transition duration-200" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="hover:text-violet-400 transition duration-200" /></a>
                    </div>
                </nav>
            </div>
            <div className="container mx-auto border-t border-gray-700 pt-6 text-center text-sm text-gray-500 mt-8">
                 &copy; 2024 SkillSwap. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;