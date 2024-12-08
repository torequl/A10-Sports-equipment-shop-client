import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {

    const equipmentsLoader = useLoaderData()

    const [equipments, setEquipments] = useState(equipmentsLoader)

    const handleSort = () => {
        const sorted = [...equipments].sort((a, b) => a.price - b.price);
        setEquipments(sorted);
    }
    
    return (
        <div className="py-10">
            <div className="flex justify-between w-10/12 mx-auto items-center">
            <h2 className="text-center uppercase font-bold text-xl">All Equipments {equipments.length} </h2>
            <button onClick={handleSort} className="btn btn-warning">Sort By Price</button>
            </div>
            <div className="overflow-x-auto w-10/12 mx-auto border my-10 rounded-sm">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-100 text-base">
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Processing Time</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipments.map((e, index) => 
                                <tr key={e._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{e.itemName}</td>
                                    <td>{e.categoryName}</td>
                                    <td>{e.rating}</td>
                                    <td>{e.stockStatus}</td>
                                    <td>{e.processingTime}</td>
                                    <td>{e.price}</td>
                                    <td>
                                        <Link to={`/details/${e.itemName}`} className="btn btn-xs">View Details</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;