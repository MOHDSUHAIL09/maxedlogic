import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaArrowRight, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';   // ✅ SEO component import

// Import images
import shape21 from '../assets/img/shape/shape-21.png';
import shape11 from '../assets/img/shape/shape-11.png';
import shape22 from '../assets/img/shape/shape-22.png';


const Contact = () => {
  // Form state
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

  // ✅ WhatsApp number (without '+' or spaces)
  const WHATSAPP_NUMBER = '917078264972';  // Your provided number with country code

  // Refs for parallax
  const breadcrumbRef = useRef(null);

  // Parallax effect
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

  // ✅ WhatsApp submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName.trim()) {
      alert('Please enter your First Name');
      return;
    }
    if (!formData.lastName.trim()) {
      alert('Please enter your Last Name');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your Email address');
      return;
    }
    if (!formData.agreeTerms) {
      alert('You must agree to the terms and conditions');
      return;
    }

    // Build WhatsApp message
    const servicesText = formData.services.length > 0 
      ? formData.services.join(', ') 
      : 'None selected';

    const message = `*📞 New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Country:* ${formData.country || 'Not provided'}
*Company Type:* ${formData.companyType || 'Not provided'}

*Services Needed:* ${servicesText}
*Budget Range:* $${budget.min} - $${budget.max}

*Message:*
${formData.message || 'No message provided'}

*Terms Agreed:* ✅ Yes`;

    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Optional: Show confirmation
    alert('Redirecting to WhatsApp... Please send the message there.');
  };

  return (
    <>
      {/* ✅ Page SEO */}
      <Seo
        title="Contact Us – IT Company in Noida Sector 62"
        description="Get in touch with Maxedlogic Technologies in Noida Sector 62, Delhi NCR. Call +91-9310008183 or email hr@maxedlogic.com for web, app, blockchain solutions."
        path="/contact"
      />

      {/* Breadcrumb Section with Parallax (commented as in original) */}
      {/* ... keep your breadcrumb markup exactly as you had ... */}

      {/* Contact Info Section */}
     <section className="contact-page-wrap mt-5 px-2 px-sm-5 px-md-5">
          <div className="row g-2">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="title">
                  <span>Call Us</span>
                  <h4>+91 9310008143</h4>
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
                  <h4>I Thum Heights , Sector 62 Noida.</h4>
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
                    <a href="mailto:info@maxedlogic.com">hr@maxedlogic.com</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Contact Form Section */}
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
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>





      {/* Map Section */}
      <section className="map-section section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="google-map position-relative">
                <iframe
                  title="Office Location - I-Thum Tower C, Sector 62, Noida"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.039501678236!2d77.36767197550064!3d28.628578175666913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzQyLjkiTiA3N8KwMjInMTIuOSJF!5e0!3m2!1sen!2sin!4v1777469472098!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;