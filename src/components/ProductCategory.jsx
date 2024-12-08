

// eslint-disable-next-line react/prop-types
const ProductCategory = ({ equipment }) => {
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <img
            className="w-48 h-48 rounded-full p-4 border shadow-md"
            src={equipment.imageUrl} 
            alt="" />
            <p className="text-xl uppercase font-bold text-center">{equipment.categoryName}</p>
        </div>
    );
};

export default ProductCategory;