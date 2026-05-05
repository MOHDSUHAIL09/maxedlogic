import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
import logowhite from '../assets/img/logo/whitelogo.png';

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [setOpenSubmenus] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const [isInfoGroupActive, setIsInfoGroupActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  const toggleSubmenu = (key) => {
    setOpenSubmenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Mobile dropdown toggle
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
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

  // Helper to generate hash for each service
  const getServiceHash = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  };

  return (
    <>
      <header>
        <div id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''}`}>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <a href="/" className="header-logo">
                      <img src={logo} alt="maxedlogic-logo-img" className="header-logo" />
                    </a>
                  </div>
                </div>
                <div className="header-right">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-lg-block">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li><NavLink to="/about">About</NavLink></li>
                          <li className="menu-item-has-children">
                            <NavLink to="/service" >
                              Services <i className="fas fa-angle-down"></i>
                            </NavLink>
                            <ul className="submenu">
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('App Development')}`}>App Development</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Web Development')}`}>Web Development</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Social Media Marketing')}`}>Social Media Marketing</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Software Development')}`}>Software Development</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Blockchain Development')}`}>Blockchain Development</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Business Consulting')}`}>Business Consulting</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Payment Gateway')}`}>Payment Gateway</NavLink>
                              </li>
                              <li className='submenu-item01'>
                                <NavLink to={`/service#${getServiceHash('Gaming App Development')}`}>Gaming App Development</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown"><NavLink to="/products">Products</NavLink></li>
                           <li><NavLink to="blogs">Blog</NavLink></li>
                          <li><NavLink to="/contact">Contact</NavLink></li>
                         
                        </ul>
                      </nav>
                    </div>
                  </div>

                  {/* <a href="#" className="search-trigger search-icon mb-1">
                    <FaSearch style={{ fontSize: "18px" }} />
                  </a> */}
{/* 
                  <div className="header-button d-none d-sm-block">
                    <Link to="about" className="theme-btn black-btn">Explore More</Link>
                  </div> */}
                  <div className="header-button d-none d-lg-block">
                    <div className="" onClick={() => setIsInfoGroupActive(true)}>
                      <div className="theme-btn black-btn">Explore More</div>
                    </div>
                  </div>

                  <div className="header__hamburger d-lg-none my-auto">
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
          <a href="/"><img src={logowhite} alt="maxedlogic-white-logo" /></a>
        </div>
        <div className="mobile-menu mean-container d-xl-none">
          <nav>
            <ul>
              <li>
                <NavLink to="/" onClick={closeOffcanvas}>Home</NavLink>
              </li>
              <li><NavLink to="/about" onClick={closeOffcanvas}>About</NavLink></li>

              {/* Services Dropdown */}
              <li className={`menu-item-has-children ${openDropdown === 'services' ? 'open' : ''}`}>
                <div className="menu-link-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <NavLink to="/service">Services</NavLink>
                  <span onClick={() => toggleDropdown('services')} style={{ padding: '10px', cursor: 'pointer' }}>
                    {openDropdown === 'services' ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <ul className="submenu">
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('App Development')}`} onClick={closeOffcanvas}>App Development</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Web Development')}`} onClick={closeOffcanvas}>Web Development</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Social Media Marketing')}`} onClick={closeOffcanvas}>Social Media Marketing</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Software Development')}`} onClick={closeOffcanvas}>Software Development</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Blockchain Development')}`} onClick={closeOffcanvas}>Blockchain Development</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Business Consulting')}`} onClick={closeOffcanvas}>Business Consulting</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Payment Gateway')}`} onClick={closeOffcanvas}>Payment Gateway</NavLink>
                  </li>
                  <li className='submenu-item'>
                    <NavLink to={`/service#${getServiceHash('Gaming App Development')}`} onClick={closeOffcanvas}>Gaming App Development</NavLink>
                  </li>
                </ul>
              </li>

              <li className="has-dropdown"><NavLink to="/projects" onClick={closeOffcanvas}>Projects</NavLink></li>
              <li><NavLink to="/contact" onClick={closeOffcanvas}>Contact</NavLink></li>
              <li><NavLink to="blogs" onClick={closeOffcanvas}>Blog</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`offcanvas__overlay ${isOffcanvasOpen ? 'overlay-open' : ''}`} onClick={closeOffcanvas}></div>

      {/* Sidebar Info Group (Right Side Panel) */}
      <div className={`xs-sidebar-group info-group ${isInfoGroupActive ? 'isActive' : ''}`}>
        <div className="xs-overlay xs-bg-black" onClick={() => setIsInfoGroupActive(false)}></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <img src={logowhite} alt='maxedlogic-white-logo' className='header-logo' />
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
                      +91 9310008143
                    </li>
                    <li>
                      <FaEnvelope className="icon" />
                      hr@maxedlogic.com
                    </li>
                    <li>
                      <FaMapMarkerAlt className="icon" />
                     436 I Thum Heights , Sector 62 Noida ,India
                    </li>
                  </ul>
                  <ul className="social-box">
                    <li><a href="https://www.facebook.com/profile.php?id=61584969285044"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/maxedlogic__official/?hl=en"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/maxed-logic-682b3b3b6/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
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