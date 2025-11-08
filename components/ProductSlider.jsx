import React from "react";
import Slider from "react-slick";
import Apicomp1 from "./Apicomp1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useData } from "../store";

const ProductSlider = ({ title, products = [] }) => {
  const {value,FetchData}=useData()
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f5f5f5] py-10 lg:hidden block">
      {title && (
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          {title}
        </h2>
      )}

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {value
            ?.slice() // clone the array so you don’t mutate the original
            .sort(() => Math.random() - 0.8) // shuffle order
            .slice(0, 5) // pick first 5
            .map((item, index) => (
              <Apicomp1 key={index} data={item} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
