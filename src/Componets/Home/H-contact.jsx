import React,{useRef} from "react";
import useScrollAnimation from "../Animatio/TextAnim";
import "./H-con.css";

const ContactForm = () => {
  const SectionRef = useRef(null);
   useScrollAnimation(SectionRef)
  return (
    <section className="contact-section d-flex align-items-center justify-content-center text-white text-center py-5" ref={SectionRef}>
      <div className="container animate-on-scroll">
        <h2 className="fw-bold mb-2">Contact Us</h2>
        <p className="mb-5">
          Get in touch for IT services and solutions in Hyderabad.
        </p>

        <div className="form-container bg-white text-dark p-4 rounded shadow mx-auto">
          <form>
            <div className="mb-3">
              <label className="form-label">Your First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email Address*</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Your Message*</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" >
                Submit Your Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
