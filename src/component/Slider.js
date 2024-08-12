import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelImg1 from "../images/hotel-1.png";
import HotelImg2 from "../images/hotel-2.png";
import HotelImg3 from "../images/hotel-3.png";
import HotelImg4 from "../images/hotel-4.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 
  }
};
const sliderImageUrl = [
    HotelImg1, HotelImg2, HotelImg3, HotelImg4 
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl}  />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
