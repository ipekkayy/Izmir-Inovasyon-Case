import { Link } from "react-router-dom";
import PhotoGallery from "../component/PhotoGallery";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StarIcon from "../images/star-icon.png";
import NavigationIcon from "../images/navigation-icon-light.png";
import { Tooltip } from 'react-tooltip';
import HotelImage1 from "../images/hotel-1.png"
import HotelImage2 from "../images/hotel-2.png"
import HotelImage3 from "../images/hotel-3.png"
import HotelImage4 from "../images/hotel-4.png"


const Detail = () => {
    return (
        <div>
            <div className="container pb-0">
                <div className="d-flex align-items-center font-size-md breadcrumb">
                    <Link to="/" className="text-gray">
                        Anasayfa
                    </Link>
                    <i class="fa-solid fa-angle-right text-gray font-size-sd mx-20"></i>
                    <Link to="/pages/list" className="text-gray">
                        Otel
                    </Link>
                    <i class="fa-solid fa-angle-right text-gray font-size-sd mx-20"></i>
                    <span className="poppins-medium text-gray">
                        Coordinat Suits
                    </span>
                </div>
            </div>
            <PhotoGallery />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Tabs className="my-10">
                            <TabList>
                                <Tab>Otel Özellikleri</Tab>
                                <Tab>Odalar</Tab>
                            </TabList>
                            <div>
                                <div className="d-flex pt-15">
                                    <div className="font-size-lm poppins-medium ">
                                        Coordinat Suits
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
                                            351. Sokak no 3, Izmir, Bornova, 35100
                                        </span>
                                    </div>
                                    <Link to="javascript:;" className="text-blue poppins-medium font-size-md ">
                                        Haritada Göster
                                        <i class="fa-regular fa-map ms-9"></i>
                                    </Link>
                                </div>
                            </div>
                            <TabPanel>
                                <div className="mt-13">
                                    <div className="poppins-medium font-size-ml">
                                        Genel Bilgiler
                                    </div>
                                    <div className="d-flex my-10">
                                        <div className="d-flex align-items-center bg-light-gray p-6">
                                            <span className="poppins-medium font-size-sd">Alan</span>
                                            <span className="font-size-sd ms-6">108000 m2</span>
                                        </div>
                                        <div className="d-flex align-items-center bg-light-gray p-6 ms-10">
                                            <span className="poppins-medium font-size-sd">Bina Yaşı</span>
                                            <span className="font-size-sd ms-6">10</span>
                                        </div>
                                        <div className="d-flex align-items-center bg-light-gray p-6 ms-10">
                                            <span className="poppins-medium font-size-sd">Oda Sayısı</span>
                                            <span className="font-size-sd ms-6">484</span>
                                        </div>
                                    </div>
                                    <div className="text-gray font-size-md">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </div>
                                    <div className="poppins-medium font-size-ml mt-13">
                                        Otel Özellikleri
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-water-ladder"></i>
                                                <span className="font-size-md ms-10">Havuz</span>
                                            </div>
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-car" ></i>
                                                <span className="font-size-md ms-10">Araç Kiralama</span>
                                                <i class="fa-solid fa-circle-info text-gray ms-10 font-size-sd" data-tooltip-id="rentacar" data-tooltip-content="Ücretli"></i>
                                            </div>
                                            <Tooltip id="rentacar" />
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-brands fa-hotjar"></i>
                                                <span className="font-size-md ms-10">Sauna</span>
                                            </div>
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-dumbbell"></i>
                                                <span className="font-size-md ms-10">Spor Salonu</span>
                                            </div>
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-table-tennis-paddle-ball"></i>
                                                <span className="font-size-md ms-10">Masa Tenisi</span>
                                            </div>
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-martini-glass"></i>
                                                <span className="font-size-md ms-10">Bar</span>
                                            </div>
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-ship"></i>
                                                <span className="font-size-md ms-10">Tekne Turu</span>
                                                <i class="fa-solid fa-circle-info text-gray ms-10 font-size-sd" data-tooltip-id="boat" data-tooltip-content="Ücretli"></i>
                                            </div>
                                            <Tooltip id="boat" />
                                        </div>
                                        <div className="col-3 mt-6">
                                            <div className="d-flex align-items-center">
                                                <i class="fa-solid fa-smoking"></i>
                                                <span className="font-size-md ms-10">Sigara İçilmez</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row mt-13">
                                    <div className="col-4 mb-25">
                                        <div className="" >
                                            <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                                <img src={HotelImage1} className="w-100 detail-list-img" />
                                            </Link>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center mb-5">
                                                <div className=" poppins-medium font-size-md">
                                                    Superior Oda, 1 En Büyük (King) Boy Yatak
                                                </div>
                                            </div>
                                            <div className="room-detail">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-users"></i>
                                                    <span className="text-gray font-size-md ms-10">3 Kişilik</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-bed"></i>
                                                    <span className="text-gray font-size-md ms-10">1 en Büyük Boy (King) Yatak</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-wifi"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz kablosuz internet
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-square-parking"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz valesiz otopark
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                <i class="fa-solid fa-check text-green"></i>
                                                    <span className="text-gray font-size-md ms-10">Açık Büfe Kahvaltı
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mt-6">
                                                <span className="poppins-medium font-size-md">Gecelik Kişi Başı</span>
                                                <span className="poppins-semibold ms-6">2.500 TL</span>
                                                <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                                    2.750 TL
                                                </span>
                                            </div>
                                            <div className="text-gray-3 font-size-sd">
                                            Net ücret almak için arayınız.
                                            </div>
                                        </div>
                                        <Link to="javascript:;" className="text-dark poppins-medium w-100 text-decoration-underline py-7 d-block text-center rounded-6 mt-6">
                                            Yer Ayırt
                                        </Link>
                                    </div>
                                    <div className="col-4 mb-25">
                                        <div className="" >
                                            <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                                <img src={HotelImage1} className="w-100 detail-list-img" />
                                            </Link>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center mb-5">
                                                <div className=" poppins-medium font-size-md">
                                                Deluxe Oda, 1 En Büyük (King) Boy Yatak
                                                </div>
                                            </div>
                                            <div className="room-detail">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-users"></i>
                                                    <span className="text-gray font-size-md ms-10">4 Kişilik</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-bed"></i>
                                                    <span className="text-gray font-size-md ms-10">1 en Büyük Boy (King) Yatak</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-wifi"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz kablosuz internet
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-square-parking"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz valesiz otopark
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                <i class="fa-solid fa-check text-green"></i>
                                                    <span className="text-gray font-size-md ms-10">Açık Büfe Kahvaltı
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mt-6">
                                                <span className="poppins-medium font-size-md">Gecelik Kişi Başı</span>
                                                <span className="poppins-semibold ms-6">2.500 TL</span>
                                                <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                                    2.750 TL
                                                </span>
                                            </div>
                                            <div className="text-gray-3 font-size-sd">
                                            Net ücret almak için arayınız.
                                            </div>
                                        </div>
                                        <Link to="javascript:;" className="text-dark poppins-medium w-100 text-decoration-underline py-7 d-block text-center rounded-6 mt-6">
                                            Yer Ayırt
                                        </Link>
                                    </div>
                                    <div className="col-4 mb-25">
                                        <div className="" >
                                            <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                                <img src={HotelImage1} className="w-100 detail-list-img" />
                                            </Link>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center mb-5">
                                                <div className=" poppins-medium font-size-md">
                                                Superior Oda, 2 Tek Kişilik Yatak
                                                </div>
                                            </div>
                                            <div className="room-detail">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-users"></i>
                                                    <span className="text-gray font-size-md ms-10">3 Kişilik</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-bed"></i>
                                                    <span className="text-gray font-size-md ms-10">2 tek Kişilik Yatak</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-wifi"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz kablosuz internet
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-square-parking"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz valesiz otopark
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                <i class="fa-solid fa-check text-green"></i>
                                                    <span className="text-gray font-size-md ms-10">Açık Büfe Kahvaltı
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mt-6">
                                                <span className="poppins-medium font-size-md">Gecelik Kişi Başı</span>
                                                <span className="poppins-semibold ms-6">2.500 TL</span>
                                                <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                                    2.750 TL
                                                </span>
                                            </div>
                                            <div className="text-gray-3 font-size-sd">
                                            Net ücret almak için arayınız.
                                            </div>
                                        </div>
                                        <Link to="javascript:;" className="text-dark poppins-medium w-100 text-decoration-underline py-7 d-block text-center rounded-6 mt-6">
                                            Yer Ayırt
                                        </Link>
                                    </div>
                                    <div className="col-4 mb-25">
                                        <div className="" >
                                            <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                                <img src={HotelImage1} className="w-100 detail-list-img" />
                                            </Link>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center mb-5">
                                                <div className=" poppins-medium font-size-md">
                                                Süit, 1 Yatak Odası
                                                </div>
                                            </div>
                                            <div className="room-detail">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-users"></i>
                                                    <span className="text-gray font-size-md ms-10">4 Kişilik</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-bed"></i>
                                                    <span className="text-gray font-size-md ms-10">1 en Büyük Boy (King) Yatak</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-wifi"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz kablosuz internet
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-square-parking"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz valesiz otopark
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                <i class="fa-solid fa-check text-green"></i>
                                                    <span className="text-gray font-size-md ms-10">Açık Büfe Kahvaltı
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mt-6">
                                                <span className="poppins-medium font-size-md">Gecelik Kişi Başı</span>
                                                <span className="poppins-semibold ms-6">2.500 TL</span>
                                                <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                                    2.750 TL
                                                </span>
                                            </div>
                                            <div className="text-gray-3 font-size-sd">
                                            Net ücret almak için arayınız.
                                            </div>
                                        </div>
                                        <Link to="javascript:;" className="text-dark poppins-medium w-100 text-decoration-underline py-7 d-block text-center rounded-6 mt-6">
                                            Yer Ayırt
                                        </Link>
                                    </div>
                                    <div className="col-4 mb-25">
                                        <div className="" >
                                            <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                                <img src={HotelImage1} className="w-100 detail-list-img" />
                                            </Link>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center mb-5">
                                                <div className=" poppins-medium font-size-md">
                                                Junior Süit
                                                </div>
                                            </div>
                                            <div className="room-detail">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-users"></i>
                                                    <span className="text-gray font-size-md ms-10">3 Kişilik</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-bed"></i>
                                                    <span className="text-gray font-size-md ms-10">2 tek Kişilik Yatak</span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-wifi"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz kablosuz internet
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <i class="fa-solid fa-square-parking"></i>
                                                    <span className="text-gray font-size-md ms-10">Ücretsiz valesiz otopark
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                <i class="fa-solid fa-check text-green"></i>
                                                    <span className="text-gray font-size-md ms-10">Açık Büfe Kahvaltı
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mt-6">
                                                <span className="poppins-medium font-size-md">Gecelik Kişi Başı</span>
                                                <span className="poppins-semibold ms-6">2.500 TL</span>
                                                <span className="text-gray font-size-md poppins-medium ms-6 text-decoration-line-through">
                                                    2.750 TL
                                                </span>
                                            </div>
                                            <div className="text-gray-3 font-size-sd">
                                            Net ücret almak için arayınız.
                                            </div>
                                        </div>
                                        <Link to="javascript:;" className="text-dark poppins-medium w-100 text-decoration-underline py-7 d-block text-center rounded-6 mt-6">
                                            Yer Ayırt
                                        </Link>
                                    </div>
                                </div>

                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className="col-4">
                        <div className="p-30">
                            <div className="info-hotel-detail">
                                <div className="hotel-info-div">
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span className="ms-9">Sürdürülebilir Turizm Sertifikalı </span>
                                </div>
                                <div className="hotel-info-div-2 mt-9">
                                    <i class="fa-solid fa-hand-holding-dollar"></i>
                                    <span className="ms-9">Fiyat Farkı İade Garantisi </span>
                                </div>
                                <div className="mt-13">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i class="fa-solid fa-location-pin"></i>
                                            <span className=" font-size-md ms-10">Bornova Metro</span>
                                        </div>
                                        <span className=" font-size-md ms-10">15 dk yürüyüş</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i class="fa-solid fa-location-pin"></i>
                                            <span className=" font-size-md ms-10">Konak Meydan</span>
                                        </div>
                                        <span className=" font-size-md ms-10">20 dk sürüş</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i class="fa-solid fa-plane-departure"></i>
                                            <span className=" font-size-md ms-10">ADB</span>
                                        </div>
                                        <span className=" font-size-md ms-10">45 dk sürüş</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-13">
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-arrow-right-to-bracket font-size-lm"></i>
                                    <div className="ms-17">
                                        <div className="text-gray font-size-md">
                                            Check-in
                                        </div>
                                        <div className="poppins-semibold font-size-ml">
                                            14:00
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-arrow-right-to-bracket font-size-lm rotate-180"></i>
                                    <div className="ms-17">
                                        <div className="text-gray font-size-md ">
                                            Check-out
                                        </div>
                                        <div className="poppins-semibold font-size-ml">
                                            12:00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-13">
                                <Link to="javascript:;" className="bg-blue text-white poppins-medium w-100 rounded-6 py-7 d-block text-center">
                                    Rezervasyon İçin Tıklayınız
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Detail;
