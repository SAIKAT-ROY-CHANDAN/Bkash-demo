import { useParams } from "react-router-dom";
import { demoData } from "../constants";
import Checkout from "../components/Checkout";

const ProductDetails = () => {
  const { id } = useParams();
  const product = demoData.find((item) => item.id === parseInt(id));

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600 my-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-600 my-4">
            Price: {product.price}
          </p>
         <Checkout />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
