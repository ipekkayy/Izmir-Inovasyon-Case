import { useState, React, useEffect } from "react";
const ListFilter = ({ handleFilter, filteredData }) => {
    const [isIstanbulOpen, setIstanbulOpen] = useState(false);
    const [isAnkaraOpen, setAnkaraOpen] = useState(false);
    const [isIzmirOpen, setIzmirOpen] = useState(false);

    const [location, setLocation] = useState([])
    const [accomodation, setAccomodation] = useState([])
    const [facility, setFacility] = useState([])

    const toggleDropdown = (city) => {
        switch (city) {
            case 'Istanbul':
                setIstanbulOpen(!isIstanbulOpen);
                break;
            case 'Ankara':
                setAnkaraOpen(!isAnkaraOpen);
                break;
            case 'Izmir':
                setIzmirOpen(!isIzmirOpen);
                break;
            default:
                break;
        }
    };

    const handleLocation = (district) => {
        setLocation((prevLocation) => 
            prevLocation.includes(district) 
                ? prevLocation.filter(item => item !== district) 
                : [...prevLocation, district]
        );
    };

    const handleFacility = (type) => {
        setFacility((prevFacility) => 
            prevFacility.includes(type) 
                ? prevFacility.filter(item => item !== type) 
                : [...prevFacility, type]
        );
    };

    const handleAccomodation = (type) => {
        setAccomodation((prevAccomodation) => 
            prevAccomodation.includes(type) 
                ? prevAccomodation.filter(item => item !== type) 
                : [...prevAccomodation, type]
        );
    };

    const filter = () => {
        console.log(location,accomodation,facility);
        const filteredHotels = filteredData.filter(hotel => {
            const locationMatch = location.length === 0 || location.some(loc => hotel.location.district[loc]);
            const accomodationMatch = accomodation.length === 0 || accomodation.some(acc => hotel.accomodation[acc]);
            const facilityMatch = facility.length === 0 || facility.some(fac => hotel.facility[fac]);
        
            return locationMatch && accomodationMatch && facilityMatch;
        });
        handleFilter(filteredHotels)
    }
    return (
        <div>
            <div className="poppins-medium">Bölge</div>
            <div className='dropdown'>
                <div className='dropdown-header' onClick={() => toggleDropdown("Istanbul")}>
                    İstanbul
                    <i className={`fa fa-chevron-right icon ${isIstanbulOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isIstanbulOpen && 'open'}`}>
                    <div className="dropdown-item text-gray font-size-md mt-6">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Ortakoy")}
                                onChange={() => handleLocation("Ortakoy")}
                            />
                            Ortakoy
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md mt-6">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Sisli")}
                                onChange={() => handleLocation("Sisli")}
                            />
                            Şişli
                        </label>
                    </div>
                </div>
            </div>
            <div className='dropdown'>
                <div className='dropdown-header' onClick={() => toggleDropdown("Ankara")}>
                    Ankara
                    <i className={`fa fa-chevron-right icon ${isAnkaraOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isAnkaraOpen && 'open'}`}>
                    <div className="dropdown-item text-gray font-size-md">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Cankaya")}
                                onChange={() => handleLocation("Cankaya")}
                            />
                            Çankaya 
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Kizilay")}
                                onChange={() => handleLocation("Kizilay")}
                            />
                            Kızılay
                        </label>
                    </div>
                </div>
            </div>
            <div className='dropdown'>
                <div className='dropdown-header' onClick={() => toggleDropdown("Izmir")}>
                    İzmir
                    <i className={`fa fa-chevron-right icon ${isIzmirOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isIzmirOpen && 'open'}`}>
                    <div className="dropdown-item text-gray font-size-md">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Bayrakli")}
                                onChange={() => handleLocation("Bayrakli")}
                            />
                            Bayraklı
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Bornova")}
                                onChange={() => handleLocation("Bornova")}
                            />
                            Bornova 
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.includes("Konak")}
                                onChange={() => handleLocation("Konak")}
                            />
                            Konak
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-13">
                <div className="poppins-medium">Konaklama Tipi</div>
                <div>
                    <div className="text-gray font-size-md mt-9">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={accomodation.includes("roomWithBreakfast")}
                                onChange={() => handleAccomodation("roomWithBreakfast")}
                            />
                            Oda Kahvaltılı 
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={accomodation.includes("roomOnly")}
                                onChange={() => handleAccomodation("roomOnly")}
                            />
                            Sadece Oda 
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={accomodation.includes("allIn")}
                                onChange={() => handleAccomodation("allIn")}
                            />
                            Her Şey Dahil 
                        </label>
                    </div>
                </div>
            </div>
            <div className="mt-13">
                <div className="poppins-medium">Tesis Olanakları</div>
                <div>
                    <div className="text-gray font-size-md mt-9">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={facility.includes("pool")}
                                onChange={() => handleFacility("pool")}
                            />
                            Açık Yüzme Havuzu 
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={facility.includes("sauna")}
                                onChange={() => handleFacility("sauna")}
                            />
                            Sauna
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9">
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={facility.includes("spa")}
                                onChange={() => handleFacility("spa")}
                            />
                            Spa Merkezi
                        </label>
                    </div>
                </div>
            </div>
            <button className="list-filter-button poppins-medium mt-30 w-100 cursor-pointer" onClick={filter}>
                Filtrele
            </button>
        </div>
    );
}

export default ListFilter;