import { useState, React, useEffect } from "react";


const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);

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
                    <div className="dropdown-item text-gray font-size-md mt-6" >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Alsancak (10)
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md mt-6" >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Alsancak (10)
                        </label>
                    </div>
                    <div className="dropdown-item text-gray font-size-md mt-6" >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Alsancak (10)
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
                    <div className="dropdown-item text-gray font-size-md" >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Alsancak (10)
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
                    <div className="dropdown-item text-gray font-size-md" >
                        <label className="d-flex align-items-center">
                            <input
                                type="checkbox"
                            />
                            Alsancak (10)
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dropdown;