import React from 'react';

// Import all images
import aboutImg01 from '../assets/img/about/01.jpg';
import aboutImg02 from '../assets/img/about/02.png';
import aboutImg03 from '../assets/img/about/03.png';

const About = () => {
  return (
    <>
      <section className="about-wrapper about-1 section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-images">
                <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="icon video-popup">
                  <i className="fas fa-play"></i>
                </a>
                <div className="image-1">
                  <img src={aboutImg01} alt="img" />
                </div>
                <div className="image-2">
                  <img src={aboutImg02} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-content mt-4 ms-xxl-4">
                <div className="section-title">
                  <div className="sub-title">
                    <span>ABOUT OUR COMPANY</span>
                  </div>
                  <h2 className="split-text right">
                    We Are All In One  IT Solution & Technology  <br />
                    Company
                  </h2>
                </div>
                <p>
                Welcome to Maxedlogic! We are a team of dedicated professionals who are passionate about technology and committed to providing innovative solutions to our clients.                                
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Website & Mobile application design & Development
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Dramatically re-engineer value added IT systems via mission
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Professional User Experience & Interface researching
                  </li>
                </ul>
                <div className="about-infu">
                  <a href="#" className="theme-btn black-btn">
                    More About Us
                  </a>
                  <div className="contact-us">
                    <img src={aboutImg03} alt="" />
                    <div className="text">
                      <span>Call to ask any question</span>
                      <h4>+91 9310008183</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;