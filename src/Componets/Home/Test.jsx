import React from "react";
import "./Test.css";
import Store from "../Images/Store.jpg";
import Store1 from "../Images/Store-1.jpg";
import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";

const TestimonialSection = () => {
    const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)

  return (
    <div className="test" ref={SectionRef}>
      <div className="container-fluid p-0 animate-on-scroll">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={Store}
              alt="Office Building"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center bg-orange text-white text-center p-5">
            <div>
              <p className="fs-5 fw-semibold mb-4">
                Shivam IT Technologies delivered exceptional service, transforming our ideas into a
                stunning web application seamlessly.
              </p>
              <img
                src={Store1}
                alt="Rajesh Kumar"
                className="rounded-circle mb-3 testimonial-avatar"
              />
              <h6 className="fw-bold">Rajesh Kumar</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
