import React from 'react';

// Import images
import ctaShape1 from '../assets/img/cta/cta-shape-1.png';
import world from '../assets/img/world.png';
import ctaImage from '../assets/img/cta/cta-1.png';

const Delivering = () => {
  return (
    <section className="cta-wrapper cta-1">
      <div className="container">
        <div className="cta-inner bg-cover wow fadeInUp" data-wow-delay="300ms">
          <div className="shape">
            <img className="shape-1" src={ctaShape1} alt="" />
            <img className="shape-2" src={world} alt="" />
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="section-title">
                <div className="sub-title sub-title2">
                  <span className="text-white ">START WITH US</span>
                </div>
                <h2 className="text-white paragraph-shadow">We’re Delivering Best Customer Experience</h2>
              </div>
              <a href="about.html" className="theme-btn mt-4 paragraph-shadow">Get Started Now</a>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="images">
                <img src={ctaImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivering;