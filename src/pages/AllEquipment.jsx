import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {

    const equipmentsLoader = useLoaderData()

    // const { stockStatus, processingTime, rating, price, categoryName, itemName } = equipmentsLoader;

    console.log(equipmentsLoader);

    return (
        <div className="py-10">
            <h2 className="text-center text-xl">All Equipments {equipmentsLoader.length} </h2>
            <div className="overflow-x-auto w-10/12 mx-auto border my-10 rounded-sm">
                <table className="table bg-white">
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
                            equipmentsLoader.map((e, index) => 
                                <tr key={e._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{e.itemName}</td>
                                    <td>{e.categoryName}</td>
                                    <td>{e.rating}</td>
                                    <td>{e.stockStatus}</td>
                                    <td>{e.processingTime}</td>
                                    <td>{e.price}</td>
                                    <td>
                                        <Link to={`/details/${e._id}`} className="btn btn-xs">View Details</Link>
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