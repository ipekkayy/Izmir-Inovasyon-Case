import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import CampaignSlider from "../component/CampaignSlider";
import DetailIcon from "../images/angle-right-icon-dark.png";
import DetailIconGray from "../images/angle-right-icon-gray.png";
import HotelIcon from "../images/hotel-icon.png";
import Hotel from "../images/hotel.png";
import Villa from "../images/villa.png";
import Camp from "../images/camp.png";
import Bungalov from "../images/bungalov.png";
import Campaign1 from "../images/campaign1.png";
import Campaign2 from "../images/campaign2.png";
import Campaign3 from "../images/campaign3.png";
import Campaign4 from "../images/campaign4.png";
import { useContext } from "react";
import { MyContext } from "../context";
const HomePage = () => {
    const { hotelData, setHotelData } = useContext(MyContext)
    console.log(hotelData);
    return (
        <div className="">
            <div className="px-10">
                <div>
                    <div className="d-md-flex align-items-center justify-content-between mt-13">
                        <div>
                            <div className="font-size-lm poppins-medium ">
                                Nerede kalmak istediğinize siz karar verin
                            </div>
                            <div className="text-gray font-size-md">
                                Her kişiye uygun konaklama yelpazemizi keşfedin.
                            </div>
                        </div>
                        <div className="d-md-block d-none">
                            <Link to="/pages/list" className="text-dark font-size-md poppins-medium see-all-div">
                                Tümünü Gör
                                <img src={DetailIcon} className="see-all-button ms-30" />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-6">
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
                            <Link to="/pages/list">
                                <img src={Hotel} className="w-100 h-143px object-fit-cover" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-6">
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
                            <Link to="/pages/list">
                                <img src={Villa} className="w-100 h-143px object-fit-cover" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-6">
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
                            <Link to="/pages/list">
                                <img src={Camp} className="w-100 h-143px object-fit-cover" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-6">
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
                            <Link to="/pages/list">
                                <img src={Bungalov} className="w-100 h-143px object-fit-cover" />
                            </Link>
                        </div>
                    </div>
                    <div className="d-md-none d-block text-center mt-13">
                        <Link to="/pages/list" className="text-dark font-size-md poppins-medium see-all-div">
                            Tümünü Gör
                            <img src={DetailIcon} className="see-all-button ms-30" />
                        </Link>
                    </div>
                </div>
                <div className="mt-20 ">
                    <div className="d-md-flex align-items-center justify-content-between">
                        <div>
                            <div className="font-size-lm poppins-medium">
                                Bu ay en çok ziyaret edilen oteller
                            </div>
                            <div className="text-gray font-size-md">
                                Bu ay misafirlerimizin en sık gittiği otelleri ziyaret edin.
                            </div>
                        </div>
                        <div className="d-md-block d-none">
                            <Link to="/pages/list" className="text-dark font-size-md poppins-medium see-all-div">
                                Tümünü Gör
                                <img src={DetailIcon} className="see-all-button ms-30" />
                            </Link>
                        </div>
                    </div>
                    <Slider hotelData={hotelData} />
                    <div className="d-md-none d-block text-center mt-13">
                        <Link to="/pages/list" className="text-dark font-size-md poppins-medium see-all-div">
                            Tümünü Gör
                            <img src={DetailIcon} className="see-all-button ms-30" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="position-relative campaign-div">
                <div className="campaign-title poppins-medium">
                    Kampanyalar
                </div>
                <CampaignSlider  />
                <div className="text-center py-15">
                    <Link to="/pages/list" className="text-orange poppins-semibold">
                        Tüm Kampanyaları Gör
                    </Link>
                </div>
            </div>
            <div className="bg-light-gray">
                <div className="container px-10 ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="font-size-lm poppins-medium">
                                En Cazip Tatil Noktaları
                            </div>
                            <div className="row mt-13">
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Bodrum Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Abant Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Alaçatı Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Antalya Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Cunda Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Kuşadası Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Bursa Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-13">
                            <div className="font-size-lm poppins-medium">
                                En Popüler Ülkeler ve Bölgeler
                            </div>
                            <div className="row mt-13">
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Türkiye Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Yunanistan Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Maldivler Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Ege Bölgesi Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Seyşeyller Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Muğla Bölgesi Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                        <span className="w-180px">Bursa Otelleri</span>
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomePage;