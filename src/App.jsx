import "./App.css";
import { CounterContextProvider } from "./Context/CounterContext";
import { UserContextProvider } from "./Context/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Brands from "./components/Brands/Brands";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import Categorise from "./components/Categorise/Categorise";
import ProtectedRout from "./components/ProtectedRout/ProtectedRout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Notfound from "./components/Notfound/Notfound";
import Test from "./components/Test/Test";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import CheckOut from "./components/CheckOut/CheckOut";
import Orders from "./components/Orders/Orders";
import CategorySlider from "./components/categorySlider/categorySlider";

let query = new QueryClient();

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRout>
              <Home />
            </ProtectedRout>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "categories",
          element: (
            <ProtectedRout>
              <Categorise />
            </ProtectedRout>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRout>
              <Brands />
            </ProtectedRout>
          ),
        },
        {
          path: "test",
          element: (
            <ProtectedRout>
              <Test />
            </ProtectedRout>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRout>
              <Cart />
            </ProtectedRout>
          ),
        },
        {
          path: "product",
          element: (
            <ProtectedRout>
              <Products />
            </ProtectedRout>
          ),
        },
        { path: "register", element: <Register /> },
        {
          path: "productDetails/:id/:category",
          element: (
            <ProtectedRout>
              <ProductDetails />
            </ProtectedRout>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRout>
              <CheckOut />
            </ProtectedRout>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRout>
              <Orders />
            </ProtectedRout>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRout>
              <Orders />
            </ProtectedRout>
          ),
        },
        {
          path: "categorySlider",
          element: (
            <ProtectedRout>
              <CategorySlider />
            </ProtectedRout>
          ),
        },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={query}>
        <UserContextProvider>
          <CounterContextProvider>
            <CartContextProvider>
              <RouterProvider router={x}></RouterProvider>
              <ReactQueryDevtools />
              <Toaster />
            </CartContextProvider>
          </CounterContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
