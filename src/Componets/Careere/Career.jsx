import React, { useRef } from 'react';
import './Career.css';
import formImg from '../Images/Laptop.jpg';
import useScrollAnimation from "../Animatio/TextAnim"

const jobs = [
    "UI/ UX Designer",
    "Full Stack Developers",
    "Test Engineers",
    "DEVOPS AWS/AZURE/GCP",
    "HR Recruiter",
    "Business Developer",
    "Sales & Marketers"
];

const JoinTeam = () => {
    const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);


    return (
        <div className="join-section" ref={sectionRef}>
            <div className="text-center py-5 animate-on-scroll">
                <h1 className="fw-bold">Join Our Team</h1>
                <p className="text-muted">Be part of innovative IT solutions at Shivam IT Technologies.</p>
            </div>

            <div className="C-dec">
                <div className="text-center mb-4 animate-on-scroll">
                    <h2 className="fw-bold">Join Our Team</h2>
                    <p>Explore Exciting Career Opportunities</p>
                </div>

                {jobs.map((role, index) => (
                    <div className="d-flex justify-content-between align-items-center py-2 animate-on-scroll C-dec1" key={index}>
                        <h5 className="mb-4">{role}</h5>
                        <button className="btn">Apply</button>
                    </div>
                ))}
            </div>

            <div className="text-center  animate-on-scroll C-dec2">
                <h2 className="fw-bold">Join Our Innovative Team <br />Today</h2>
                <p>Explore exciting career opportunities at Shivam IT <br />Technologies now.</p>
            </div>

            <div className="container animate-on-scroll C-dec3">
                <form className="p-3 shadow">
                    <div className="mb-3">
                        <label className="form-label">Your First Name</label>
                        <input type="text" className="form-control" placeholder="Enter your first name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Email Address*</label>
                        <input type="email" className="form-control" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Message*</label>
                        <textarea className="form-control" rows="4" placeholder="Type your message here"></textarea>
                    </div>
                    <button type="submit" className="btn rounded-pill px-4">Submit Your Inquiry</button>
                </form>

                <img src={formImg} alt="Contact Side" className="img-fluid rounded" />
            </div>
        </div>
    );
};

export default JoinTeam;
