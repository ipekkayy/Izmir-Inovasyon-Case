import { Link } from "react-router-dom";
import Slider from "../component/Slider";
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

const HomePage = () => {
    return (
        <div className="">
            <div className="container mx-20">
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <div className="font-size-lm poppins-medium">
                                Nerede kalmak istediğinize siz karar verin
                            </div>
                            <div className="text-gray font-size-md">
                                Her kişiye uygun konaklama yelpazemizi keşfedin.
                            </div>
                        </div>
                        <div>
                            <Link to="/pages/list" className="text-dark font-size-md poppins-medium see-all-div">
                                Tümünü Gör
                                <img src={DetailIcon} className="see-all-button ms-30" />
                            </Link>
                        </div>
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
                            <Link to="/pages/list">
                                <img src={Hotel} className="w-100 h-143px" />
                            </Link>
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
                            <Link to="/pages/list">
                                <img src={Villa} className="w-100 h-143px" />
                            </Link>
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
                            <Link to="/pages/list">
                                <img src={Camp} className="w-100 h-143px" />
                            </Link>
                        </div>
                        <div className="col-3 pe-0">
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
                                <img src={Bungalov} className="w-100 h-143px" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <div className="font-size-lm poppins-medium">
                                Bu ay en çok ziyaret edilen oteller
                            </div>
                            <div className="text-gray font-size-md">
                                Bu ay misafirlerimizin en sık gittiği otelleri ziyaret edin.
                            </div>
                        </div>
                        <div>
                            <Link to="/pages/list" className="text-dark font-size-md poppins-medium see-all-div">
                                Tümünü Gör
                                <img src={DetailIcon} className="see-all-button ms-30" />
                            </Link>
                        </div>
                    </div>
                    <Slider />
                </div>
            </div>
            <div className=" position-relative">
                <div className="campaign-title poppins-medium">
                    Kampanyalar
                </div>
                <div className="d-flex pt-150 justify-content-center">
                    <Link to="/" className="text-dark poppins-medium font-size-lm position-relative z-10">
                        <img src={Campaign1} className="" />
                        <div className="campaign-text poppins-bold text-white">
                            Yeni üyelere özel indirim fırsatı!
                        </div>
                    </Link>
                    <Link to="/" className="text-dark poppins-medium font-size-lm position-relative ms-n-30 z-9">
                        <img src={Campaign3} className="" />
                        <div className="campaign-text poppins-bold text-white">
                            Çoklu kredi kartı ile ödeme kolaylığı!
                        </div>
                    </Link>
                    <Link to="/" className="text-dark poppins-medium font-size-lm position-relative ms-n-30 z-8">
                        <img src={Campaign4} className="" />
                        <div className="campaign-text poppins-bold text-white horizantal-center">
                            7500 TL'ye varan bonus indirimi!
                        </div>
                    </Link>
                    <Link to="/" className="text-dark poppins-medium font-size-lm position-relative ms-n-30 z-8">
                        <img src={Campaign2} className="" />
                        <div className="campaign-text poppins-bold text-white left-center">
                            %25’ini şimdi öde, %75’ini tatilden sonra öde!
                        </div>
                    </Link>
                </div>
                <div className="text-center py-15">
                    <Link to="/" className="text-orange poppins-semibold">
                        Tüm Kampanyaları Gör
                    </Link>
                </div>
            </div>
            <div className="bg-light-gray">
                <div className="container mx-20 ">
                    <div className="row">
                        <div className="col-6">
                            <div className="font-size-lm poppins-medium">
                                En Cazip Tatil Noktaları
                            </div>
                            <div className="row mt-13">
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                      <span className="w-50">Bodrum Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                         <span className="w-50">Abant Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Alaçatı Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Antalya Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Cunda Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Kuşadası Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Bursa Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="font-size-lm poppins-medium">
                                En Popüler Ülkeler ve Bölgeler
                            </div>
                            <div className="row mt-13">
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                      <span className="w-50">Türkiye Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                         <span className="w-50">Yunanistan Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Maldivler Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Ege Bölgesi Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Seyşeyller Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Muğla Bölgesi Otelleri</span>  
                                        <img src={DetailIconGray} className=" w-12px" />
                                    </Link>
                                </div>
                                <div className="col-6 ps-0 mb-8">
                                    <Link to="/pages/list" className="font-size-md poppins-regular text-gray d-flex align-items-center">
                                     <span className="w-50">Bursa Otelleri</span>  
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