import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipment = () => {
    const loadedUserAddedData = useLoaderData();
    const [userEquipments, setUserEquipments] = useState(loadedUserAddedData);

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = userEquipments.filter(data => data._id !== id);
                            setUserEquipments(remaining)
                        }
                    })
            }
        });

    }

    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">My Equipments ({userEquipments.length})</h2>
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