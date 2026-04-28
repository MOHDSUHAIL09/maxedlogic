import React, { useEffect, useRef } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaArrowRight, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';   // ✅ SEO component import

// Import images
import breadcrumbImg from '../assets/img/Blogs-img.Jpg';

const Blogs = () => {
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

  return (
    <>
      {/* ✅ Page SEO */}
      <Seo
        title="Contact Us – IT Company in Noida Sector 62"
        description="Get in touch with Maxedlogic Technologies in Noida Sector 62, Delhi NCR. Call +91-9310008183 or email hr@maxedlogic.com for web, app, blockchain solutions."
        path="/contact"
      />
      <div className="breadcrumb-wrapper bg-cover"
        style={{
          backgroundImage: `url(${breadcrumbImg})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center 0px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        ref={breadcrumbRef}
      >
        
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Blogs
              </h1>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link to="/">Home</Link>
                </li>
                 <li><FaAngleDoubleRight/></li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </div>
    




    </>
  );
};

export default Blogs;