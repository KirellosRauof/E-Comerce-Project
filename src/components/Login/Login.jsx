import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  let { setuserToken } = useContext(UserContext);

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("email is invalied").required("email is requerd"),

    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password must start uppercase")
      .required("password is required"),
  });
  let [apiErrors, setApiErros] = useState("");
  let [isLoading, setIsloading] = useState(false);

  let navigate = useNavigate();
  async function handleLogin(formValues) {
    setIsloading(true);
    console.log(formValues);

    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
      .then((apiResponse) => {
        console.log(apiResponse);
        navigate("/");
        setIsloading(false);
        if (apiResponse.data.message === "success") {
          localStorage.setItem("userToken", apiResponse.data.token);
          setuserToken(apiResponse.data.token);
          navigate("/");
        }
      })
      .catch((apiResponse) => {
        setIsloading(false);
        setApiErros(apiResponse?.response?.data?.message);
        // console.log(apiResponse?.response?.data?.message);
      });
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

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="py-6 max-w-xl mx-auto">
        <div className="text-3xl text-left font-bold text-green-600 mb-6 start-0">
          Login Now
        </div>
        {apiErrors ? (
          <div
            className="p-4  mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <div className="text-left ">{apiErrors}</div>
          </div>
        ) : null}

        <form onClick={formik.handleSubmit} className="max-w-md ">
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="start-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your email
            </label>
          </div>

          {formik.errors.email && formik.touched.email ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.email}
            </div>
          ) : null}

          <div className="relative z-0 w-full mb-5 group">
            <input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="start-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your password
            </label>
          </div>

          {formik.errors.password && formik.touched.password ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.password}
            </div>
          ) : null}

          <button
            type="submit"
            className="me-0 start-0 text-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
