import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaArrowRight, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';   // ✅ SEO component import

// Import images
import breadcrumbImg from '../assets/img/contact-imgage.jpg';
import shape21 from '../assets/img/shape/shape-21.png';
import shape11 from '../assets/img/shape/shape-11.png';
import shape22 from '../assets/img/shape/shape-22.png';
import avatarImg from '../assets/img/Avatar.png';

const Contact = () => {
  // Form state (same as before)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    companyType: '',
    services: [],
    agreeTerms: false,
  });

  const [budget] = useState({ min: 56, max: 1578 });

  // ✅ Refs for parallax
  const breadcrumbRef = useRef(null);

  // ✅ Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (breadcrumbRef.current) {
        const scrollY = window.scrollY;
        const parallaxY = scrollY * 0.5;
        breadcrumbRef.current.style.backgroundPosition = `center ${parallaxY}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, value] : prev.services.filter((item) => item !== value),
    }));
  };

  const handleTermsChange = (e) => {
    setFormData((prev) => ({ ...prev, agreeTerms: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, budget });
    // Add your API call here
  };

  return (
    <>
      {/* ✅ Page SEO */}
      <Seo
        title="Contact Us – IT Company in Noida Sector 62"
        description="Get in touch with Maxedlogic Technologies in Noida Sector 62, Delhi NCR. Call +91-9310008183 or email hr@maxedlogic.com for web, app, blockchain solutions."
        path="/contact"
      />

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
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Contact Us
              </h1>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link to="/">Home</Link>
                </li>
                  <li><FaAngleDoubleRight/></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section (same) */}
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="title">
                  <span>Call Us</span>
                  <h4>+91 9310008183</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="title">
                  <span>Our Location</span>
                  <h4>I Thum Tower C , Sector 62 Noida ,India</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="title">
                  <span>Mail us</span>
                  <h4>
                    <a href="mailto:info@maxedlogic.com">info@maxedlogic.com</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (unchanged) */}
      <section className="contact-us-wrapper contact-us-2 section-padding">
        <div className="shape">
          <img className="shape-1" src={shape21} alt="Decorative shape" />
          <img className="shape-2" src={shape11} alt="Decorative shape" />
          <img className="shape-3" src={shape22} alt="Decorative shape" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>CONTACT US</span>
            </div>
            <h2>
              Dealing in All <br /> Professional IT Services
            </h2>
          </div>
          <div className="contact-us-inner">
            <form onSubmit={handleSubmit}>
              <div className="row g-5">
                <div className="col-xl-6 col-lg-12 col-md-12 pe-xl-0 wow fadeInLeft" data-wow-delay="300ms">
                  <div className="contact-left">
                    <div className="row g-4">
                      <div className="col-lg-6 pe-0 wow fadeInUp" data-wow-delay=".2">
                        <span>First Name</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 pe-0 wow fadeInUp" data-wow-delay=".6">
                        <span>Last Name</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 pe-0 wow fadeInUp" data-wow-delay=".4">
                        <span>Your Email</span>
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 pe-0 wow fadeInUp" data-wow-delay=".2">
                        <span>Phone Number</span>
                        <div className="form-clt">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 pe-0 wow fadeInUp" data-wow-delay=".6">
                        <span>Country</span>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="country"
                            placeholder="Your Country"
                            value={formData.country}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="checked-box mt-4 pt-3">
                      <span className="fw-semibold">What you need from us?</span>
                      <div className="checked-box-items mt-2">
                        {['App Design', 'Digital Marketing', 'UI/UX Design', 'Cloud service', 'Other Services'].map(
                          (service) => (
                            <div className="form-check" key={service}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={service}
                                id={`service-${service}`}
                                checked={formData.services.includes(service)}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor={`service-${service}`}>
                                {service}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight" data-wow-delay="300ms">
                  <div className="contact-right ps-xl-5 ms-xl-3">
                    <div className="col-lg-12 wow fadeInUp mt-4" data-wow-delay=".8">
                      <span>Your Message</span>
                      <div className="form-clt-big form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write a Message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="termsCheck"
                        checked={formData.agreeTerms}
                        onChange={handleTermsChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="termsCheck">
                        Click the box and agree to our terms and conditions
                      </label>
                    </div>

                    <div className="contact-btn d-flex align-items-center justify-content-between flex-wrap mt-4">
                      <button type="submit" className="theme-btn black-btn">
                        Send Message
                      </button>
                      <div className="infu pt-xxl-0 pt-3">
                        <img src={avatarImg} alt="Customer support avatar" />
                        <p>Meet With Expert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (unchanged) */}
      <section className="map-section section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="google-map position-relative">
                <iframe
                  title="Office Location - I-Thum Tower C, Sector 62, Noida"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.0199999999996!2d77.3533903!3d28.573811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d3c8b6a5a1%3A0x8e5a6c2e5c8f5b2d!2sI-Thum%20Tower%20C%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    backgroundColor: 'white',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 10,
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  <FaMapMarkerAlt style={{ color: '#007bff', fontSize: '18px' }} />
                  <span>📍 I-Thum Tower C, Sector 62, Noida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;