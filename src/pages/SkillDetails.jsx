
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import allSkills from '../assets/data/skills.json'; 
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const SkillDetails = () => {
    const { id } = useParams(); 
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        const foundSkill = allSkills.find(s => s.skillId === parseInt(id));
        setSkill(foundSkill);

        if (!foundSkill) {
            toast.error("Skill not found!");
            navigate('/error');
        }
    }, [id, navigate]);

    const handleBookSession = () => {
        if (!user) {
            toast.error("Please login to book a session.");
            navigate('/login');
            return;
        }

        const bookingInfo = {
            skillId: skill.skillId,
            skillName: skill.skillName,
            price: skill.price,
            userEmail: user.email,
            userName: user.displayName,
            bookingDate: new Date().toLocaleDateString(),
        };

        console.log("Booking Attempt:", bookingInfo);
        
        
        toast.success(`Session booked for ${skill.skillName}! Check your profile for details.`);
        navigate('/my-profile'); 
    };

    if (!skill) {
        return <div className="text-center py-20 text-gray-500">Loading skill details...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden md:flex border border-gray-100">
                
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img src={skill.image} alt={skill.skillName} className="w-full h-96 object-cover object-center" />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-8 space-y-6">
                    <span className="text-sm font-semibold text-violet-600 bg-violet-100 px-4 py-1 rounded-full uppercase">{skill.category}</span>
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{skill.skillName}</h1>
                    
                    <p className="text-gray-700 text-lg">{skill.description}</p>
                    
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                        <p className="text-xl font-bold text-violet-600">Price: ${skill.price} / Session</p>
                        <p className="flex items-center text-lg font-medium text-gray-600">
                            Rating: <span className="ml-2 text-yellow-500 flex items-center">{skill.rating} / 5</span>
                        </p>
                        <p className="text-md text-gray-500">Provider: {skill.providerName}</p>
                    </div>

                    {/* Book Button */}
                    <button 
                        onClick={handleBookSession}
                        className="w-full mt-6 px-6 py-3 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition duration-300 font-bold text-lg shadow-lg shadow-violet-200/50"
                    >
                        Book Session Now
                    </button>
                    
                    <div className="text-center text-sm text-gray-500 pt-4">
                        * You must be logged in to book a session.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetails;