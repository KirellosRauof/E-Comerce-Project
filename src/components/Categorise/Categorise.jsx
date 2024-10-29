import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import CategorySlider from "../categorySlider/categorySlider";

export default function Categorise() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true,
  };

  let [Categories, setCategorise] = useState([]);

  function getCategorise() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then(({ data }) => {
        setCategorise(data.data);
      })
      .catch(() => {});
  }

  useEffect(() => {
    getCategorise();      
  }, []);

  return (
    <>
    
      <div className="py-6">
        <h2 className="py-4 text-2xl text-gray-800 font-light text-start">Shop Popular Categories</h2>
        <Slider {...settings}>
          {Categories?.map((category) => (
            <>
              <img
                className="w-full category-img"
                src={category?.image}
                alt={category?.name}
              />
              <h2>{category?.name}</h2>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}
