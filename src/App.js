import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import NavBar from "./component/Navbar.js";
import HomePage from './pages/homepage.js';
import List from './pages/list.js';
import Detail from './pages/detail.js'
import Footer from "./component/Footer.js";
import { hotels } from './dummy.js';
import{MyContext}from "./context.js"


const App =() => {
  const [hotelData,setHotelData] = useState(hotels)
  return (
    <MyContext.Provider value={{hotelData,setHotelData}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/list" element={<List />} />
        <Route path="/pages/detail" element={<Detail />} />
      </Routes>
      <Footer />
      </MyContext.Provider>

    

  );
}

export default App;
