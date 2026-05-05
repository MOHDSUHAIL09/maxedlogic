import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import worldImg from '../assets/img/world.png';
import heroBg from '../assets/img/hero/hero-1-1-bg.png';
import heroMainImg from '../assets/img/hero/hero-1.png';
import heroMainImg2 from '../assets/img/hero/hero-2.png';
import heroMainImg3 from '../assets/img/hero/hero-3.png';

// 3 content variants (ab image bhi included)
const contentVariants = [
  {
    heading: "Empowering Ideas with Technological Excellence",
    paragraph: "We are a team of highly skilled and passionate professionals dedicated to delivering innovative, reliable, and results-driven solutions tailored to your technology needs. With a strong focus on quality, creativity, and efficiency, we work closely with our clients to understand their goals and challenges, ensuring every solution is both practical and impactful. Our expertise spans across modern technologies, enabling us to build scalable, secure, and future-ready systems. By combining technical excellence with a client-first approach, we strive to create meaningful digital experiences that drive growth, improve performance, and add long-term value to your business.",
    buttonText: "Explore More",
    image: heroMainImg   
  },
  {
    heading: "Innovative IT Solutions for Modern Business",
    paragraph: "Transform your digital presence with cutting-edge AI, cloud computing, and scalable software solutions designed to elevate your business to the next level. We combine innovation with strategy to build powerful, future-ready systems that enhance performance, improve user experience, and streamline operations. Our solutions are tailored to adapt as your business grows, ensuring flexibility, security, and efficiency at every stage. From intelligent automation to robust cloud infrastructure, we empower you to stay ahead of the competition and achieve measurable, long-term growth in a rapidly evolving digital world.",
    buttonText: "Get Started",
    image: heroMainImg2  
  },
  {
    heading: "Next‑Gen Development & Strategic Consulting",
    paragraph: "Future-ready products, expert technology consulting, and rapid, efficient execution — we bring your ideas to life with precision and purpose. Our team works closely with you to understand your vision, challenges, and goals, transforming them into scalable, high-performance digital solutions. By leveraging the latest technologies and industry best practices, we ensure every product we build is secure, adaptable, and designed for long-term success. From strategy and planning to development and deployment, we deliver end-to-end solutions that not only meet your expectations but help your business grow, innovate, and stay ahead in an ever-evolving digital landscape.",
    buttonText: "Get Started",
    image: heroMainImg3  
  }
];

// 3 animations
const animations = [
  'animate-slide-up',
  'animate-fade-scale',
  'animate-glow-reveal'
];

const Hero = () => {
  const heroRef = useRef(null);
  const [content, setContent] = useState(contentVariants[0]);
  const [animClass, setAnimClass] = useState('');

  useEffect(() => {
    // Detect refresh (hard reload)
    let isRefresh = false;
    if (performance?.getEntriesByType) {
      const nav = performance.getEntriesByType('navigation')[0];
      if (nav?.type === 'reload') isRefresh = true;
    } else if (performance?.navigation?.type === 1) {
      isRefresh = true;
    }

    if (isRefresh) {
      // Get last content index from sessionStorage (default -1 if first time)
      let lastIndex = parseInt(sessionStorage.getItem('heroLastIndex') || '-1');
      // Calculate next index (cyclic: 0 -> 1 -> 2 -> 0)
      let nextIndex = (lastIndex + 1) % contentVariants.length;
      // Save for next refresh
      sessionStorage.setItem('heroLastIndex', nextIndex);
      // Set the new content (includes image)
      setContent(contentVariants[nextIndex]);

      // Random animation
      const randomAnim = animations[Math.floor(Math.random() * animations.length)];
      setAnimClass(randomAnim);
    } else {
      // No refresh – no animation, but keep content from sessionStorage
      const storedIndex = sessionStorage.getItem('heroLastIndex');
      if (storedIndex !== null && contentVariants[parseInt(storedIndex)]) {
        setContent(contentVariants[parseInt(storedIndex)]);
      }
      setAnimClass('');
    }
  }, []);

  // Apply animation class
  useEffect(() => {
    if (heroRef.current && animClass) {
      heroRef.current.classList.remove(...animations);
      void heroRef.current.offsetWidth; // force reflow
      heroRef.current.classList.add(animClass);
    }
  }, [animClass]);

  return (
    <section className="hero-wrapper hero-1 mx-xl-5">
      <div className="shape">
        <img className="shape-1" src={worldImg} alt="world" />
      </div>
      <div className="hero-bg bg-cover" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="container">
        <div className="row align-items-center">    
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="hero-content pe-xl-3 text-lg-start text-center" ref={heroRef}>
              <h1>{content.heading}</h1>
              <div className="mt-3">
                <p className='paragraph-shadow'>{content.paragraph}</p>
              </div>
              <div className="hero-button mt-4">
                <Link to="/contact" className="theme-btn">{content.buttonText}</Link>
              </div>          
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="hero-image">
            
              <img  src={content.image} alt="Hero" className="img-fluid mt-2 mt-md-0 mt-lg-0 mt-xl-0"  />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;