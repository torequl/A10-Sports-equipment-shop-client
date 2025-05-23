import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const equipmentCard = ({ equipment }) => {
    return (
        <Fade>
            <div className="max-w-sm bg-base-100 dark:bg-gray-900 border rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200">

                <a data-tooltip-id="my-tooltip" data-tooltip-content={`Processing Time: ${equipment.processingTime}`}>
                    <img
                        src={equipment.imageUrl}
                        alt={equipment.itemName}
                        className="h-56 w-full object-contain"
                    />
                </a>

                <div className="p-4">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-2">{equipment.itemName}</h3>
                    <p className="text-gray-500 dark:text-white text-sm mb-4">{equipment.categoryName}</p>

                    {/* Price and Rating */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-success">${equipment.price}</span>
                        <span className="flex items-center text-lg text-yellow-500">
                            {equipment.rating} ★
                        </span>
                    </div>

                    <Link to={`/details/${equipment.itemName}`} className="btn btn-primary w-full"> View Details </Link>
                </div>
            </div>
        </Fade>
    );
};

export default equipmentCard;