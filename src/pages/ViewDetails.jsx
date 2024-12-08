import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const loadedDetails = useLoaderData()
    return (

        <div className="max-w-4xl my-10 mx-auto p-6 border rounded-md">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 w-full lg:w-1/3">
                    <img
                        src={loadedDetails.imageUrl}
                        alt={loadedDetails.itemName}
                        className="rounded-md object-cover"
                    />
                </div>

                <div className="flex-grow">
                    <h1 className="text-3xl font-bold text-primary dark:text-yellow-200 mb-2">
                        {loadedDetails.itemName}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-white mb-4">Category: {loadedDetails.categoryName}</p>
                    <p className="text-base mb-4">{loadedDetails.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Price:</span>
                            <span className="text-lg font-bold text-success">${loadedDetails.price}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Rating:</span>
                            <span className="text-lg text-yellow-500">{loadedDetails.rating} ★</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Stock Status:</span>
                            <span>{loadedDetails.stockStatus} items available</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Processing Time:</span>
                            <span>{loadedDetails.processingTime}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Customization:</span>
                            <span>{loadedDetails.customization}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;