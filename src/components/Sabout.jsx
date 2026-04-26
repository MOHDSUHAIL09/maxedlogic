import React from 'react';
import { FaEnvelope } from 'react-icons/fa';   // Envelope icon
// Ya Gmail specific icon chahiye to:
// import { SiGmail } from 'react-icons/si';

import bgImage from '../assets/img/about/01-bg.png';

const Sabout = () => {
  return (
    <>
      <section className="about-wrapper about-2 mx-xl-5 section-padding pt-0">
        <div 
          className="bg-image bg-cover" 
          style={{ backgroundImage: `url(${bgImage})` }}   
        ></div>
        {/* <div className="container">
          <div className="about-content wow fadeInUp" data-wow-delay="300ms">
            <div className="section-title text-center">
              <div className="sub-title sub-title2">
                <span className="text-white">ABOUT OUR COMPANY</span>
              </div>
              <h2 className="text-white split-text right">
                Technological Applications <br /> Play a Role in Improving Our <br /> Community
              </h2>
            </div>
            <p className="text-center">
               Our team is made up of experts in various fields of information technology, <br />
              including web development, mobile app development, custom software development. 
            </p>
            <div className="infu text-center d-flex align-items-center justify-content-center">
              <a href="about.html" className="theme-btn">Get Started Now</a>
              <div className="contact-us d-flex">
                <a href="mailto:info@example.com">
                  <FaEnvelope size={24} />
                </a>
                <div className="text text-start">
                  <span>Our Gmail</span>
                  <h4>
                    info@maxedlogic.com
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Sabout;