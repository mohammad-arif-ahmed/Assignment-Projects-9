
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const SkillCard = ({ skill }) => {
    const { skillId, skillName, price, rating, image, category } = skill;

    return (
        <div 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            data-aos="fade-up"
        >
            {/* Skill Image */}
            <img 
                src={image} 
                alt={skillName} 
                className="w-full h-48 object-cover object-center" 
            />
            
            <div className="p-5 space-y-3">
                
                {/* Skill Name & Category */}
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{category}</span>
                <h3 className="text-xl font-bold text-gray-800 hover:text-violet-600 transition duration-200">
                    {skillName}
                </h3>
                
                {/* Rating & Price */}
                <div className="flex justify-between items-center text-gray-600">
                    <p className="flex items-center text-sm font-semibold">
                        <FaStar className="text-yellow-400 mr-1" />
                        {rating} 
                    </p>
                    <p className="text-lg font-extrabold text-violet-600">
                        ${price} / Session
                    </p>
                </div>
                
                {/* View Details Button */}
                <Link 
                    to={`/skill-details/${skillId}`} 
                    className="w-full block text-center mt-4 px-4 py-2 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition duration-300 font-semibold"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default SkillCard;