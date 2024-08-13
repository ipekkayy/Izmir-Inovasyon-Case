import { useState, React, useEffect } from "react";


const Dropdown = ({ handleFilter, filteredData }) => {
    const [isOpen, setOpen] = useState(false);
    const [location, setLocation] = useState({ "Alsancak": false, "Beyoglu": false, "Cankaya": false, "Bornova": false , "Esenler":false})
    const [accomodation, setAccomodation] = useState({ "roomOnly": false, "roomWithBreakfast": false, "allIn": false })
    const [facility, setFacility] = useState({ "pool": false, "sauna": false, "spa": false })
    const toggleDropdown = () => setOpen(!isOpen);

    
    const handleLocation = (district) => {
        setLocation(prevState => ({
            ...prevState,
            [district]: !prevState[district]
        }));
    };

    const handleFacility = (type) => {
        setFacility(prevState => ({
            ...prevState,
            [type]: !prevState[type]
        }));
    };

    const handleAccomodation = (type) => {
        setAccomodation(prevState => ({
            ...prevState,
            [type]: !prevState[type]
        }));
    };


    const filter = () => {
        const arr = filteredData.filter(item => {
            const selectedLocations = Object.keys(location).filter(district => location[district]);
            const isLocationMatch = selectedLocations.length === 0 || selectedLocations.some(selectedDistrict => item.location.district[selectedDistrict]);
            console.log(selectedLocations);
            // Check accommodation filter: Match any selected accommodation type, or skip if none selected
            const selectedAccommodations = Object.keys(accomodation).filter(type => accomodation[type]);
            const isAccomodationMatch = selectedAccommodations.length === 0 || selectedAccommodations.some(selectedType => item.accomodation[selectedType]);
            console.log(selectedAccommodations);
            // Check facility filter: Match any selected facility, or skip if none selected
            const selectedFacilities = Object.keys(facility).filter(facilityType => facility[facilityType]);
            const isFacilityMatch = selectedFacilities.length === 0 || selectedFacilities.some(selectedFacility => item.facility[selectedFacility]);
            console.log(selectedFacilities);
            // Return true if any location, any accommodation, and any facility match the selected filters
            return isLocationMatch && isAccomodationMatch && isFacilityMatch

        })
        handleFilter(arr)
    }
    return (
        <div>
            <div className="poppins-medium">
                Bölge
            </div>
            <div className='dropdown'>
                <div className='dropdown-header' onClick={toggleDropdown}>
                    İstanbul (950)
                    <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isOpen && 'open'}`}>
                    <div className="dropdown-item text-gray font-size-md mt-6" onClick={() => { handleLocation("Beyoglu") }} >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.Beyoglu}
                            />
                            Beyoglu (10)
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md mt-6"  >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Esenler (10)
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md mt-6" >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Kadıköy (10)
                        </label>
                    </div>
                </div>
            </div>
            <div className='dropdown'>
                <div className='dropdown-header' onClick={toggleDropdown}>
                    Ankara (780)
                    <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isOpen && 'open'}`}>
                    <div className="dropdown-item text-gray font-size-md" onClick={() => { handleLocation("Cankaya") }}>
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.Cankaya}
                            />
                            Çankaya (10)
                        </label>
                    </div>
                </div>
            </div>
            <div className='dropdown'>
                <div className='dropdown-header' onClick={toggleDropdown}>
                    İzmir (780)
                    <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                </div>
                <div className={`dropdown-body ${isOpen && 'open'}`}>
                    <div className="dropdown-item text-gray font-size-md" onClick={() => { handleLocation("Alsancak") }} >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.Alsancak}
                            />
                            Alsancak (10)
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md" onClick={() => { handleLocation("Bornova") }} >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={location.Bornova}
                            />
                            Bornova (10)
                        </label>
                    </div>
                </div>
            </div>
            <div className="mt-13">
                <div className="poppins-medium">
                    Konaklama Tipi
                </div>
                <div>
                    <div className="text-gray font-size-md mt-9" onClick={() => { handleAccomodation("roomWithBreakfast") }} >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Oda Kahvaltılı (50)
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9" onClick={() => { handleAccomodation("roomOnly") }}>
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Sadece Oda (45)
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9" onClick={() => { handleAccomodation("allIn") }}>
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
                    <div className="text-gray font-size-md mt-9" onClick={() => { handleFacility("pool") }}>
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Açık Yüzme Havuzu (15)
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9" onClick={() => { handleFacility("sauna") }}>
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Sauna (8)
                        </label>
                    </div>
                    <div className="text-gray font-size-md mt-9" onClick={() => { handleFacility("spa") }}>
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Spa Merkezi (12)
                        </label>
                    </div>
                </div>
            </div>
            <button className="list-filter-button poppins-medium mt-30 w-100 cursor-pointer" onClick={() => { filter() }}>
                Filtrele
            </button>
        </div>

    )
}

export default Dropdown;