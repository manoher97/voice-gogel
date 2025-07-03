import React from 'react';
import './Contact.css'
import ConFo from '../Home/H-contact';
import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";

const Contact = () => {
  const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)
 
  return (
    <div ref={SectionRef}>
      <div className='Con-dec1'>
        <h1 className='animate-on-scroll'>Contact Us Today</h1>
        <p className='animate-on-scroll'>Get in touch for IT solutions, web development, and digital <br /> marketing services tailored for your needs.</p>
      </div>
      <div className="row align-items-center mb-5 Con-dec">
        <div className="col-md-6 animate-on-scroll">
          <h2 className="fw-bold">Our Location</h2>
          <p>Reach out to Shivam IT Technologies for top-notch IT services including design, development, and digital marketing solutions tailored for your business needs.</p>
          <p><strong>Hyderabad</strong></p>
          <p> Shivam IT Technologies, Hyderabad</p>
          <p><strong>Hours:</strong></p>
          <p>9 AM – 6 PM</p>
        </div>
        <div className="col-md-6 animate-on-scroll">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491618396!2d77.30126131735639!3d12.95445953778702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1751555091286!5m2!1sen!2sin"
            width="100%" height="400" className="rounded shadow" allowFullScreen=""
            loading="lazy" title="Company Location"
          ></iframe>
        </div>
      </div>
        <ConFo/>
    </div>
  )
}

export default Contact