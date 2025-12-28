
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import SkillCard from '../components/SkillCard';
import providersData from "../assets/data/topProvider.json";
import allSkills from "../assets/data/skills.json";
import ProviderCard from '../components/ProviderCard';
import { Link } from 'react-router-dom';


const Home = () => {
    const popularSkills = allSkills.slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8">

            {/* ১. Hero Slider Section */}
            <section className="my-12" data-aos="fade-down">
                <HeroSlider />
            </section>

            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                    🔥 Popular Skills Near You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {popularSkills.map(skill => (
                        <SkillCard key={skill.skillId} skill={skill} />
                    ))}

                </div>
                <div className="mt-12 text-center">
                    <Link to="/all-skills">
                        <button className="btn btn-outline border-violet-600 text-violet-600 hover:bg-violet-600 hover:border-violet-600 px-8 rounded-full font-bold shadow-lg transition duration-300">
                            See All Skills
                        </button>
                    </Link>
                </div>
            </section>

            {/* ৩. Extra Section 1: Top Rated Providers */}
            <section className="my-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                    ⭐ Top Rated Providers
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg text-gray-600">
                    <section className="my-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">⭐ Top Rated Providers</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {providersData.map(provider => (
                                <ProviderCard key={provider.id} provider={provider} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            {/* ৪. Extra Section 2: How It Works */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                    💡 How SkillSwap Works
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-violet-500" data-aos="fade-up">
                        <span className="text-xl font-bold text-violet-600">Step 1: Discover</span>
                        <p className="text-gray-600 mt-2">Browse popular skills or search by category.</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-violet-500" data-aos="fade-up" data-aos-delay="100">
                        <span className="text-xl font-bold text-violet-600">Step 2: Book</span>
                        <p className="text-gray-600 mt-2">Book a session with your chosen mentor.</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-violet-500" data-aos="fade-up" data-aos-delay="200">
                        <span className="text-xl font-bold text-violet-600">Step 3: Swap</span>
                        <p className="text-gray-600 mt-2">Learn, share, and rate your experience!</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;