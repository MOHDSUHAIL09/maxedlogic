import React, { useEffect, useRef } from 'react';

// Import all images
import breadcrumbImg from '../../assets/img/breadcrumb.jpg';
import shape1 from '../../assets/img/about/shape-1.png';
import shape2 from '../../assets/img/shape/shape-1.png';
import aboutImg1 from '../../assets/img/about/09.jpg';
import aboutImg2 from '../../assets/img/about/10.jpg';
import clientsImg from '../../assets/img/about/06.png';
// import contactImg from '../../assets/img/about/03.png';
import { FaAngleDoubleRight, FaThumbsUp } from 'react-icons/fa';
import { 
  FaArrowRight, 
  FaCode, 
  FaLock, 
  FaPaintBrush, 
  FaChartLine, 
  FaWrench, 
  FaBrain, 
  FaCogs, 
  FaNetworkWired,
  FaLongArrowAltRight, 
  FaComments,
} from 'react-icons/fa';

import processShape6 from '../../assets/img/process/shape-6.png';
import processShape7 from '../../assets/img/process/shape-7.png';
import { Link } from 'react-router-dom';

const About = () => {
  const breadcrumbRef = useRef(null);

  // Parallax effect for breadcrumb background
  useEffect(() => {
    const handleScroll = () => {
      if (breadcrumbRef.current) {
        const scrollY = window.scrollY;
        const parallaxY = scrollY * 0.5; // half speed
        breadcrumbRef.current.style.backgroundPosition = `center ${parallaxY}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Breadcrumb Section with Parallax */}
      <div 
        className="breadcrumb-wrapper bg-cover" 
        style={{ 
          backgroundImage: `url(${breadcrumbImg})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center 0px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        ref={breadcrumbRef}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">About </h1>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <FaAngleDoubleRight/>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section (unchanged) */}
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
                  <Link to="../contact" className="theme-btn">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (unchanged) */}
      <section className="process-wrapper process-2 section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title"><span>HOW IT WORKS</span></div>
            <h2 className="split-text right">Our Working Process in 4 Steps</h2>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="signle-process-item pe-xl-4">
                <img className="shape-1" src={processShape6} alt="process" />
                <div className="icons">
                  <div className="icon-1"><FaComments/></div>
                  <div className="icon-2">01</div>
                </div>
                <h4 className="mb-2">Project Discussion</h4>
                <p>Accelerate innovation with world-class tech teams We'll match you to an entire remote team.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mt-xl-5 wow fadeInUp" data-wow-delay="400ms">
              <div className="signle-process-item pe-xl-3 ps-xl-2">
                <img className="shape-2" src={processShape7} alt="process" />
                <div className="icons">
                  <div className="icon-1"><FaCogs/></div>
                  <div className="icon-2">02</div>
                </div>
                <h4 className="mb-2">Testing & Trying</h4>
                <p>Accelerate innovation with world-class tech teams We'll match you to an entire remote team.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="signle-process-item ps-xl-3 pe-xl-2">
                <img className="shape-1" src={processShape6} alt="process" />
                <div className="icons">
                  <div className="icon-1"><FaWrench/></div>
                  <div className="icon-2">03</div>
                </div>
                <h4 className="mb-2">Execute & Install</h4>
                <p>Accelerate innovation with world-class tech teams We'll match you to an entire remote team.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mt-xl-5 wow fadeInUp" data-wow-delay="800ms">
              <div className="signle-process-item ps-xl-4">
                <div className="icons">
                  <div className="icon-1"><FaThumbsUp/></div>
                  <div className="icon-2">04</div>
                </div>
                <h4 className="mb-2">Review & Fixing</h4>
                <p>Accelerate innovation with world-class tech teams We'll match you to an entire remote team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;