import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Campaign1 from "../images/campaign1.png";
import Campaign2 from "../images/campaign2.png";
import Campaign3 from "../images/campaign3.png";
import Campaign4 from "../images/campaign4.png";
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
const CampaignSlider = () => {
  return (
    <div className="parent campaign-slider">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
      >
        <div className="slider position-relative ms-n-30" >
          <Link to="/" className="text-dark poppins-medium font-size-lm z-8">
            <img src={Campaign1} className="" />
            <div className="campaign-text poppins-bold text-white horizantal-center">
            Yeni üyelere özel indirim fırsatı!

            </div>
          </Link>
        </div>
        <div className="slider position-relative ms-n-30" >
          <Link to="/" className="text-dark poppins-medium font-size-lm  z-8">
            <img src={Campaign3} className="" />
            <div className="campaign-text poppins-bold text-white horizantal-center">
            Çoklu kredi kartı ile ödeme kolaylığı!
            </div>
          </Link>
        </div>
        <div className="slider position-relative ms-n-30" >
          <Link to="/" className="text-dark poppins-medium font-size-lm  z-8">
            <img src={Campaign4} className="" />
            <div className="campaign-text poppins-bold text-white horizantal-center">
              7500 TL'ye varan bonus indirimi!
            </div>
          </Link>
        </div>
        <div className="slider position-relative ms-n-30" >
          <Link to="/" className="text-dark poppins-medium font-size-lm z-8">
            <img src={Campaign2} className="" />
            <div className="campaign-text poppins-bold text-white horizantal-center">
            %25’ini şimdi öde, %75’ini tatilden sonra öde!

            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};
export default CampaignSlider;
