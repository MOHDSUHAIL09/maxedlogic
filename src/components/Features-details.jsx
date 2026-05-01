import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
     <section className="features-wrapper features-1">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="200ms">
              <Link to = "service">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4>Custom Software Development</h4>
                <p className='paragraph-shadow'>We build custom software to improve your business efficiency.</p>
                <ul>
                  <li className='paragraph-shadow' ><i className="fas fa-check-circle"></i> Fast Solutions</li>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> Business Growth</li>
                </ul>
              </div>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="400ms">
              <Link to = "service">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4>Web and Mobile Development</h4>
                <p className='paragraph-shadow'>We build responsive web and mobile apps for a smooth user experience.</p>
                <ul>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> Smooth UI</li>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> High Performance</li>
                </ul>
              </div>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="600ms">
              <Link to = "service">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Business and IT Consultancy</h4>
                <p className='paragraph-shadow'>We provide business and IT consultancy to help you improve operations.</p>
                <ul>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> Smart Strategy</li>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> Better Decisions</li>
                </ul>
              </div>
              </Link>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="800ms">
              <Link to = "service">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h4>Advance Tool and Design</h4>
                <p className='paragraph-shadow'>We use advanced tools and modern design techniques to deliver efficient.</p>
                <ul>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> Modern Tools</li>
                  <li className='paragraph-shadow'><i className="fas fa-check-circle"></i> Creative Design</li>
                </ul>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;