import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='End-dec'>
      <footer className="Foot-dec">
        <div>
          <h5>Innovate</h5>
          <span>Leading IT services for design and <br />development.</span>
        </div>
        <div>
          <h5>Connect</h5>
          <p>+91 70756 99181</p>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            shivamittechnologies@gmail.com
          </a>
        </div>
        <div>
          <h5>Support</h5>
          <label htmlFor="Femail">Enter your email addres</label>
          <input type="email" id='Femail' placeholder='shivam12@gmail.com' />
          <button>submit your inquiry now</button>
        </div>
      </footer>
      <p className='copyRigsht'>© 2025. All rights reserved. Powered by <a href="https://novelsky.tech/" target="_blank" rel="noopener noreferrer">
            NOVELSKY.TECH
          </a></p>
    </div>
  );
}

export default Footer


