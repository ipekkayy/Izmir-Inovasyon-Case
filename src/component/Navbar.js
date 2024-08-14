import { Link } from "react-router-dom";
import WorldIcon from "../images/world-icon.jpg";
import NavigationIcon from "../images/navigation-icon.png";
import DateIcon from "../images/date-icon.png";
import UserIcon from "../images/user-icon.png";
import AngleIcon from "../images/angle-right-icon.png";
import { useState } from "react";

const NavBar = () => {
    const [isBarOpen, setIsBarOpen] = useState(false)
    return (
        <div className="mx-20">
            <div className="position-relative index-header">
                <div className="header-container position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo-container">
                            <Link to="/" className="roboto-slab">
                                TatilAcentası
                            </Link>
                        </div>
                        <div className="d-lg-flex justify-content-center poppins-medium font-size-ml d-none" >
                            <Link to="/" className="text-white me-30">
                                Otel
                            </Link>
                            <Link to="/" className="text-white me-30">
                                Tur
                            </Link>
                            <Link to="/" className="text-white me-30">
                                Uçak
                            </Link>
                            <Link to="/" className="text-white me-30">
                                Araç Kiralama
                            </Link>
                            <Link to="/" className="text-orange">
                                Kampanyalar
                            </Link>
                        </div>
                        <div className="d-lg-flex d-none justify-content-end align-items-center">
                            <div className="mt-6">
                                <Link to="/" className="d-flex">
                                    <img src={WorldIcon} alt="lng" className="header-world-icon" />
                                    <span className="text-white poppins-medium font-size-md ms-10">TR</span>
                                </Link>
                            </div>
                            <div className="ms-30">
                                <Link to="/" className="signin-button text-gray-2 font-size-md poppins-medium">
                                    Giriş Yap
                                </Link>
                            </div>
                        </div>
                        <div className="d-lg-none d-flex">
                            <button type="button" className="mobile-menu" onClick={() => {
                                setIsBarOpen(!isBarOpen)
                            }}>
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        </div>
                        <div className={`position-absolute bg-white mobile-side-menu ${isBarOpen ? 'd-block' : 'd-none'}`}>
                            <Link to="/" className="text-dark d-block">
                                Otel
                            </Link>
                            <Link to="/" className="text-dark d-block">
                                Tur
                            </Link>
                            <Link to="/" className="text-dark d-block">
                                Araç Kiralama
                            </Link>
                            <Link to="/" className="text-orange d-block">
                                Kampanyalar
                            </Link>
                            <div className="d-flex justify-content-between align-items-center mt-9">
                                <Link to="/" className="d-flex ">
                                    <img src={WorldIcon} alt="lng" className="header-world-icon" />
                                    <span className="text-dark poppins-medium font-size-md ms-10">TR</span>
                                </Link>
                                <Link to="/" className="signin-button text-gray-2 font-size-md poppins-semibold">
                                    Giriş Yap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-container d-md-block d-none">
                    <div className="text-white poppins-medium filter-title">
                        Nereye gitmek istersiniz ?
                    </div>
                    <div className="mt-auto filter-div p-30 ">
                        <div className="row justify-content-between">
                            <div className="col-4">
                                <div className="poppins-medium font-size-md mb-5">
                                    Konum
                                </div>
                                <div className="position-relative">
                                    <img src={NavigationIcon} className="navigation-icon input-icon" />
                                    <input type="text" className="form-style poppins-regular w-100" placeholder="Konum seçiniz" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="poppins-medium font-size-md mb-5">
                                    Giriş / Çıkış Tarihi
                                </div>
                                <div className="position-relative">
                                    <img src={DateIcon} className="date-icon input-icon" />
                                    <input type="date" className="form-style poppins-regular w-100" placeholder="Tarih seçiniz" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="poppins-medium font-size-md mb-5">
                                    Oda ve Kişi Sayısı
                                </div>
                                <div className="position-relative">
                                    <img src={UserIcon} className="user-icon input-icon" />
                                    <input type="text" className="form-style poppins-regular w-100" placeholder="Oda ve kişi sayısı seçiniz" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-25">
                            <div className="col-9">
                                <div className="d-flex align-items-center">
                                    <div className="mb-5 font-size-md poppins-medium me-30">
                                        Filtreleme
                                    </div>
                                    <div className="d-flex">
                                        <button className="filter-select-option poppins-medium">
                                            Otel
                                        </button>
                                        <button className="filter-select-option poppins-medium">
                                            Villa
                                        </button>
                                        <button className="filter-select-option poppins-medium">
                                            Kamp
                                        </button>
                                        <button className="filter-select-option poppins-medium">
                                            Bungalov
                                        </button>
                                        <button type="button" className="filter-select-option poppins-medium">
                                            Daire
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 text-end">
                                <button className="filter-search-button poppins-medium">
                                    Ara
                                    <img src={AngleIcon} className="search-angle-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-md-none d-block pb-20">
                    <div className="row ">
                        <div className="mb-5">
                            <div className=" font-size-md mb-5 text-white">
                                Konum
                            </div>
                            <div className="position-relative">
                                <img src={NavigationIcon} className="navigation-icon input-icon" />
                                <input type="text" className="form-style poppins-regular w-100" placeholder="Konum seçiniz" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className=" font-size-md mb-5 text-white">
                                Giriş / Çıkış Tarihi
                            </div>
                            <div className="position-relative">
                                <img src={DateIcon} className="date-icon input-icon" />
                                <input type="date" className="form-style poppins-regular w-100" placeholder="Tarih seçiniz" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className=" font-size-md mb-5 text-white">
                                Oda ve Kişi Sayısı
                            </div>
                            <div className="position-relative">
                                <img src={UserIcon} className="user-icon input-icon" />
                                <input type="text" className="form-style poppins-regular w-100" placeholder="Oda ve kişi sayısı seçiniz" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                    <button className="text-white bg-transparent poppins-medium mt-13 border-0">
                        Ara
                        <img src={AngleIcon} className="search-angle-icon" />
                    </button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default NavBar;