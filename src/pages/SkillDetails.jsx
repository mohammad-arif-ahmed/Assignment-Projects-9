
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
    const [isModalOpen, setIsModalOpen] = useState(false); 

    useEffect(() => {
        const foundSkill = allSkills.find(s => s.skillId === parseInt(id));
        setSkill(foundSkill);
    }, [id]);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const notes = form.notes.value;
        const date = form.date.value;

        const bookingDetails = {
            skillName: skill.skillName,
            userEmail: user.email,
            appointmentDate: date,
            additionalNotes: notes
        };

        console.log("Booking Confirmed:", bookingDetails);
        toast.success(`Success! Session booked for ${skill.skillName}`);
        setIsModalOpen(false); 
    };

    if (!skill) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            {/* স্কিল ডিটেইলস কার্ড */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex border border-gray-100">
                <div className="md:w-1/2">
                    <img src={skill.image} alt={skill.skillName} className="w-full h-full object-cover min-h-[350px]" />
                </div>

                <div className="md:w-1/2 p-8 lg:p-12 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-bold uppercase tracking-wider">
                        {skill.category}
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{skill.skillName}</h1>
                    <p className="text-gray-600 text-lg leading-relaxed">{skill.description}</p>
                    
                    <div className="flex items-center justify-between py-4 border-t border-b border-gray-100">
                        <span className="text-3xl font-bold text-violet-600">${skill.price}</span>
                        <span className="text-gray-500 font-medium">Rating: ⭐ {skill.rating}</span>
                    </div>
                    
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full py-4 bg-violet-600 text-white rounded-xl font-bold text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200"
                    >
                        Book Service Now
                    </button>
                </div>
            </div>

            {/* --- 📝 কাস্টম টেইলউইন্ড মোডাল --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* ব্যাকগ্রাউন্ড ওভারলে */}
                    <div 
                        className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* মোডাল কন্টেন্ট */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 overflow-hidden transform transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Complete Booking</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-red-500 text-2xl transition-colors"
                            >
                                &times;
                            </button>
                        </div>
                        
                        <form onSubmit={handleBookingSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
                                <input 
                                    type="email" 
                                    value={user?.email} 
                                    readOnly 
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 outline-none" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    required 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes</label>
                                <textarea 
                                    name="notes" 
                                    rows="3"
                                    placeholder="Write any special requests..." 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-3 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-700 shadow-md transition-colors"
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillDetails;