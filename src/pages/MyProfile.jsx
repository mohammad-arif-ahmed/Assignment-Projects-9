
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { user, handleUpdateProfile } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || '');
    const [photoUrl, setPhotoUrl] = useState(user?.photoURL || '');
    const [isEditing, setIsEditing] = useState(false); 

    const handleUpdate = (e) => {
        e.preventDefault();
        
        handleUpdateProfile(name, photoUrl)
            .then(() => {
                toast.success("Profile updated successfully!");
                setIsEditing(false);
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to update profile. Please try again.");
            });
    };

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center bg-gray-50 min-h-screen">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-6 border border-gray-100">
                
                <h2 className="text-3xl font-bold text-center text-violet-600 border-b pb-3">My Profile</h2>
                
                {/* User Info Display */}
                <div className="flex flex-col items-center space-y-4">
                    <img 
                        className="w-28 h-28 rounded-full object-cover border-4 border-violet-400 shadow-md" 
                        src={user?.photoURL || 'https://i.ibb.co/3k5f50y/default-avatar.png'} // ডিফল্ট অ্যাভাটার
                        alt="User Avatar" 
                    />
                    <h3 className="text-2xl font-bold text-gray-800">{user?.displayName || 'User Name Not Set'}</h3>
                    <p className="text-gray-500 text-lg">{user?.email}</p>
                </div>
                
                {/* Edit Toggle Button */}
                <div className="text-center pt-4">
                    <button 
                        onClick={() => setIsEditing(!isEditing)} 
                        className="px-6 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
                    >
                        {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                    </button>
                </div>

                {/* Profile Update Form (Conditional Rendering) */}
                {isEditing && (
                    <form onSubmit={handleUpdate} className="space-y-4 border-t pt-4 mt-4">
                        <h4 className="text-xl font-semibold text-gray-700">Update Information</h4>
                        
                        {/* Name Input */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Display Name</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name" 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" 
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">Photo URL</label>
                            <input 
                                type="url" 
                                value={photoUrl} 
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" 
                            />
                        </div>
                        
                        {/* Save Button */}
                        <button type="submit" 
                                className="w-full px-4 py-2 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition duration-300 font-semibold shadow-md mt-4">
                            Save Changes
                        </button>
                    </form>
                )}

                {/* Optionally: Display Booked Sessions here later */}
                <div className="pt-6 border-t mt-6">
                    <h4 className="text-xl font-semibold text-gray-700">My Booked Sessions</h4>
                    <p className="text-gray-500 mt-2">No active sessions booked yet.</p>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;