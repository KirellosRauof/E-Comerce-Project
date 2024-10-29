import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  let {
    getLoggedUserCart,
    updateCartItemCount,
    deleteCartItem,
    clearCartItems,
    setcart,
  } = useContext(CartContext);

  const [cartDetails, setcartDetails] = useState(null);

  async function getCartItems() {
    let response = await getLoggedUserCart();
    console.log(response.data);
    // important re-render //
    setcartDetails(response.data.data);
  }

  async function updateCartItem(productId, count) {
    let response = await updateCartItemCount(productId, count);
    console.log(response.data.data);
    // important re-render //
    setcartDetails(response.data.data);
  }

  async function deleteItem(productId) {
    let response = await deleteCartItem(productId);
    console.log(response);
    setcartDetails(response.data.data);
    setcart(response.data);
  }

  async function clearItems() {
    let response = await clearCartItems();
    setcartDetails(response.data.data);
  }
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <div className="text-left">
        <button
          onClick={() => clearItems()}
          type="button"
          className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Clear All Items
        </button>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <h2 className="text-center text-3xl text-green-600">Shopping Cart</h2>
        <h3 className="text-center text-2xl py-6">
          Total Cart Price: {cartDetails?.totalCartPrice} EGP
        </h3>
        <table className="w-3/4 mx-auto my-6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {cartDetails?.products.map((product) => (
              <>
                <tr
                  key={product?.product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={product?.product?.imageCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt={product.product.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product?.product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateCartItem(product.product.id, product.count - 1)
                        }
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <span>{product.count}</span>
                      </div>
                      <button
                        onClick={() =>
                          updateCartItem(product.product.id, product.count + 1)
                        }
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price} EGP
                  </td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => deleteItem(product.product.id)}
                      className=" cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </span>
                  </td>
                </tr>
              </>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <Link to={"/checkout"}>
        <button className="btn">CheckOut Now</button>
      </Link>
    </>
  );
}
