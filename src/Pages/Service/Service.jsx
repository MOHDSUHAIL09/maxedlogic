import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaCode, FaWrench, FaBrain, FaCogs, FaNetworkWired,
  FaLongArrowAltRight, FaComments, FaThumbsUp, FaAngleDoubleRight
} from 'react-icons/fa';
import { MdAppShortcut } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { SiBlockchaindotcom } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

import breadcrumbImg from '../../assets/img/breadcrumb.jpg';
import processShape6 from '../../assets/img/process/shape-6.png';
import processShape7 from '../../assets/img/process/shape-7.png';

const Service = () => {
  const { pathname } = useLocation();
  const breadcrumbRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Parallax effect for breadcrumb background
  useEffect(() => {
    const handleScroll = () => {
      if (breadcrumbRef.current) {
        const scrollY = window.scrollY;
        // Move background at half speed for smooth parallax
        const parallaxY = scrollY * 0.5;
        breadcrumbRef.current.style.backgroundPosition = `center ${parallaxY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .infu-btn .arrow-icon {
            color: #007bff;
            transition: color 0.3s ease;
            margin-left: 5px;
          }
          .infu-btn:hover .arrow-icon {
            color: #ffffff !important;
          }
        `}
      </style>

      {/* Breadcrumb with Parallax Background */}
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
              <h1 className="wow fadeInUp" data-wow-delay=".3s">Service</h1>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><FaAngleDoubleRight/></li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="service-wrapper service-4 section-bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title"><span>OUR SERVICES</span></div>
            <h2>IT Services in Noida   <br /> Maxedlogic Technologies.</h2>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            <div className="row gy-xxl-5">


               
              {/* Card 1 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="200ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><FaCode /></i></div>
                  <div className="line mb-4" />
                  <h4>Web Development</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="400ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><MdAppShortcut/></i></div>
                  <div className="line mb-4" />
                  <h4>App Development</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/cyber-security" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="600ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><GrCloudSoftware/></i></div>
                  <div className="line mb-4" />
                  <h4>Software Development</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/ui-ux-design" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="800ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><SiBlockchaindotcom/></i></div>
                  <div className="line mb-4" />
                  <h4>Blockchain Development</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/business-planning" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="200ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><RiSecurePaymentFill/></i></div>
                  <div className="line mb-4" />
                  <h4>Payment Gateway</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/management" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="400ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><FaBrain /></i></div>
                  <div className="line mb-4" />
                  <h4>ERP Development</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/data-science" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 7 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="600ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><FaDatabase/></i></div>
                  <div className="line mb-4" />
                  <h4>Data Analytics</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/pro-technology" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

              {/* Card 8 */}
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="signle-service-item wow fadeInUp" data-wow-delay="800ms">
                  <div className="service-bg bg-cover" />
                  <div className="icon"><i className='flaticon-user-experience'><IoGameController/></i></div>
                  <div className="line mb-4" />
                  <h4>Gaming App Development</h4>
                  <p className="pt-3">Back up your database, store in a safe and secure place while still maintaining.</p>
                  <Link to="/services/it-consultant" className="infu-btn">Read More <FaLongArrowAltRight className="arrow-icon" /></Link>
                </div>
              </div>

            </div>  
          </div>
        </div>
      </section>

      {/* Process Section */}
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

export default Service;