import MainSlider1 from "../../assets/images/slider-image-1.jpg";
import MainSlider2 from "../../assets/images/slider-image-2.webp";
import MainSlider3 from "../../assets/images/slider-image-3.jpg";
import MainSlider4 from '../../assets/images/slider-image-4.jpg'
import MainSlider5 from "../../assets/images/slider-image-5.jpg";
import Slider from "react-slick";

export default function MainSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows:false
  };

  return (
    <>
      <div className="row">
        <div className="w-3/4">
          <Slider {...settings}>
            <img src={MainSlider1} className="w-full h-[400px]" />
            <img src={MainSlider4} className="w-full h-[400px]" />
            <img src={MainSlider5} className="w-full h-[400px]" />
          </Slider>
        </div>
        <div className="w-1/4">
          <img src={MainSlider2} className="w-full h-[200px]" />
          <img src={MainSlider3} className="w-full h-[200px]" />
        </div>
      </div>
    </>
  );
}
