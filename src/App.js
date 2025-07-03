import "./App.css";
import Navebar from "./Componets/Header/NaveBar.jsx";
import Footer from "./Componets/Footer/Footer.jsx";
import Home from "./Componets/Home/Home.jsx";
import About from "./Componets/About/About.jsx";
import Server from "./Componets/Servies/Servies.jsx"
import Careers from "./Componets/Careere/Career.jsx"
import Contact from "./Componets/Contact/Contact.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Componets/ScrollTop/ScrollTop.js";
const App = () => {


  return (
    <div className='App'>
      <BrowserRouter>
      <ScrollToTop/>
        <Navebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Server" element={<Server />} />
          <Route exact path="/Careers" element={<Careers />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;


