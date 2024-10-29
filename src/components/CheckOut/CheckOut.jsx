import { useFormik } from "formik";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";

export default function CheckOut() {
  let { CheckOutt } = useContext(CartContext);

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: () =>
      handleCheckOut("67127ab5c1f7e7e8aaf0cf05", "http://localhost:5173/"),
  });

  async function handleCheckOut(cartId, url) {
    let { data } = await CheckOutt(cartId, url, formik.values);
    if (data?.status === "success") {
      window.location.href = data?.session.url;
    }

    // console.log(data);
  }

  // function myValidation(values) {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   } else if (!/^[A-Z][a-z]{3,5}$/.test(values.name)) {
  //     errors.name = "Name must start with UpperCase ";
  //   }

  //   if (!values.email) {
  //     errors.email = "email is required";
  //   } else if (
  //     !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
  //       values.email
  //     )
  //   ) {
  //     errors.email = "email invalid";
  //   }

  //   return errors;
  // }

  return (
    <>
      <div className="py-6 max-w-xl mx-auto">
        <div className="text-3xl text-left font-bold text-green-600 mb-6 start-0">
          CheckOut Now
        </div>

        <form onClick={formik.handleSubmit} className="max-w-md ">
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="details"
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className="start-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your Details
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="start-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your Phone
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="city"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="city"
              className="start-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your city
            </label>
          </div>

          <button
            type="submit"
            className="me-0 start-0 text-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
}
