import React from 'react'

import shape2 from '../../assets/img/shape/shape-1.png';
import serviceImg1 from '../../assets/img/servicedetails/01.jpg';
import serviceImg2 from '../../assets/img/servicedetails/02.jpg';


import worldImg from '../../assets/img/world.png';
import heroBg from '../../assets/img/hero/hero-1-1-bg.png';
import heroMainImg from '../../assets/img/hero/hero-1.png';
import { Link } from 'react-router-dom';







const service = () => {
  return (
    <>
      <section className="hero-wrapper hero-1 ">
        <div className="shape">
          <img className="shape-1" src={worldImg} alt="" />
        </div>
        <div
          className="hero-bg bg-cover"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="hero-content pe-xl-3 text-lg-start text-center tp-play-up">
                <h1>Web Development</h1>
                <p> Looking for a reliable & creative web development company? MaxedLogic is your trusted partner for future‑ready websites with modern frameworks, clean code, and user‑centric design. We deliver tailored, high‑performance results for business sites, e‑commerce, and custom apps – helping you stand out.</p>

                <ul className="custom-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Website & Mobile application design & Development
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Dramatically re‑engineer value added IT systems via mission‑critical solutions
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Custom e‑commerce platforms with secure payment gateway integration
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Future‑ready websites using modern frameworks & clean code
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    24/7 technical support & post‑launch maintenance
                  </li>
                </ul>
                <div className="hero-button mt-4">
                  <Link to="/contact" className="theme-btn">Explore More</Link>
                </div>

              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="hero-image">
                <img src={heroMainImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="about-wrapper about-1 style-2 about-page mt-2 ">
        <div className="container01">
          <div className="row" style={{marginBottom: "-60px"}}>
            <div className="col-xxl-6 col-xl-6 col-lg-12 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-images-2">

                <img className="shape-2" src={shape2} alt="" />
                <div className="image-1">
                  <img src={serviceImg1} alt="webdevelopment" className='webdevelopment-img' />
                </div>

              </div>
            </div>

            <div className="col-xxl-5 col-xl-6 col-lg-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
                <div className="section-title">
                  <div className="sub-title">
                    <span>Ecommerce Website</span>
                  </div>
                  <h2>
                    Ecommerce Website Development
                  </h2>
                </div>
                <p>
                  MaxedLogic delivers powerful, scalable, and secure ecommerce websites that turn visitors into paying customers. We build online stores with intuitive navigation, fast checkout experiences, mobile‑responsive designs, and robust backend integration. Whether you need a custom shopping cart, payment gateway setup, product filtering, or inventory management – our ecommerce solutions are tailored to boost your sales and streamline operations. With modern platforms like Shopify, WooCommerce, Magento, or custom development, we ensure your online business runs smoothly, securely, and efficiently.
                </p>
              


                <div className="about-infu">
                  <Link to="../contact"><a href="#" className="theme-btn">
                    Get In Touch
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="about-wrapper about-1 style-2 about-page" style={{marginBottom: "-60px", }}>
        <div className="container">
          <div className="row ">

            <div className="col-xxl-6 col-xl-6 col-lg-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
                <div className="section-title">
                  <div className="sub-title">
                    <span>Messaging Application</span>
                  </div>
                  <h2>
                    Messaging App
                  </h2>
                </div>
                <p>
                  MaxedLogic builds powerful, secure, and real‑time messaging apps with instant chat, group conversations, voice/video calling, and file sharing. We add essential features like push notifications, read receipts, typing indicators, and end‑to‑end encryption for complete security. Using WebSockets, Firebase, and Node.js, our apps deliver low latency, high scalability, and smooth performance on iOS, Android, and web. Whether it's a social chat app, customer support messenger, or team collaboration tool – we create custom solutions that connect people seamlessly.
                </p>


                <div className="about-infu">
                  <Link to="../contact"><a href="#" className="theme-btn">
                    Get In Touch
                  </a></Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-images-2">
                <img className="shape-2" src={shape2} alt="" />
                <div className="image-1">
                  <img src={serviceImg2} alt="webdevelopment" className='webdevelopment-img' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default service