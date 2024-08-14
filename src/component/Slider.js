import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavigationIcon from "../images/navigation-icon-light.png";
import StarIcon from "../images/star-icon.png";

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

const Slider = (hotelData) => {
   console.log(hotelData.hotelData);
    return (
        <div className="parent mt-20 pb-20">
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {hotelData.hotelData.map((item, index) => {
                    return (
                        <div>
                            <div className="slider " key={index}>
                                <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                    <img src={item.image} className="img-zoom" />
                                </Link>
                            </div>
                            <div className="ms-9">
                                <div className=" poppins-medium mb-5 font-size-ml text-overflow-2">
                                   {item.name}
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={NavigationIcon} className="w-15px" />
                                    <span className="text-gray font-size-md poppins-medium ms-6 text-overflow-2">
                                       {item.address}
                                    </span>
                                </div>
                                <div className="d-flex align-items-center mt-6">
                                    <img src={StarIcon} className="w-15px" />
                                    <span className="text-gray font-size-md poppins-medium ms-6">
                                        4.9 (2,548 Değerlendirme)
                                    </span>
                                </div>
                                <div className="d-flex align-items-center mt-6">
                                    <span className="poppins-semibold">   {item.discountPrice} TL</span>
                                    <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                    {item.regularPrice} TL
                                    </span>
                                </div>
                                <div className="text-gray-3 font-size-sd">
                                    1 gece için vergiler ve ücretler dahildir
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
