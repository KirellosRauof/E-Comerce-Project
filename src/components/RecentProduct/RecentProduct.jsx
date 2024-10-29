import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function RecentProduct() {
  // const [RecentProduct, setRecentProduct] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentProductId, setCurrentProductId] = useState();
  // function getRecentProduct() {
  //   axios
  //     .get(`https://ecommerce.routemisr.com/api/v1/products`)
  //     .then(({ data }) => {
  //       console.log(data);
  //       setRecentProduct(data.data);
  //     })
  //     .catch((errors) => {});
  // }

  // useEffect(() => {
  //   getRecentProduct();
  // }, []);
  let { addToCart, setcart } = useContext(CartContext);

  async function addProductToCart(productId) {
    setLoading(true);
    setCurrentProductId(productId);
    let response = await addToCart(productId);
    console.log(response.data);

    if (response.data.status === "success") {
      setcart(response.data);
      toast.success(response.data.message, { position: "top-center" });
      setLoading(false);
    } else {
      toast.error(response.data.message, { position: "top-center" });
      setLoading(false);
    }
    console.log(response);
  }

  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, isLoading } = useQuery({
    queryKey: "recentProducts",
    queryFn: getRecent,
    // refetchInterval: 3000,
    // refetchIntervalInBackground: true,
    // staleTime:8000,
    select: (data) => data?.data?.data,
  });
  console.log(data);

  if (isLoading) {
    return (
      <div className="py-8 w-full justify-center flex">
        <ClimbingBoxLoader size={20} color="#22d058" />
      </div>
    );
  }

  // console.log(response.data.data.data);

  return (
    <>
      <div className="row">
        {data.map((product) => (
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
                </Link>
                <button
                  onClick={() => addProductToCart(product.id)}
                  className="btn"
                >
                  {currentProductId === product.id && loading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    " add to cart"
                  )}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
