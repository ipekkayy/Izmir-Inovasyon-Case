import { Link } from "react-router-dom";
import Dropdown from "../component/Dropdown";
import { useContext ,useEffect,useState} from "react";
import { MyContext } from "../context";
import StarIcon from "../images/star-icon.png";
import NavigationIcon from "../images/navigation-icon-light.png";

const List = () => {
    const { hotelData, setHotelData } = useContext(MyContext)
    console.log("list:",hotelData);
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
                        <Dropdown handleFilter={setFilteredData} filteredData={hotelData}/>
                     
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

                    <div className="row">
                        {filteredData.map((item, index) => {
                            return (
                                <div className="col-6">
                                    <div className="" key={index}>
                                        <Link to="/pages/detail" className="text-dark poppins-medium font-size-ml ">
                                            <img src={item.image} />
                                        </Link>
                                    </div>
                                    <div className="ms-9">
                                        <div className=" poppins-medium mb-5 font-size-ml">
                                            {item.name}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={NavigationIcon} className="w-15px" />
                                            <span className="text-gray font-size-md poppins-medium ms-6">
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
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default List;