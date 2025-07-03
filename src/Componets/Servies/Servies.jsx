import React from 'react';
import './Servies.css';
import simg from '../Images/Server-1.jpg';
import simg1 from '../Images/Server-2.jpg';
import simg2 from '../Images/Server-3.jpg';
import simg3 from '../Images/Server-4.jpg';
import simg4 from '../Images/Server-5.jpg';
import simg5 from '../Images/Server-6.jpg';

import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";

import TestS from '../About/Testmoials'

const services = [
  {
    title: "Website Development",
    description:
      "We create responsive, fast, and SEO-friendly websites tailored to your business needs. From corporate websites to landing pages and eCommerce portals, we ensure a strong online presence with a modern user experience.",
    imgs: simg, 
  },
  {
    title: "Web App Development",
    description:
      "Our web applications are built for performance, scalability, and security. Whether it's a custom dashboard, portal, or business tool, we turn ideas into powerful web-based solutions.",
    imgs: simg1,
  },
  {
    title: "Application Development",
    description:
      "From mobile apps to cross-platform solutions, we develop intuitive and feature-rich applications that deliver seamless experiences on Android, iOS, and hybrid platforms.",
    imgs: simg2,
  },
  {
    title: "Software Development",
    description:
      "We specialize in developing custom software solutions that solve complex business problems. From enterprise systems to automation tools, we ensure robust functionality and smooth integration with your existing systems.",
    imgs: simg3,
  },
  {
    title: "Digital Marketing Services",
    description:
      "Grow your brand online with our strategic digital marketing services. We offer SEO, social media marketing, PPC, content marketing, and email campaigns to help you reach and engage your target audience.",
    imgs: simg4,
  },
  {
    title: "Recruitment Services",
    description:
      "We bridge the talent gap by connecting businesses with skilled professionals. Our recruitment solutions are tailored to find the right fit for your technical and non-technical hiring needs, quickly and efficiently.",
    imgs: simg5,
  },
];

const OurServices = () => {
  const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)
  return (
    <>
    <div className="container my-5 S-dec" ref={SectionRef}>
      <h2 className="text-center fw-bold animate-on-scroll">Our Services</h2>
      <p className="text-center text-muted mb-4 animate-on-scroll">
        Comprehensive IT solutions for design, development, testing, and deployment <br />tailored to your needs.
      </p>
      <div className="row">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 animate-on-scroll">
            <div className="card service-card rounded-0 ">
              <div className="card-body p-1">
                <h5 className="card-title fw-semibold">{service.title}</h5>
                <p className="card-text text-dark">{service.description}</p>
              </div>
              <img src={service.imgs} alt={service.title} className="card-img-bottom service-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
    <TestS/>
    </>
  );
};

export default OurServices;

