import React, { useRef, useEffect, useState } from 'react';
import { FaChartLine, FaShieldAlt, FaPaintBrush, FaCube, FaDatabase, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrCloudSoftware } from "react-icons/gr";
import { MdOutlineAppShortcut } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import all images
import shape1 from '../assets/img/shape/shape-1.png';
import world from '../assets/img/world.png';
import serviceShape1 from '../assets/img/service/shape-1.png';
import serviceShape2 from '../assets/img/service/shape-2.png';
import serviceImg01 from '../assets/img/service/1.png';
import serviceImg02 from '../assets/img/service/2.jpg';
import serviceImg03 from '../assets/img/service/3.png';
import serviceImg04 from '../assets/img/service/4.png';
import serviceImg05 from '../assets/img/service/5.png';
import { Link } from 'react-router-dom';

// Service data array
const servicesData = [
  {
    id: 2,
    title: 'Software Development',
    description: 'Software development is creating and maintaining applications or systems.',
    icon: <GrCloudSoftware />,
    image: serviceImg02,
  },
  {
    id: 3,
    title: 'App Development',
    description: 'App development is creating applications for mobile or web platforms.',
    icon: <MdOutlineAppShortcut />,
    image: serviceImg03,
  },
  {
    id: 4,
    title: 'Blockchain Development',
    description: 'Blockchain development is building decentralized apps using blockchain technology.',
    icon: <SiBlockchaindotcom />,
    image: serviceImg04,
  },
  {
    id: 5,
    title: 'ERP Development',
    description: 'ERP development is building software to manage and integrate business processes.',
    icon: <FaConnectdevelop />,
    image: serviceImg05,
  },
   {
    id: 1,
    title: 'Payment Gateway',
    description: 'A payment gateway securely processes online payments.',
    icon: <RiSecurePaymentLine />,
    image: serviceImg01,
  },
];

const Service = () => {
  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Attach navigation buttons after swiper is initialized and refs are ready
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Assign the button elements to Swiper navigation
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      
      // Re-initialize navigation
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <>
      <section className="service-wrapper service-1 section-bg section-padding">
        <div className="shapes relative">
          <img className="shape-1 absolute top-0 left-0 w-1/4 md:w-1/6" src={shape1} alt="" />
          <img className="shape-2 absolute bottom-0 right-0 w-1/3 md:w-1/5" src={world} alt="" />
        </div>
        <div className="container">
          <div className="service-inner">
            {/* Top Content - Years of Experience & Titles */}
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-md-12 col-12 wow fadeInLeft" data-wow-delay="300ms">
                <div className="countbox">
                  <h3><span className="count">14</span>+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="section-title mt-4">
                  <h2 className="split-text left">
                    We run all kinds of IT <br /> services that vow your success
                  </h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-12 col-12 wow fadeInRight" data-wow-delay="300ms">
                <div className="title">
                  <h3>
                    We are technology solutions providing company all over the world.
                  </h3>
                </div>
              </div>
            </div>

            {/* Swiper Carousel Section */}
            <div className="row mt-4">
              <div className="col-12 position-relative service-slider-wrapper">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={false} // Disable default navigation
                  onSwiper={setSwiperInstance} // Get swiper instance
                  breakpoints={{
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                  loop={false}
                  className="service-swiper"
                >

                  
                  {servicesData.map((service) => (
                    
                    <SwiperSlide key={service.id}>
                      <Link to="service">
                      <div className="dd single-service-item h-100">
                        <div className="shape">
                          <img className="shape-3" src={serviceShape1} alt="" />
                          <img className="shape-4" src={serviceShape2} alt="" />
                        </div>
                        <div className="image">
                          <img src={service.image} alt={service.title} />
                        </div>
                        <div className="content">
                          <div className="icon"><i>{service.icon}</i></div>
                          <h4><a href="services-details.html">{service.title}</a></h4>
                          <p>{service.description}</p>
                        </div>
                      </div>
                      </Link>
                    </SwiperSlide>
                    
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons with refs */}
                <div className="service-nav-buttons">
                  <button ref={prevRef} className="service-custom-prev">
                    <FaArrowLeft />
                  </button>
                  <button ref={nextRef} className="service-custom-next">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-swiper {
          padding: 10px 5px 20px 5px;
          overflow: hidden;
        }
        .service-slider-wrapper {
          position: relative;
        }
        /* Navigation buttons container - positioned at top right */
        .service-nav-buttons {
          position: absolute;
          top: -30px;
          right: 20px;
          display: flex;
          gap: 12px;
          z-index: 20;
        }
        /* Unique button styles */
        .service-custom-prev,
        .service-custom-next {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #333;
          font-size: 18px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .service-custom-prev:hover,
        .service-custom-next:hover {
          background: #007bff;
          color: #fff;
          border-color: #007bff;
          transform: scale(1.05);
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .service-nav-buttons {
            top: -10px;
            gap: 8px;
          }
          .service-custom-prev,
          .service-custom-next {
            width: 36px;
            height: 36px;
            font-size: 14px;
          }
        }
        .single-service-item {
          height: 100%;
          transition: all 0.3s ease;
        }
        .row.mt-4 {
          overflow: visible;
        }
        .position-relative {
          overflow: visible;
        }
      `}</style>
    </>
  );
};

export default Service;