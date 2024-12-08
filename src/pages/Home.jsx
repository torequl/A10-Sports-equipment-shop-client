import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import ProductCategory from "../components/ProductCategory";


const Home = () => {
    const loadedEquipments = useLoaderData()
    const sixData = loadedEquipments.slice(0, 6)
    return (
        <div>
            <Slider />
            <h3 className="text-2xl md:text-4xl font-bold text-center my-10">Our Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-11/12 my-10 product-card">
                {
                    sixData.map(data => <ProductCard key={data._id} equipment={data} />)
                }
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-center mt-40">Our Products Category</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 w-10/12 mx-auto mb-40 mt-10">
                {
                    sixData.slice(0, 4).map(data => <ProductCategory equipment={data} key={data._id} />)
                }
            </div>

            <div className="-mb-52">
                <Newsletter />
            </div>
        </div>
    );
};

export default Home;