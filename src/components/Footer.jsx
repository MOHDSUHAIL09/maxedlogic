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
import blackLogo from '../assets/img/logo/black-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-widgets-1 section-padding">
          <div className="row g-5">
            {/* Logo & Subscribe */}
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                <div className="widget-head">
                  <a href="/">
                    <img className='header-logo' src={blackLogo} alt="logo-img" />
                  </a>
                </div>
                <div className="footer-content">
                  <p>We offer a wide range of services and expertise in various fields of information technology.</p>
                  <h5>Subscribe Now</h5>
                  <div className="footer-input border-radius-none">
                    <input type="email" id="email2" placeholder="Your Email" />
                    <button className="newsletter-btn border-radius-none" type="submit">
                      <FaTelegramPlane />
                    </button>
                  </div>
                  <ul className="social-box">
                    <li><a href="https://www.facebook.com/profile.php?id=61584969285044"><i className="fa-brands fa-facebook-f"></i></a></li>                
                    <li><a href="https://www.instagram.com/maxedlogic__official/?hl=en"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/maxed-logic-682b3b3b6/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Useful Links – FIXED */}
            <div className="col-xl-2 col-lg-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="single-footer-widget ms-xxl-2">
                <div className="widget-head">
                  <h4>Useful Links</h4>
                </div>
                <ul className="list-area">
                  <li><Link to="/about"><FaCircle /> About</Link></li>
                  <li><Link to="/service"><FaCircle /> Services</Link></li>
                  <li><Link to="/blogs"><FaCircle /> Blog</Link></li>
                  <li><Link to="/contact"><FaCircle /> Contact Us</Link></li>
                  <li><Link to="/products"><FaCircle /> Products</Link></li>
                </ul>
              </div>
            </div>

            {/* Our Services (unchanged) */}
            <div className="col-xl-3 col-lg-6 wow fadeInUp" data-wow-delay="600ms">
              <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                <div className="widget-head">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-area">
                  <li><a href="/contact"><FaCircle /> Blockchain technology</a></li>
                  <li><a href="/contact"><FaCircle /> Advanced Technology</a></li>
                  <li><a href="/contact"><FaCircle /> Infrastructure Technology</a></li>
                  <li><a href="/contact"><FaCircle /> Data Management</a></li>
                  <li><a href="/contact"><FaCircle /> Security Management</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Us (unchanged) */}
            <div className="col-xl-3 col-lg-6 wow fadeInUp" data-wow-delay="800ms">
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div 
                      className="contact" 
                      onClick={() => window.location.href = 'mailto:hr@maxedlogic.com'}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaEnvelope className='fotter-socal-icon' />
                      <div className="contact-infu">
                        <span>Mail Us:</span>
                        <h5>hr@maxedlogic.com</h5>
                      </div>
                    </div>
                    <div 
                      className="contact" 
                      onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=I+Thum+Heights+Sector+62+Noida+India', '_blank')}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaMapMarkerAlt className='fotter-socal-icon' />
                      <div className="contact-infu">
                        <span>Address:</span>
                        <h5 className="text-lowercase">I Thum Heights , Sector 62 Noida ,India</h5>
                      </div>
                    </div>
                    <div 
                      className="contact" 
                      onClick={() => window.location.href = 'tel:+919310008143'}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaPhoneAlt className='fotter-socal-icon'/>
                      <div className="contact-infu">
                        <span>Phone:</span>
                        <h5>+91 9310008143</h5>
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
              &copy;Copyright 2018 maxedlogic  All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;