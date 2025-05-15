import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="flex flex-col md:flex-row w-full md:w-8/12 mx-auto my-20">
            <div className="w-full md:w-1/2">
                <img
                    src="https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?fm=jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-8">
                <h2 className="text-lx md:text-4xl font-bold mb-3">JOIN OUR NEWSLETTER</h2>
                <p className="mb-6">
                    Make sure that you never miss our interesting news and exclusive
                    promotion. No spam, Ever!
                </p>
                <div className="flex mb-6">
                    <input
                        type="text"
                        placeholder="Your email..."
                        className="border-none px-4 py-2 w-full mr-2 shadow"
                    />
                    <button className="bg-black text-white px-4 py-2 shadow">
                        JOIN
                    </button>
                </div>
                <div className="dark:text-white">
                    Connect us on
                    <div className="flex gap-2 mt-2 text-2xl">
                        <a href="#" className="text-blue-600">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="#" className="text-lightBlue-400">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="#" className="text-rose-700">
                            <FaPinterestP></FaPinterestP>
                        </a>
                        <a href="#" className="text-black">
                            <FaInstagram></FaInstagram>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;