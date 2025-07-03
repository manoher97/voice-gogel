import React from 'react';
import './About.css';
import Aimg1 from '../Images/About-I1.jpg';
import Aimg2 from '../Images/About-i2.jpg';
import Aimg3 from '../Images/About-i3.jpg';

import TestM from './Testmoials';

import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";



const About = () => {
  const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)

  return (
    <>
    <div className="container A-dec"ref={SectionRef}>
      <div className="row mb-5 A-from animate-on-scroll">
        <div className="col-lg-4">
          <h2 className="fw-bold">About Shivam IT</h2>
          <p><strong>Shivam IT Technologies</strong> is a dynamic and forward-thinking software development company committed to delivering innovative, reliable, and scalable IT solutions.We specialize in tailored applications, digital platforms, and enterprise-grade systems that empower businesses to grow and succeed in the digital era.</p>
          <p>We blend deep industry knowledge with advanced technology to provide end-to-end solutions that align with your business goals. Whether it’s web development, mobile applications, cloud services, or digital transformation, our team of skilled professionals ensures quality, performance, and innovation at every stage.</p>
          <p>We believe in building long-term relationships with our clients by being transparent, responsive, and results-driven. At Shivam IT Technologies, we’re not just building software—we’re building trust, progress, and a smarter future.</p>
        </div>
        <div className="col-lg-8 d-flex A-Img">
          <img src={Aimg1} alt="laptop screen 1" className="Imag-bt img-fluid shadow" />
          <img src={Aimg2} alt="laptop screen 2" className="Imag-bt img-fluid shadow" />
        </div>
      </div>

      <div className="row mb-5 A-dec2 animate-on-scroll" >
        <div className="col-md-6">
          <h2 className="fw-bold">Why Choose Us?</h2>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Expert Team with Deep Technical Skills</li>
            <li>Customer-Centric Approach</li>
            <li>Agile and Scalable Solutions</li>
            <li>On-Time Delivery and Reliable Support</li>
            <li>Proven Track Record Across Industries</li>
          </ul>
        </div>
      </div>

      <div className="row text-center mb-5 A-dec3 animate-on-scroll">
        <h1 className="fw-bold">Vision & Mission: Building Tomorrow, Today</h1>
        <div className="col-md-6">
          <h4 className="fw-bold">Our Vision</h4>
          <ul className="text-start">
            <li>To be a leading global provider of innovative and reliable software solutions.</li>
            <li>To empower businesses through cutting-edge technology and digital transformation.</li>
            <li>To drive growth and success by delivering high-impact IT services.</li>
            <li>To build a future where technology and people come together.</li>
          </ul>
        </div>
        <div className="col-md-6 animate-on-scroll">
          <h4 className="fw-bold">Our Mission</h4>
          <ul className="text-start">
            <li>To deliver high-quality software solutions that solve real business challenges.</li>
            <li>To innovate with technologies like AI, Cloud, and Automation.</li>
            <li>To provide excellent service and long-term partnerships.</li>
            <li>To nurture a culture of excellence and growth.</li>
          </ul>
        </div>
      </div>
      <div className='A-dec4 animate-on-scroll'>
        <img src={Aimg3} alt="Image loding" className="Imag-bt img-fluid" />
      </div>
      <div className="row align-items-center mb-5 A-dec5 animate-on-scroll">
        <div className="col-md-6">
          <h2 className="fw-bold">Our Location</h2>
          <p>Located in Hyderabad, we offer exceptional IT services for design, development, and digital marketing tailored to meet client needs.</p>
          <p><strong>Hyderabad</strong> </p>
          <p>Shivam IT Technologies, Hyderabad</p>
          <p><strong>Hours:</strong> </p>
          <p> 9 AM – 6 PM</p>
        </div>
        <div className="col-md-6 animate-on-scroll">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491618396!2d77.30126131735639!3d12.95445953778702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1751555091286!5m2!1sen!2sin"
            width="100%" height="350" className="rounded shadow" allowFullScreen=""
            loading="lazy" title="Company Location"
          ></iframe>
        </div>
      </div>      
    </div>
    <TestM/>
    </>
  );
};

export default About;
