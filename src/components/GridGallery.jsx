
const GridGallery = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 my-10">
            <div className="flex justify-center items-center bg-gray-100">
                <div className="relative">
                    <img src="http://bikeway.themes.zone/wp-content/uploads/2011/05/front_banner_1.jpg" alt="" className="w-[400px] h-[250px] object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg flex flex-col justify-center items-start p-6">
                        <h2 className="text-white text-2xl font-bold">BIKES</h2>
                        <p className="text-white mt-2">FEEL THE HEAT. Shop our <br /> range of sport bikes.</p>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100">
                <div className="relative">
                    <img src="http://bikeway.themes.zone/wp-content/uploads/2011/05/front_banner_3.jpg" alt="" className="w-[400px] h-[250px] object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg flex flex-col justify-center items-start p-6">
                        <h2 className="text-white text-2xl font-bold">PARTS</h2>
                        <p className="text-white mt-2">FEEL THE HEAT. Shop our <br /> range of sport bikes.</p>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100">
                <div className="relative">
                    <img src="http://bikeway.themes.zone/wp-content/uploads/2011/05/front_banner_2.jpg" alt="" className="w-[400px] h-[250px] object-cover rounded-lg" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg flex flex-col justify-center items-start p-6">
                        <h2 className="text-white text-2xl font-bold">BIKES</h2>
                        <p className="text-white mt-2">FEEL THE HEAT. Shop our <br /> range of sport bikes.</p>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridGallery;