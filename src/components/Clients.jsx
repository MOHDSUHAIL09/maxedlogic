import React, { useEffect, useRef } from 'react';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Import images
import shape11 from '../assets/img/shape/shape-11.png';
import testimonial01 from '../assets/img/testimonial/01.png';
import testimonial04 from '../assets/img/testimonial/04.png';
import testimonial05 from '../assets/img/testimonial/05.png';
import testimonial06 from '../assets/img/testimonial/06.png';

const Clients = () => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        },
      });
    }
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
        swiperInstance.current = null;
      }
    };
  }, []);

  const handlePrev = () => {
    if (swiperInstance.current) swiperInstance.current.slidePrev();
  };
  const handleNext = () => {
    if (swiperInstance.current) swiperInstance.current.slideNext();
  };

  return (
    <section className="testimonial-wrapper testimonial-4 section-padding">
      <div className="container">
        <div className="testimonial-header d-flex justify-content-between align-items-center flex-wrap">
          <div className="section-title">
            <div className="sub-title"><span>OUR TESTIMONIAL</span></div>
            <h3>What our clients say about us</h3>
            <p>Accelerate innovation with world-class tech teams We’ll match <br /> you to an entire remote team of incredible</p>
          </div>
          <div className="swiper-nav-buttons d-flex gap-2">
            <button className="custom-swiper-prev" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
            <button className="custom-swiper-next" onClick={handleNext}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="testimonial-inner mt-2 p-5">
        <div className="swiper testimonial-4" ref={swiperRef}>
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="single-testimonial-item wow fadeInUp" data-wow-delay="200ms">
                <img className="shape-1" src={shape11} alt="" />
                <div className="client-img center">
                  <img src={testimonial04} alt="client-img" />
                  <div className="icon"><FaQuoteLeft /></div>
                </div>
                <ul className="client-rating d-flex align-items-center justify-content-center">
                  <li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li>
                </ul>

                <h5>"Pioneers in AI Integration Services"</h5>
                <p className="text">"Their advanced AI solutions helped us streamline operations and improve user experiences effortlessly."</p>
                <div className="client-info">
                  <h6>William Jekson</h6>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="single-testimonial-item wow fadeInUp" data-wow-delay="200ms">
                <img className="shape-1" src={shape11} alt="" />
                <div className="client-img center">
                  <img src={testimonial05} alt="client-img" />
                  <div className="icon"><FaQuoteLeft /></div>
                </div>
                <ul className="client-rating d-flex align-items-center justify-content-center">
                  <li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li>
                </ul>
                <h5>"Exceptional Service for AI Innovation"</h5>
                <p className="text">"Integrating their AI solutions revolutionized our workflows, unlocking new efficiency and productivity levels."</p>
                <div className="client-info">
                  <h6>Steve Smit</h6>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="single-testimonial-item wow fadeInUp" data-wow-delay="200ms">
                <img className="shape-1" src={shape11} alt="" />
                <div className="client-img center">
                  <img src={testimonial06} alt="client-img" />
                  <div className="icon"><FaQuoteLeft /></div>
                </div>
                <ul className="client-rating d-flex align-items-center justify-content-center">
                  <li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li>
                </ul>
                <h5>"Top AI Partner for <br /> Growth"</h5>
                <p className="text">"Their AI-driven insights helped us make smarter decisions, boosting our overall business performance."</p>
                <div className="client-info">
                  <h6>Will Jacks</h6>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="single-testimonial-item wow fadeInUp" data-wow-delay="200ms">
                <img className="shape-1" src={shape11} alt="" />
                <div className="client-img center">
                  <img src={testimonial01} alt="client-img" />
                  <div className="icon"><FaQuoteLeft /></div>
                </div>
                <ul className="client-rating d-flex align-items-center justify-content-center">
                  <li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li><li><FaStar /></li>
                </ul>
                <h5>"Pioneers in AI Integration Services"</h5>
                <p className="text">"Integrating their AI solutions revolutionized our workflows, unlocking new efficiency and productivity levels."</p>
                <div className="client-info">
                  <h6>Michael Jon</h6>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;