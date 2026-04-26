import React from 'react';

const Features = () => {
  return (
    <>
      <section className="features-wrapper features-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="200ms">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4><a href="services-details.html">Custom Software Development</a></h4>
                <p>We build custom software to improve your business efficiency.</p>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Fast Solutions</li>
                  <li><i className="fas fa-check-circle"></i> Business Growth</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="400ms">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4><a href="services-details.html">Web and Mobile Development</a></h4>
                <p>We build responsive web and mobile apps for a smooth user experience.</p>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Smooth UI</li>
                  <li><i className="fas fa-check-circle"></i> High Performance</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="600ms">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4><a href="services-details.html">Business and IT Consultancy</a></h4>
                <p>We provide business and IT consultancy to help you improve operations.</p>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Smart Strategy</li>
                  <li><i className="fas fa-check-circle"></i> Better Decisions</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="800ms">
              <div className="single-feature-item">
                <div className="icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h4><a href="services-details.html">Advance Tool and Design</a></h4>
                <p>We use advanced tools and modern design techniques to deliver efficient.</p>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Modern Tools</li>
                  <li><i className="fas fa-check-circle"></i> Creative Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;