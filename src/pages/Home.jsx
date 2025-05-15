import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import ProductCategory from "../components/ProductCategory";
import GridGallery from "../components/GridGallery";


const Home = () => {
    const loadedEquipments = useLoaderData()
    const sixData = loadedEquipments.slice(0, 8)
    return (
        <div>
            <Slider />
            <GridGallery />
            <h3 className="text-2xl md:text-4xl font-bold text-center mt-28 mb-9">Our Latest Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 dark:bg-gray-900 gap-10 mx-auto w-11/12 my-10 product-card">
                {
                    sixData.map(data => <ProductCard key={data._id} equipment={data} />)
                }
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-center mt-20">Our Products Category</h3>

            <div className="flex justify-center flex-wrap gap-10 mb-40 mt-10">
                {
                    sixData.slice(0, 5).map(data => <ProductCategory equipment={data} key={data._id} />)
                }
            </div>
            <Newsletter />
        </div>
    );
};

export default Home;