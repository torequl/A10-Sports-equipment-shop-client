import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Swal from "sweetalert2";


const AddEquipment = () => {

    const { user } = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const imageUrl = form.imageUrl.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;

        const formData = {
            name,
            email,
            imageUrl,
            itemName,
            categoryName,
            description,
            price,
            rating,
            customization,
            processingTime,
            stockStatus
        }

        fetch('http://localhost:5000/equipments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Equipment Updated Successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });
                }
                e.target.reset();
            });

    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-base-100 border rounded-md my-10">
            <h1 className="text-2xl font-bold text-center mb-6">Add New Equipment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-between">
                    {/* Image URL */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            className="input input-bordered"
                            placeholder="Enter image URL"
                        />
                    </div>

                    {/* Item Name */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input
                            type="text"
                            name="itemName"
                            className="input input-bordered"
                            placeholder="Enter item name"
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    {/* Category Name */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input
                            type="text"
                            name="categoryName"
                            className="input input-bordered "
                            placeholder="Enter category name"
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered "
                            placeholder="Enter description"
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-between">
                    {/* Price */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            className="input input-bordered "
                            placeholder="Enter price"
                        />
                    </div>

                    {/* Rating */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="number"
                            name="rating"
                            className="input input-bordered "
                            placeholder="Enter rating (1-5)"
                            min="1"
                            max="5"
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    {/* Customization */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <input
                            type="text"
                            name="customization"
                            className="input input-bordered "
                            placeholder="Enter customization options"
                        />
                    </div>

                    {/* Processing Time */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input
                            type="text"
                            name="processingTime"
                            className="input input-bordered "
                            placeholder="Enter processing time (e.g., 3-5 days)"
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    {/* Stock Status */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <input
                            type="number"
                            name="stockStatus"

                            className="input input-bordered "
                            placeholder="Enter available quantity"

                        />
                    </div>

                    {/* User Email (Read-only) */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"

                            value={user?.email}
                            readOnly
                            className="input input-bordered  bg-gray-100"
                        />
                    </div>
                </div>

                {/* User Name (Read-only) */}
                <div className="form-control w-[48%]">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"

                        value={user?.displayName}
                        readOnly
                        className="input input-bordered  bg-gray-100"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control">
                    <button type="submit" className="btn btn-primary w-full">
                        Add New Equipment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;