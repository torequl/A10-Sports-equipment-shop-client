import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";


const AddEquipment = () => {

    const { user } = useContext(authContext)

    console.log(user);

    const [formData, setFormData] = useState({
        imageUrl: '',
        itemName: '',
        categoryName: '',
        description: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { ...formData });

        fetch('http://localhost:5000/equipments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...formData })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                            onChange={handleChange}
                            className="input input-bordered"
                            placeholder="Enter image URL"
                            required
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
                            onChange={handleChange}
                            className="input input-bordered"
                            placeholder="Enter item name"
                            required
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
                            onChange={handleChange}
                            className="input input-bordered "
                            placeholder="Enter category name"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            className="textarea textarea-bordered "
                            placeholder="Enter description"
                            required
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
                            onChange={handleChange}
                            className="input input-bordered "
                            placeholder="Enter price"
                            required
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
                            onChange={handleChange}
                            className="input input-bordered "
                            placeholder="Enter rating (1-5)"
                            min="1"
                            max="5"
                            required
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className="input input-bordered "
                            placeholder="Enter processing time (e.g., 3-5 days)"
                            required
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
                            onChange={handleChange}
                            className="input input-bordered "
                            placeholder="Enter available quantity"
                            required
                        />
                    </div>

                    {/* User Email (Read-only) */}
                    <div className="form-control w-[48%]">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input
                            type="email"
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
                        value={user?.displayName}
                        readOnly
                        className="input input-bordered  bg-gray-100"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control">
                    <button type="submit" className="btn btn-primary w-full">
                        Submit Equipment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;