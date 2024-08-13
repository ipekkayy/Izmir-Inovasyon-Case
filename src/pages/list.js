import { Link } from "react-router-dom";
import Dropdown from "../component/Dropdown";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";
import StarIcon from "../images/star-icon.png";
import NavigationIcon from "../images/navigation-icon-light.png";
import SearchIcon from "../images/search-icon.png";
import AngleIcon from "../images/angle-right-icon.png";

const List = () => {
    const { hotelData, setHotelData } = useContext(MyContext)
    console.log("list:", hotelData);
    const [filteredData, setFilteredData] = useState(hotelData);


    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="signup-text text-center">
                        Özel fırsatları kaçırma !
                        <Link to="/" className="text-blue ms-6 ">
                            Hemen üye ol.
                        </Link>
                    </div>
                    <div className="poppins-medium font-size-ml my-10">
                        Filtrele
                    </div>
                    <div className="bg-light-gray p-13 rounded-6">
                        <Dropdown handleFilter={setFilteredData} filteredData={hotelData} />
                    </div>
                </div>
                <div className="col-9 ">
                    <div className="d-flex align-items-center font-size-md breadcrumb">
                        <Link to="/" className="text-gray">
                            Anasayfa
                        </Link>
                        <i class="fa-solid fa-angle-right text-gray font-size-sd mx-20"></i>
                        <span className="poppins-medium text-gray">
                            Otel
                        </span>
                    </div>
                    <div className="d-flex align-items-center my-10">
                        <div className="font-size-lm poppins-medium">
                            Otel
                        </div>
                        <span className="text-gray ms-17">
                            129 tesis bulduk!
                        </span>
                    </div>
                    <div className="position-relative">
                        <input className="search-filter w-100 poppins-regular" placeholder="Aradığınız bir otel var mı ?" />
                        <img src={SearchIcon} className="search-icon position-absolute cursor-pointer" />
                    </div>
                    <div className="row mt-13">
                        {filteredData.length > 0 ? filteredData.map((item, index) => {
                            return (
                                <div className="col-6 mb-25">
                                    <div className="" key={index}>
                                        <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                            <img src={item.image} className="w-100 list-img" />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <div className="d-flex align-items-center mb-5">
                                            <div className=" poppins-medium font-size-ml">
                                                {item.name}
                                            </div>
                                            <div className="d-flex align-items-center ms-17">
                                                <img src={StarIcon} className="w-15px" />
                                                <span className="text-gray font-size-md poppins-medium ms-6">
                                                    4.9
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="d-flex align-items-center">
                                                <img src={NavigationIcon} className="w-15px" />
                                                <span className="text-gray font-size-md poppins-medium ms-6 text-overflow">
                                                    {item.address}
                                                </span>
                                            </div>
                                            <Link to="/" className="text-blue poppins-medium font-size-sd ms-17">
                                                Haritada Göster
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="poppins-semibold font-size-md">Gecelik Kişi Başı</span>
                                            <span className="poppins-semibold ms-6">{item.discountPrice} TL</span>
                                            <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                                {item.regularPrice} TL
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between font-size-md text-green mb-25">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-utensils"></i>
                                                <span className="ms-6">Her Şey Dahil</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-check"></i>
                                                <span className="ms-6">12 Taksit Seçeneği</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/pages/detail" className="bg-dark text-white poppins-medium w-100 rounded-6 py-7 d-block text-center">
                                        İncele
                                        <img src={AngleIcon} className="search-angle-icon" />
                                    </Link>
                                </div>
                            )
                        }) :

                            <div className="no-data">
                                Aradığınız kriterlere uygun otel bulunmamaktadır.
                            </div>

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default List;