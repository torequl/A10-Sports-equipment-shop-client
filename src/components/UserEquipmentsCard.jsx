
const UserEquipmentsCard = ({data}) => {
    return (
        <div className="max-w-sm mx-auto bg-base-100 shadow-md rounded-md overflow-hidden">
            {/* Image Section */}
            <img
                src={data.imageUrl}
                alt={data.itemName}
                className="w-full h-48 object-cover"
            />

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-primary mb-2">{data.itemName}</h2>
                <p className="text-sm text-gray-500 mb-4">Category: {data.categoryName}</p>
                <p className="text-gray-700 text-sm mb-4">{data.description}</p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                        <span className="font-semibold">Price:</span> ${data.price}
                    </div>
                    <div>
                        <span className="font-semibold">Rating:</span> {data.rating} ★
                    </div>
                    <div>
                        <span className="font-semibold">Stock:</span> {data.stockStatus} pcs
                    </div>
                    <div>
                        <span className="font-semibold">Processing:</span> {data.processingTime}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        className="btn btn-primary btn-sm"
                        // onClick={() => onUpdate(data._id)}
                    >
                        Update
                    </button>
                    <button
                        className="btn btn-error btn-sm"
                        // onClick={() => onDelete(data._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserEquipmentsCard;