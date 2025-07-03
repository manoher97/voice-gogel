import "./Home.css";
import { useRef } from "react";
import useScrollAnimation from "../Animatio/TextAnim";

export const Curosel = () => {
  const SectionRef = useRef(null);
  useScrollAnimation(SectionRef);

  return (
    <div className="hero-container" ref={SectionRef}>
      <div className="hero-wrapper">
        <div className="hero-title">
          <h1 className="fw-bold animate-on-scroll">
            Transforming Ideas into <br /> Digital Solutions
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Your trusted partner for IT services and solutions.
          </p>
        </div>

        <div className="hero-button-wrapper animate-on-scroll">
          <button className="hero-button animate-on-scroll">Get Started</button>
        </div>

        <div className="hero-services">
          <div className="hero-card animate-on-scroll">
            <h6 className="hero-card-title animate-on-scroll">Web & Software Development</h6>
            <p className="hero-card-text">
              Custom websites and software tailored for you.
            </p>
          </div>

          <div className="hero-card animate-on-scroll">
            <h6 className="hero-card-title">Mobile Apps</h6>
            <p className="hero-card-text">
              Innovative mobile applications for seamless experiences.
            </p>
          </div>

          <div className="hero-card animate-on-scroll">
            <h6 className="hero-card-title">Digital Marketing</h6>
            <p className="hero-card-text">
              Expert digital marketing to boost your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
