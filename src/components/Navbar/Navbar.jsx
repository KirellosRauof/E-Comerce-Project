import { useContext } from "react";
import logo from "../../assets/images/images-removebg-preview.png";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  let navigate = useNavigate();

  function Logout() {
    localStorage.setItem("userToken", "");
    setuserToken("");
    navigate("/login");
  }

  let { userToken, setuserToken } = useContext(UserContext);
  let { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <nav className="bg-gray-100 lg:fixed top-0 right-0 left-0 z-50 ">
        <div className="container mx-auto justify-between flex flex-col lg:flex-row ">
          <div className="flex flex-col lg:flex-row items-center ">
            <img width={100} src={logo} alt="logo" />
            <ul className="flex flex-col lg:flex-row my-auto items-center">
              {userToken !== "" ? (
                <>
                  <li className="py-2">
                    <NavLink
                      className="mx-2 text-lg text-slate-900 font-light"
                      to=""
                    >
                      Home
                    </NavLink>
                  </li>
                  {/* <li className="py-2">
                    <NavLink
                      className="mx-2 py-2 text-lg text-slate-900 font-light"
                      to="cart"
                    >
                      Cart
                    </NavLink>
                  </li> */}
                  <li className="py-2">
                    <NavLink
                      className="mx-2 py-2 text-lg text-slate-900 font-light"
                      to="categories"
                    >
                      Categories
                    </NavLink>
                  </li>

                  <li className="py-2">
                    <NavLink
                      className="mx-2 py-2 text-lg text-slate-900 font-light"
                      to="product"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink
                      className="mx-2 py-2 text-lg text-slate-900 font-light"
                      to="brands"
                    >
                      Brands
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row ">
            <ul className="flex flex-col lg:flex-row my-auto items-center ">
              {userToken === "" ? (
                <>
                  <li className="py-2">
                    <NavLink
                      className="mx-2 text-lg text-slate-900 font-light"
                      to="login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink
                      className="mx-2 py-2 text-lg text-slate-900 font-light"
                      to="register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* <span className="relative">
                    <i className="fa-solid fa-xl fa-cart-shopping relative">
                      <li className="bg-green-400 rounded-xl text-slate-50 absolute top-0 right-0">
                        {cart?.numOfCartItems}
                      </li>
                    </i>
                  </span> */}
                  <li>
                    <NavLink to="/cart" className="relative">
                      <span className="absolute text-lime-50 -top-3 -right-2 bg-green-400 rounded-lg p-1">
                        {cart?.numOfCartItems}
                      </span>
                      <i className=" fa-solid fa-xl fa-cart-shopping"></i>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => Logout()}
                    className="mx-2 py-2 text-lg text-slate-900 font-light cursor-pointer"
                  >
                    Logout
                  </li>
                </>
              )}

              <li className="flex py-2 ">
                <i className="fab mx-2 fa-youtube"></i>
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-tiktok"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
