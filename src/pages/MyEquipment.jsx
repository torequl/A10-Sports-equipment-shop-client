import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyEquipment = () => {
    const loadedUserAddedData = useLoaderData();
    const [userEquipments, setUserEquipments] = useState(loadedUserAddedData);

    const handelDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = userEquipments.filter(data => data._id !== id);
            setUserEquipments(remaining)
        })
    }

    return (
        <>
            <h2>My Equipments {userEquipments.length}</h2>
            <div className="flex flex-wrap gap-5 my-10">
                {
                    userEquipments.map(data =>

                        <div key={data._id} className="max-w-sm mx-auto bg-base-100 border rounded-md overflow-hidden">
                            <img
                                src={data.imageUrl}
                                alt={data.itemName}
                                className="w-full h-56 object-contain"
                            />

                            <div className="p-4">
                                <h2 className="text-xl font-bold text-primary mb-2">{data.itemName}</h2>
                                <p className="text-sm text-gray-500 mb-4">Category: {data.categoryName}</p>
                                <p className="text-gray-700 text-sm mb-4">{data.description}</p>

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

                                <div className="flex justify-between">
                                    <Link
                                        to={`/update/${data._id}`}
                                        className="btn btn-primary btn-sm"
                                    // onClick={() => onUpdate(data._id)}
                                    >
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-error btn-sm"
                                        onClick={() => handelDelete(data._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default MyEquipment;