import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import DetailIcon from "../images/angle-right-icon-dark.png";
import HotelIcon from "../images/hotel-icon.png";
import Hotel from "../images/hotel.png";
import Villa from "../images/villa.png";
import Camp from "../images/camp.png";
import Bungalov from "../images/bungalov.png";

const HomePage = () => {
    return (
        <div className="container">
            <div>
                <div className="font-size-lm poppins-medium">
                    Nerede kalmak istediğinize siz karar verin
                </div>
                <div className="text-gray font-size-md">
                    Her kişiye uygun konaklama yelpazemizi keşfedin
                </div>
                <div className="row">
                    <div className="col-3 ps-0">
                        <div>
                            <Link to="/pages/list" className="text-dark poppins-medium font-size-ml mt-13 d-flex align-items-center justify-content-between">
                                <div className="">
                                    Otel
                                </div>
                                <div className="place-selection-div">
                                    <img src={DetailIcon} className="" />
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                            <img src={HotelIcon} className="index-hotel-icon" />
                            <span className="text-gray font-size-sd poppins-regular ms-6">1508 otel </span>
                        </div>
                        <div>
                            <img src={Hotel} className="w-100" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <Link to="/pages/list" className="text-dark poppins-medium font-size-ml mt-13 d-flex align-items-center justify-content-between">
                                <div className="">
                                    Villa
                                </div>
                                <div className="place-selection-div">
                                    <img src={DetailIcon} className="" />
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                            <img src={HotelIcon} className="index-hotel-icon" />
                            <span className="text-gray font-size-sd poppins-regular ms-6">1508 villa </span>
                        </div>
                        <div>
                            <img src={Villa} className="w-100" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <Link to="/pages/list" className="text-dark poppins-medium font-size-ml mt-13 d-flex align-items-center justify-content-between">
                                <div className="">
                                    Kamp
                                </div>
                                <div className="place-selection-div">
                                    <img src={DetailIcon} className="" />
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                            <img src={HotelIcon} className="index-hotel-icon" />
                            <span className="text-gray font-size-sd poppins-regular ms-6">1508 kamp alanı </span>
                        </div>
                        <div>
                            <img src={Camp} className="w-100" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <Link to="/pages/list" className="text-dark poppins-medium font-size-ml mt-13 d-flex align-items-center justify-content-between">
                                <div className="">
                                    Bungalov
                                </div>
                                <div className="place-selection-div">
                                    <img src={DetailIcon} className="" />
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                            <img src={HotelIcon} className="index-hotel-icon" />
                            <span className="text-gray font-size-sd poppins-regular ms-6">1508 bungalov </span>
                        </div>
                        <div>
                            <img src={Bungalov} className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="font-size-lm poppins-medium">
                            Bu ay en çok ziyaret edilen oteller
                        </div>
                        <div className="text-gray font-size-md  mb-8">
                            Bu ay misafirlerimizin en sık gittiği otelleri ziyaret edin.
                        </div>
                    </div>
                    <div>
                    <Link to="/pages/list" className="text-dark">
                           Tümünü Gör
                           <img src={DetailIcon} className="" />
                        </Link>
                    </div>

                </div>

                <Slider />
            </div>
        </div>
    )
}

export default HomePage;