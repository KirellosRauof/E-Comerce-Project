import { Link } from "react-router-dom";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, isLoading, isError } = useQuery({
    queryKey: "recentProducts",
    queryFn: getRecent,
    // refetchInterval: 3000,
    // refetchIntervalInBackground: true,
    // staleTime: 0,
    //  refetchOnWindowFocus:true,
  });

  if (isLoading) {
    return (
      <div className="py-8 w-full justify-center text-3xl flex">
        <ClimbingBoxLoader size={20} color="#22d058" />
      </div>
    );
  }
  return (
    <>
      <div className="row">
        {data?.data.data.map((product) => (
          <>
            <div key={product.id} className="w-1/6 px-4">
              <div className="product py-4">
                <Link
                  to={`/productDetails/${product.id}/${product.category.name}`}
                >
                  <img
                    className="w-full"
                    src={product.imageCover}
                    alt={product.title}
                  />
                  <span className="font-light text-green-700">
                    {product.category.name}
                  </span>
                  <h3 className="text-lg font-normal text-gray-600 mb-4">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <div className="flex justify-between">
                    <span>{product.price} EPY</span>
                    <span>
                      {product.ratingsAverage}
                      <i className="fas fa-star text-yellow-300"></i>
                    </span>
                  </div>
                  <button className="btn">Add To Cart</button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
