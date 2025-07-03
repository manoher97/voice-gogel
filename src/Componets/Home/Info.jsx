import React from "react";
import { useRef } from "react";
import "./Info.css";
import laptop from "../Images/Laptop.jpg";
import useScrollAnimation from "../Animatio/TextAnim";


const Info = () => {
  const SectionRef = useRef(null);
  useScrollAnimation(SectionRef)

  return (
    <>
      <div className="container my-5 py-5 " ref={SectionRef}>
        <div className="row align-items-center animate-on-scroll">
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <h2 className="display-5 fw-bold">Your Trusted IT <br />Solutions Partner</h2>
            <button className="btn btn-dark rounded-pill px-4 py-2 mt-4">Know More!</button>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted animate-on-scroll">
              Shivam IT Technologies offers top-notch services in design,
              development, testing, and deployment, ensuring exceptional
              solutions for your business needs in Hyderabad, Telangana.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-5 mt-4 animate-on-scroll">
              <div className="text-center">
                <h3 className="orange-text fw-bold">150+</h3>
                <p className="text-muted mb-0">Innovative Solutions</p>
              </div>
              <div className="text-center">
                <h3 className="orange-text fw-bold">15</h3>
                <p className="text-muted mb-0">Trusted by Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   <img src={laptop} alt="Loading..." className="Imag-bt img-fluid" />
    </>
  );
};

export default Info;
