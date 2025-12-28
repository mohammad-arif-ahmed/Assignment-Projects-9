const WorkshopCard = ({ workshop }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
            <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{workshop.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-5">
                    <p className="flex items-center gap-2">📅 {workshop.date}</p>
                    <p className="flex items-center gap-2">🕒 {workshop.time}</p>
                    <p className="flex items-center gap-2">👥 {workshop.slots}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t pt-4">
                    <span className="text-2xl font-extrabold text-teal-500">৳{workshop.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-colors">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkshopCard;