import React, { useState } from 'react';
import allSkills from '../assets/data/skills.json';
import SkillCard from '../components/SkillCard';

const AllSkills = () => {
    const [searchText, setSearchText] = useState("");

    const filteredSkills = allSkills.filter(skill =>
        skill.skillName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Explore All Skills 🚀
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Find the skill you want and start learning by connecting with our best mentors.                </p>

                {/* সার্চ বার */}
                <div className="mt-8 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search for a skill (e.g. React, Yoga)..."
                        className="input input-bordered w-full shadow-md focus:border-violet-500"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            {/* স্কিল লিস্ট */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSkills.length > 0 ? (
                    filteredSkills.map(skill => (
                        <SkillCard key={skill.skillId} skill={skill} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <h3 className="text-2xl text-gray-400">No skills found matching your search.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllSkills;