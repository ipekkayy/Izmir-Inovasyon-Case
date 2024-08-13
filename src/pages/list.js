import { Link } from "react-router-dom";
import Dropdown from "../component/Dropdown";

const List = () => {
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
                        <Dropdown />
                        <div className="mt-13">
                            <div className="poppins-medium">
                                Konaklama Tipi
                            </div>
                            <div>
                                <div className="text-gray font-size-md mt-9" >
                                    <label className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                        />
                                        Oda Kahvaltılı (50)
                                    </label>
                                </div>
                                <div className="text-gray font-size-md mt-9" >
                                    <label className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                        />
                                        Sadece Oda (45)
                                    </label>
                                </div>
                                <div className="text-gray font-size-md mt-9" >
                                    <label className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                        />
                                        Her Şey Dahil (54)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-13">
                            <div className="poppins-medium">
                                Tesis Olanakları
                            </div>
                            <div>
                                <div className="text-gray font-size-md mt-9" >
                                    <label className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                        />
                                        Açık Yüzme Havuzu (15)
                                    </label>
                                </div>
                                <div className="text-gray font-size-md mt-9" >
                                    <label className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                        />
                                        Sauna (8)
                                    </label>
                                </div>
                                <div className="text-gray font-size-md mt-9" >
                                    <label className="d-flex align-items-center">
                                        <input
                                            type="checkbox"
                                        />
                                        Spa Merkezi (12)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="list-filter-button poppins-medium mt-30 w-100 cursor-pointer">
                            Filtrele
                        </button>
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
                    <div className="d-flex align-items-center mt-13">
                        <div className="font-size-lm poppins-medium">
                            Otel
                        </div>
                        <span className="text-gray ms-17">
                        129 tesis bulduk!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;