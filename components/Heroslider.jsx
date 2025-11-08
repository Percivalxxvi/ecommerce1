import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Heroslider = () => {
     const settings = {
    //    dots: true,
       arrows: false,
       pauseOnHover: false, 
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
     };
  return (
    <div className="h-fit w-full">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="lg:h-130 h-63 w-full bg-yellow-500">
            <img
              className="h-4/4"
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h5-slide-background-img-3.jpg"
              alt=""
            />
          </div>
          <div className="lg:h-130 h-63 w-full bg-red-500">
            <img
              className="h-4/4"
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h5-slide-background-img-2.jpg"
              alt=""
            />
          </div>
          <div className="lg:h-130 h-63 w-full bg-green-400">
            <img
              className="h-4/4"
              src="https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h5-slide-background-img-1.jpg"
              alt=""
            />
          </div>
          {/* <div className="h-130 w-full bg-pink-600">
            <h3>4</h3>
          </div>
          <div className="h-130 w-full bg-purple-800">
            <h3>5</h3>
          </div>
          <div className="h-130 w-full bg-gray-400">
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default Heroslider