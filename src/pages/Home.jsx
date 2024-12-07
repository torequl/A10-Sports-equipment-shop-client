import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaPinterestP, FaTwitter } from "react-icons/fa";


const Home = () => {
    const loadedEquipments = useLoaderData()
    const sixData = loadedEquipments.slice(0, 6)
    return (
        <div>
            <Slider />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-11/12 my-10 product-card">
                {
                    sixData.map(data => <ProductCard key={data._id} equipment={data} />)
                }
            </div>

            <div className="flex border w-8/12 mx-auto my-20">
                <div className="w-1/2">
                    <img
                        src="https://demo1.leotheme.com/bos_gymgear_demo/themes/bos_gymgear/assets/img/modules/appagebuilder/images/banner_5_h1.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-1/2 bg-gray-100 p-8">
                    <h2 className="text-4xl font-bold mb-3">JOIN OUR NEWSLETTER</h2>
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
                    <div className="text-black">
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
        </div>
    );
};

export default Home;