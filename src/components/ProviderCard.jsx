const ProviderCard = ({ provider }) => {
    return (
        <div className="p-4 border rounded-xl shadow-sm bg-white flex flex-col items-center">
            <img src={provider.profileImage} alt={provider.name} className="w-20 h-20 rounded-full mb-3 object-cover" />
            <h3 className="font-bold text-lg">{provider.name}</h3>
            <p className="text-violet-600 text-sm">{provider.skillArea}</p>
            <div className="flex justify-between w-full mt-4 text-xs text-gray-500">
                <span>⭐ {provider.rating}</span>
                <span>{provider.totalSessions} Sessions</span>
            </div>
        </div>
    );
};

export default ProviderCard;