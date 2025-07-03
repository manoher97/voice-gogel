import React from "react";
import "./H-servies.css"
import Cart1 from "../Images/servies-1.jpg";
import Cart2 from "../Images/servies-2.jpg";
import Cart3 from "../Images/servies-3.jpg";
import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";



const ServicesSection = () => {
   const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)

  return (
    <section className="services-section py-5" ref={SectionRef}>
      <div className="container text-center text-white animate-on-scroll">
        <h2 className="mb-3">Our Services</h2>
        <p className="mb-5">
          Comprehensive IT solutions for design, development, testing, and deployment <br />
          tailored to your needs.
        </p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card service-card h-100">
              <img
                src={Cart1}
                alt="Web Development"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Web Development</h5>
                <p className="card-text text-muted">
                  Creating responsive websites and applications that enhance user experience and engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card service-card h-100">
              <img
                src={Cart2}
                alt="Mobile Apps"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Mobile Apps</h5>
                <p className="card-text text-muted">
                  Developing innovative mobile applications to connect with your audience on the go.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card service-card h-100">
              <img
                src={Cart3}
                alt="Digital Marketing"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Digital Marketing</h5>
                <p className="card-text text-muted">
                  Expert digital marketing strategies to boost your online presence and drive traffic.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-dark rounded-pill mt-4 px-4 py-2 fw-semibold">Know More!</button>
      </div>
    </section>
  );
};

export default ServicesSection;
