import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const loadedEquipments = useLoaderData()
    const sixData = loadedEquipments.slice(0, 6)
    return (
        <div>
            <Slider />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto w-11/12 my-10">
                {
                    sixData.map(data => <ProductCard key={ data._id } equipment={data} />)
                }
            </div>
        </div>
    );
};

export default Home;