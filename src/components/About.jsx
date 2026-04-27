import React from 'react'
import shape1 from '../assets/img/about/shape-1.png';
import shape2 from '../assets/img/shape/shape-1.png';
import aboutImg1 from '../assets/img/about/09.jpg';
import aboutImg2 from '../assets/img/about/10.jpg';
import clientsImg from '../assets/img/about/06.png';


import { Link } from 'react-router-dom';


const About = () => {
  return (
   <>
     <section className="about-wrapper about-1 style-2 about-page section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-xxl-7 col-xl-6 col-lg-12 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-images-2">
                <img className="shape-1" src={shape1} alt=""  style={{zIndex: "9"}}/>
                <img className="shape-2" src={shape2} alt="" />
                <div className="image-1">
                  <img src={aboutImg1} alt="About company" />
                </div>
                <div className="image-2">
                  <img src={aboutImg2} alt="About company" />
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-xl-6 col-lg-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
                <div className="section-title">
                  <div className="sub-title">
                    <span>ABOUT OUR COMPANY</span>
                  </div>
                  <h2>
                    About Maxedlogic Technologies <br /> with World-Class Tech
                  </h2>
                </div>
                <p>
                  We bring your ideas to life with scalable, enterprise-grade software solutions that simplify operations and drive sustainable business growth.
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
                </ul>

                <div className="feedback">
                  <div className="infu">
                    <img src={clientsImg} alt="Clients" />
                    <h6>Join our 50503+ Satisfied World Clients</h6>
                  </div>
                  <div className="infu">
                    <div className="icon-box d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-cms"></i>
                      </div>
                      <h6>Global Company</h6>
                    </div>
                    <p>Our great team of more than to 1400 software experts member.</p>
                  </div>
                </div>

                <div className="about-infu">
                  <Link to= "../contact"><a href="#" className="theme-btn">
                    Get In Touch
                  </a></Link>
                  {/* <div className="contact-us">
                    <div className="text">
                      <span className="text-white opacity-50">Call to ask any question</span>
                      <h4 className="text-white">0123-456-7890</h4>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
   </>
  )
}

export default About