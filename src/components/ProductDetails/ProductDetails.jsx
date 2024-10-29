import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

export default function ProductDetails() {
  let { id, category } = useParams();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let [productDetails, setproductDetails] = useState("");
  let [relatedProducts, setrelatedProducts] = useState([]);

  function getProductDetail(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setproductDetails(data.data);
        // console.log(data);
      })
      .catch(() => {});
  }

  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let allProducts = data.data;
        let related = allProducts.filter(
          (product) => product.category.name == category
        );
        setrelatedProducts(related);
        console.log(related);
      })
      .catch(() => {});
  }

  useEffect(() => {
    getProductDetail(id);
    getRelatedProducts(category);
  }, [id, category]);

  return (
    <>
      <div className="row">
        <div className="w-1/4">
          <Slider {...settings}>
            {productDetails?.images?.map((src) => (
              <>
                <img className="w-full " src={src} alt={src?.title} />
              </>
            ))}
          </Slider>
        </div>
        <div className="w-3/4 p-6">
          <h2 className="text-lg font-normal text-gray-950 text-start">
            {productDetails.title}
          </h2>
          <p className="text-gray-600 my-4 font-light text-start">
            {productDetails.description}
          </p>
          <div className="flex justify-between">
            <span>{productDetails.price} EPY</span>
            <span>
              {productDetails.ratingsAverage}
              <i className="fas fa-star text-yellow-300"></i>
            </span>
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      </div>

      <div className="row">
        {relatedProducts.map((product) => (
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
        ))}
      </div>
    </>
  );
}
