import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./component/Navbar.js";
import HomePage from './pages/homepage.js';
import List from './pages/list.js';
import Detail from './pages/detail.js'
import Footer from "./component/Footer.js";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/list" element={<List />} />
        <Route path="/pages/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
