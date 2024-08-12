import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelImg1 from "../images/hotel-1.png";
import HotelImg2 from "../images/hotel-2.png";
import HotelImg3 from "../images/hotel-3.png";
import HotelImg4 from "../images/hotel-4.png";
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
const sliderImageUrl = [
    HotelImg1, HotelImg2, HotelImg3, HotelImg4
];
const Slider = () => {
    return (
        <div className="parent mt-20">
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
                        <div>
                            <div className="slider" key={index}>
                                <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                    <img src={imageUrl} />
                                </Link>
                            </div>
                            <div className="ms-9">
                                <div className=" poppins-medium mb-5 font-size-ml">
                                    Hotel & Suites Nader
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={NavigationIcon} className="w-15px" />
                                    <span className="text-gray font-size-md poppins-medium ms-6">
                                        Behind City Hall, Cancun
                                    </span>
                                </div>
                                <div className="d-flex align-items-center mt-6">
                                    <img src={StarIcon} className="w-15px" />
                                    <span className="text-gray font-size-md poppins-medium ms-6">
                                        4.9 (2,548 Değerlendirme)
                                    </span>
                                </div>
                                <div className="d-flex align-items-center mt-6">
                                    <span className="poppins-semibold">2.195 TL</span>
                                    <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                        2.500 TL
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
