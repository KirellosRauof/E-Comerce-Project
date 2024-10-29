/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  const [cart, setcart] = useState(null);

  function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((respons) => respons)
      .catch((error) => error);
  }

  function addToCart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId,
        },
        { headers }
      )
      .then((respons) => respons)
      .catch((error) => error);
  }

  function updateCartItemCount(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count,
        },
        { headers }
      )
      .then((respons) => respons)
      .catch((error) => error);
  }

  function deleteCartItem(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function CheckOutt(CartId, url, formvalue) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}?url=${url}`,
        {
          shippingAddress: formvalue,
        },
        { headers }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function clearCartItems() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((response) => response)
      .catch((error) => error);
  }

  async function getCart() {
    let response = await getLoggedUserCart();
    console.log(response.data);
    setcart(response.data);
  }
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <CartContext.Provider
        value={{
          getLoggedUserCart,
          addToCart,
          updateCartItemCount,
          deleteCartItem,
          clearCartItems,
          CheckOutt,
          cart,
          setcart,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
}
