import { Link } from "react-router-dom";
import { demoData } from "../constants";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center gap-y-5 pt-10 mx-auto max-w-7xl">
        {demoData.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="size-[280px] bg-gray-100 rounded-md p-5"
          >
            <img src={product?.image} alt="frites" className="rounded-lg mb-2 object-cover h-40 w-full object-center" />
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="bg-black/80 h-8 w-auto flex items-center justify-center p-2 text-sm rounded-xl text-white"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
