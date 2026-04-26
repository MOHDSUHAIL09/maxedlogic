import React, { useEffect, useRef } from 'react';
import { FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Images
import shape6 from '../assets/img/shape/shape-6.png';
import case01 from '../assets/img/case/01.jpg';
import case02 from '../assets/img/case/02.jpg';
import case03 from '../assets/img/case/03.jpg';
import case04 from '../assets/img/case/04.jpg';

const Projects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination, Navigation],

        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-dot',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },

        breakpoints: {
          480: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      });

      return () => swiper.destroy(true, true);
    }
  }, []);

  return (
    <section className="case-study-wrapper case-study-1 section-bg section-padding">
      
      {/* Shape */}
      <div className="shape">
        <img className="shape-1" src={shape6} alt="shape" />
      </div>

      {/* Title + Navigation Buttons (top right) */}
      <div className="container">
        <div className="section-title-area position-relative">
          <div className="section-title">
            <div className="sub-title">
              <span>LATEST CASE PROJECTS</span>
            </div>
            <h2 className="split-text left">Introduce Our Projects</h2>
          </div>

          {/* Navigation Buttons - Top Right */}
          <div className="swiper-button-wrapper position-absolute top-0 end-0 d-flex gap-3">
            <button className="swiper-prev btn-nav" aria-label="Previous">
              <FaArrowLeft />
            </button>
            <button className="swiper-next btn-nav" aria-label="Next">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="case-study-inner mt-5">
        <div className="swiper caseStudy" ref={swiperRef}>
          <div className="swiper-wrapper">

            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="single-case-item">
                <div className="image">
                  <img src={case01} alt="project" />
                </div>
                <div className="content d-flex justify-content-between">
                  <div className="title">
                    <h4>MLM Softwares</h4>
                  </div>
                  <span className="icon">
                    <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="single-case-item">
                <div className="image">
                  <img src={case02} alt="project" />
                </div>
                <div className="content d-flex justify-content-between">
                  <div className="title">
                    <h4>Banking Software</h4>
                  </div>
                  <span className="icon">
                    <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="single-case-item">
                <div className="image">
                  <img src={case03} alt="project" />
                </div>
                <div className="content d-flex justify-content-between">
                  <div className="title">
                    <h4>ERP Software</h4>
                  </div>
                  <span className="icon">
                    <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>


                          {/* Slide 6 */}
              <div className="swiper-slide">
              <div className="single-case-item">
                <div className="image">
                  <img src={case04} alt="project" />
                </div>
                <div className="content d-flex justify-content-between">
                  <div className="title">
                    <h4>E-Commerce </h4>
                  </div>
                  <span className="icon">
                    <FaLongArrowAltRight />
                  </span>
                </div>
              </div>
            </div>

          </div>  

          {/* Pagination dots */}
          <div className="swiper-dot mt-4"></div>
        </div>
      </div>

      {/* Inline or external CSS – add styling for buttons */}
      <style>
        {`
          .swiper-button-wrapper {
            z-index: 10;
            margin-top: 80px;
          }
          .btn-nav {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #333;
            font-size: 18px;
          }
          .btn-nav:hover {
            background: #007bff;
            color: #fff;
            border-color: #007bff;
          }
          @media (max-width: 768px) {
            .btn-nav {
              width: 36px;
              height: 36px;
              font-size: 14px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;