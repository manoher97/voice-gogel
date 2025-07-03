import React from 'react';
import './About.css';
import Aimg4 from '../Images/About-l.jpg';
import Aimg5 from '../Images/About-l2.jpg';
import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";



const Testmoials = () => {
  const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)

  return (
    <div className="testimonials " ref={SectionRef}>
        <div className="inner-testimonials container animate-on-scroll">
          <div className="row">
            <div className="col-md-5 mb-4 T-dec">
              <div className="star-rating">★★★★★</div>
              <p className="testimonial-text">
                Shivam IT Technologies delivered exceptional service, transforming our ideas into a stunning web application seamlessly.
              </p>
              <div className="testimonial-user">
                <img src={Aimg4} alt="Tech Innovators" className="user-img" />
                <h6 className="mt-2">Tech Innovators</h6>
              </div>
            </div>
            <div className="col-md-5 mb-4 T-dec">
              <div className="star-rating">★★★★★</div>
              <p className="testimonial-text">
                The team at Shivam IT Technologies exceeded our expectations with their professionalism and expertise in digital marketing.
              </p>
              <div className="testimonial-user">
                <img src={Aimg5} alt="Marketing Guru" className="user-img" />
                <h6 className="mt-2">Marketing Guru</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testmoials