import { Link } from "react-router-dom";
import Instagram from "../images/instagram.png";
import X from "../images/x.png";
import Facebook from "../images/facebook.png";
import Discord from "../images/discord.png";
import Linkedin from "../images/linkedin.png";

const Footer = () => {
    return (
        <div className=" bg-dark">
            <div className="container mx-20">
                <div className="row footer-row">
                    <div className="col-5">
                        <div className="footer-flex">
                            <div>
                                <Link to="/" className="roboto-slab">
                                    TatilAcentası
                                </Link>
                                <div className="text-gray-3 font-size-md mt-6">
                                    Çankaya, Şevket Özçelik Sokak No:53 <br />
                                    Akın İş Hanı Kat:4, 35210 Konak/İzmir
                                </div>
                            </div>
                            <div className="mt-30">
                                <div className="poppins-medium font-size-md text-white">
                                    Bizi Takip Edin
                                </div>
                                <div className="d-flex align-items-center justify-content-start mt-13" >
                                    <Link to="/" className="">
                                        <img src={Instagram} className="w-19px" />
                                    </Link>
                                    <Link to="/" className="">
                                        <img src={X} className="w-19px ms-17" />
                                    </Link>
                                    <Link to="/" className="">
                                        <img src={Facebook} className="w-11px ms-17" />
                                    </Link>
                                    <Link to="/" className="">
                                        <img src={Discord} className="w-25px ms-17" />
                                    </Link>
                                    <Link to="/" className="">
                                        <img src={Linkedin} className="w-19px ms-17" />
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-7">
                        <div className="row ">
                            <div className="col-4">
                                <Link to="/" className="text-white d-block poppins-medium">
                                    Kurumsal
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Hakkımızda
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Satış Ofisleri
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Kariyer
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Haberler
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/" className="text-white d-block poppins-medium">
                                    Destek
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    İletişim
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    SSS
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Rezervasyonlar
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/" className="text-white d-block poppins-medium">
                                    Politikalar
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Hükümler ve Koşullar
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Gizlilik Sözleşmesi
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Kullanım Sözleşmesi
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Bilgi Güvenliği Politikası
                                </Link>
                                <Link to="/" className="text-gray-3 d-block font-size-md mt-9">
                                    Üyelik Sözleşmesi
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;