import React from 'react';
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';

// Import logo image
import blackLogo from '../assets/img/logo/black-logo.png';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-widgets-1 section-padding">
          <div className="row g-5">
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                <div className="widget-head">
                  <a href="index-2.html">
                    <img className='header-logo' src={blackLogo} alt="logo-img" />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    We offer a wide range of services and expertise in various fields of information technology.
                    
                  </p>
                  <h5>Subscribe Now</h5>
                  <div className="footer-input border-radius-none">
                    <input type="email" id="email2" placeholder="Your Email" />
                    <button className="newsletter-btn border-radius-none" type="submit">
                      <FaTelegramPlane />
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaDribbble /></a>
                    <a href="#"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="single-footer-widget ms-xxl-2">
                <div className="widget-head">
                  <h4>Useful Links</h4>
                </div>
                <ul className="list-area">
                  <li><a href="about.html"><FaCircle /> About </a></li>
                  <li><a href="services.html"><FaCircle />Services</a></li>
                  <li><a href="blog-news.html"><FaCircle /> Blog</a></li>
                  <li><a href="contact.html"><FaCircle /> Contact Us</a></li>
                  <li><a href="projects.html"><FaCircle /> Projects</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                <div className="widget-head">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-area">
                  <li><a href="contact.html"><FaCircle /> Blockchain technology</a></li>
                  <li><a href="contact.html"><FaCircle /> Advanced Technology</a></li>
                  <li><a href="contact.html"><FaCircle /> Infrastructure Technology</a></li>
                  <li><a href="contact.html"><FaCircle /> Data Management</a></li>
                  <li><a href="contact.html"><FaCircle /> Security Management</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 wow fadeInUp" data-wow-delay="800ms">
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact">
                      <a href="#"><FaEnvelope /></a>
                      <div className="contact-infu">
                        <span>Mail Us:</span>
                        <h5>info@maxedlogic.com</h5>
                      </div>
                    </div>
                    <div className="contact">
                      <a href="#"><FaMapMarkerAlt /></a>
                      <div className="contact-infu">
                        <span>Address:</span>
                        <h5 className="text-lowercase">I Thum Tower C , Sector 62 Noida ,India</h5>
                      </div>
                    </div>
                    <div className="contact">
                      <a href="#"><FaPhoneAlt /></a>
                      <div className="contact-infu">
                        <span>Phone:</span>
                        <h5>+91 9310008183</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-bg-2">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p className="text-center">
              &copy;Copyright 2026 maxedlogic  All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;