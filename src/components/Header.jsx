import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaAngleDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaMinus,
  FaPlus,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { CgMenuGridR } from "react-icons/cg";

// Import images
import logo from '../assets/img/logo/black-logo.png';
import logowhite from '../assets/img/logo/whitelogo.png'

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const [isInfoGroupActive, setIsInfoGroupActive] = useState(false);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const toggleSubmenu = (key) => {
    setOpenSubmenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeOffcanvas();
        setIsInfoGroupActive(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <header>
        <div id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <a href="index-2.html" className="header-logo">
                      <img src={logo} alt="logo-img" className="header-logo" />
                    </a>
                  </div>
                </div>
                <div className="header-right">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li><NavLink to="/pages">Pages</NavLink></li>

                        <li className="menu-item-has-children">
  <NavLink to="/service">
    Services <i className="fas fa-angle-down"></i>
  </NavLink>
  <ul className="submenu">
    <li><NavLink to="/service">App Development</NavLink></li>
    <li><NavLink to="/service"> Web Development</NavLink></li>
    <li><NavLink to="/service"> Social Media Marketing</NavLink></li>
    <li><NavLink to="/service">Software Development</NavLink></li>
    <li><NavLink to="/service"> Blockchain Development</NavLink></li>
    <li><NavLink to="/service"> Business Consulting</NavLink></li>
    <li><NavLink to="/service">Payment Gateway</NavLink></li>
    <li><NavLink to="/service">Gaming App Development </NavLink></li>
  </ul>
</li>








                          <li className="has-dropdown"><NavLink to="/projects">Projects</NavLink></li>
                          <li><NavLink to="/news">News</NavLink></li>
                          <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <a href="#0" className="search-trigger search-icon mb-1">
                    <FaSearch style={{ fontSize: "18px" }} />
                  </a>

                  <div className="header-button d-none d-sm-block">
                    <a href="#" className="theme-btn black-btn">Get In Touch</a>
                  </div>

                  <div className="sidebar">
                    <div className="nav-btn navSidebar-button" onClick={() => setIsInfoGroupActive(true)}>
                      <span><CgMenuGridR style={{ width: "25px", height: "25px" }} /></span>
                    </div>
                  </div>

                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                      <FaBars />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Mobile Menu */}
      <div className={`offcanvas__info ${isOffcanvasOpen ? 'info-open' : ''}`}>
        <div className="offcanvas__close" onClick={closeOffcanvas}><FaTimes /></div>
        <div className="offcanvas__logo mb-30">
          <a href="index-2.html"><img src={logowhite} alt="logo" /></a>
        </div>
        <div className="mobile-menu mean-container d-xl-none">
          <nav>
            <ul>
              <li className="has-dropdown">Home</li>
              <li className="has-dropdown">Pages </li>
              <li className="has-dropdown">Team</li>
              <li className="has-dropdown">Team Details</li>
              <li className="has-dropdown">About</li>
              <li className="has-dropdown">FAQS</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`offcanvas__overlay ${isOffcanvasOpen ? 'overlay-open' : ''}`} onClick={closeOffcanvas}></div>

      <div className={`xs-sidebar-group info-group ${isInfoGroupActive ? 'isActive' : ''}`}>
        <div className="xs-overlay xs-bg-black" onClick={() => setIsInfoGroupActive(false)}></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <img src={logowhite} alt='logo' className='header-logo' />
            <div className="widget-heading">
              <a href="#" className="close-side-widget" onClick={(e) => { e.preventDefault(); setIsInfoGroupActive(false); }}>
                <i className="fa-solid fa-xmark"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="contact-info">
                  <h2>About Company</h2>
                  <p>
                    We are a team of skilled professionals dedicated to providing innovative and effective solutions to your technology needs. We offer a wide range of services and expertise in various fields of information technology.
                  </p>

                  <h2>Contact Information</h2>
                  <ul className="list-style-one">
                    <li>
                      <FaPhone className="icon" />
                      +91 9310008183
                    </li>
                    <li>
                      <FaEnvelope className="icon" />
                      info@maxedlogic.com
                    </li>

                    <li>
                      <FaMapMarkerAlt className="icon" />
                      I Thum Tower C , Sector 62 Noida ,India
                    </li>

                  </ul>
                  <ul className="social-box">
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;