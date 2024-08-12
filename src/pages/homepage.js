import { Link } from "react-router-dom";
import DetailIcon from "../images/angle-right-icon-dark.png";
import HotelIcon from "../images/hotel-icon.png";
const HomePage = () => {
    return (
        <div className="container">
            <div className="font-size-lm poppins-medium">
                Nerede kalmak istediğinize siz karar verin
            </div>
            <div className="text-gray font-size-md">
                Her kişiye uygun konaklama yelpazemizi keşfedin
            </div>
            <div className="row">
                <div className="col-3">
                    <div>
                        <Link to="/pages/list" className="poppins-medium font-size-ml mt-13 d-flex align-items-center justify-content-between">
                            <div className="">
                                Otel
                            </div>
                            <div className="place-selection-div">
                                <img src={DetailIcon} className="" />
                            </div>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={HotelIcon} className="index-hotel-icon" />
                        <span className="text-gray font-size-sd poppins-regular ms-6">1508 otel </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;