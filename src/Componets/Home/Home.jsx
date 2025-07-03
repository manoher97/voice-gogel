import React from "react";
import { Curosel } from "./Curosel";
import Info from "./Info";
import Servies from "./H-servies";
import Test from "./Test";
import Contact from "./H-contact"
import './Home.css'

const Home = () => {
  return (
    <div >
       <Curosel/>  
       <Info/> 
       <Servies/>
       <Test/>  
       <Contact/>
    </div>
  );
};

export default Home;
