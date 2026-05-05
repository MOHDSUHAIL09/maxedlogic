import React from 'react';
import { Link,  } from 'react-router-dom';
import { 
  FaCode, FaWrench, FaBrain, FaCogs, FaNetworkWired,
  FaLongArrowAltRight, FaComments, FaThumbsUp, FaAngleDoubleRight
} from 'react-icons/fa';
import { TfiShoppingCartFull } from "react-icons/tfi";
import { MdAppShortcut } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { SiBlockchaindotcom } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

// import breadcrumbImg from '../../assets/img/breadcrumb.jpg';
import processShape6 from '../../assets/img/process/shape-6.png';
import processShape7 from '../../assets/img/process/shape-7.png';
import Seo from '../../components/Seo';

const Service = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaCode />,
      frontTitle: "Web Development",
      frontDesc: "As a leading website designer and developer in India, we turn your vision into a stunning and authoritative website that seamlessly connects your brand with your customers.",
    
      backTitle: "Web Development",
      backDesc: "Maxed Logic is a leading web development company in Noida, India, dedicated to transforming your ideas into powerful digital solutions. We provide the best web development services in Noida, helping businesses build...",
    
      delay: "200ms"
    },
    {
      id: 2,
      icon: <MdAppShortcut />,
      frontTitle: "App Development",
      frontDesc: "Create an Android app that stands one in a million with our expert app development services. Whether you have an idea for a database-driven Android application...",
     
      backTitle: "App Development",
      backDesc: "We develop custom mobile applications according to your business needs. Get your Mobile App for iOS and Android platforms. With our team of expert app designers, you will get only the best...",
   
      delay: "400ms"
    },
    {
      id: 3,
      icon: <GrCloudSoftware />,
      frontTitle: "Software Development",
      frontDesc: "We are a leading software development company delivering top-rated and customized software solutions tailored to your business needs. With our vast experience and technical.",
      
      backTitle: "Software Development",
      backDesc: " maxedlogic is a software development company in Noida India. We provide innovative, reliable and scalable software solution for any OS in Noida India. We have been providing software solutions in multiple domains across different software platforms.",
     
      delay: "600ms"
    },
    {
      id: 4,
      icon: <SiBlockchaindotcom />,
      frontTitle: "Blockchain Development",
      frontDesc: "We transform your ideas into powerful blockchain solutions, helping you discover innovative networking models that enhance transparency, security, and efficiency for your business.",
     
      backTitle: "Blockchain Development",
      backDesc: "maxedlogic Technologies is a leading Blockchain Development company in Noida, India, delivering innovative and customized blockchain solutions tailored to diverse business needs. We specialize in building secure, scalable, and decentralized applications",
    
      delay: "800ms"
    },
    {
      id: 5,
      icon: <RiSecurePaymentFill />,
      frontTitle: "Payment Gateway",
      frontDesc: "We provide secure and reliable Payment Gateway integration services that enable smooth, fast, and hassle-free online transactions for your business. Our solutions to support multiple payment methods.",

      backTitle: "Payment Gateway",
      backDesc: "Maxed Logic delivers advanced, secure payment gateway integrations that power seamless, lightning-fast transactions while supporting a wide spectrum of modern payment methods—ensuring reliability your business can trust.",
     
      delay: "200ms"
    },
    {
      id: 6,
      icon: <FaBrain />,
      frontTitle: "ERP Development",
      frontDesc: "We build smart ERP systems that automate workflows, simplify complex processes, and give you real-time control over every aspect of your business with precision and scalability.",

      backTitle: "ERP Development",
      backDesc: "Maxed Logic offers custom ERP development services that automate workflows, streamline business operations, and deliver real-time data control with scalable and secure ERP solutions for growing businesses.",

      delay: "400ms"
    },
    {
      id: 7,
      icon: <FaDatabase />,
      frontTitle: "Data Analytics",
      frontDesc: "Our data analytics services and research skills help segment audiences by different demographic groups and analyze attitudes and trends in each of them with precision.",
  
      backTitle: "Data Analytics",
      backDesc: "Maxed Logic leverages advanced data analytics and research-driven strategies to segment audiences by demographics, uncover behavioral trends, and produce accurate, actionable insights that drive smarter decisions and business growth.",
  
      delay: "600ms"
    },
    {
      id: 8,
      icon: <IoGameController />,
      frontTitle: "Gaming App Development",
      frontDesc: "Owing to its wide adaptability in the multiple game development languages that it supports, Android games have been extremely popular across global markets worldwide.",
 
      backTitle: "Gaming App Development",
      backDesc: "Maxed Logic is a leading gaming app development company in Noida, India, offering end-to-end game development services at competitive rates. Our experienced team has worked on top-tier games for major industry players, delivering high-quality.",
   
      delay: "800ms"
    }
  ];

  // Generate ID from title for each service
  const getServiceId = (title) => title.toLowerCase().replace(/ /g, '-');

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

          /* FLIP CARD STYLES - keeps original design, adds 3D flip */
          .signle-service-item {
            background: transparent !important;
            perspective: 1000px;
            height: 100%;
            min-height: 380px;
            cursor: pointer;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .signle-service-item:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-front, .flip-back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: inherit;
            background: #fff;
            box-shadow: 0 5px 30px rgba(0,0,0,0.08);
            padding: 30px 20px;
            box-sizing: border-box;
            padding-top: 70px;
          }

          .flip-front {
            transform: rotateY(0deg);
          }

          .flip-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <Seo
        title="IT Services in Noida | Web Development, App, Blockchain & More"
        description="Maxedlogic Technologies offers top IT services in Noida: Web Development, Mobile App Development, Software Development, Blockchain, Payment Gateway Integration, ERP, Data Analytics, and Gaming App Development. Get a free consultation today!"
        path="/services"
        type="website"
      />

      {/* Breadcrumb with Parallax Background */}
      {/* <div
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
      </div> */}

      <section className="service-wrapper service-4 section-bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title"><span>OUR SERVICES</span></div>
            <h2>IT Services in Noida   <br /> Maxedlogic Technologies.</h2>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            <div className="row gy-xxl-5">
              {servicesData.map((service) => (
                <div 
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6" 
                  key={service.id}
                  id={getServiceId(service.frontTitle)}
                >
                  <div className="signle-service-item wow fadeInUp" data-wow-delay={service.delay}>
                    <div className="flip-card-inner">
                      {/* FRONT SIDE - original design */}
                      <div className="flip-front">
                        <div className="service-bg bg-cover" />
                        <div className="icon">{service.icon}</div>
                        <div className="line mb-4" />
                        <h4>{service.frontTitle}</h4>
                        <p className="pt-3">{service.frontDesc}</p>
                        <Link to={service.frontLink} className="infu-btn">
                          Read More <FaLongArrowAltRight className="arrow-icon" />
                        </Link>
                      </div>
                      {/* BACK SIDE - same design, different text */}
                      <div className="flip-back">
                        <div className="service-bg bg-cover" />
                        <div className="icon"><i className='flaticon-user-experience'>{service.icon}</i></div>
                        <div className="line mb-3" />
                        <h4>{service.backTitle}</h4>
                        <p className="pt-1">{service.backDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>  
          </div>
        </div>
      </section>

      {/* Process Section - unchanged */}
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