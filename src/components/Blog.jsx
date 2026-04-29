import React from 'react';
import { FaCircle, FaLongArrowAltRight } from 'react-icons/fa';

// Import images (adjust paths as needed)
import shape5Black from '../assets/img/shape/shape-5-black.png';
import shape1 from '../assets/img/shape/shape-1.png';
import blog01 from '../assets/img/blog/01.jpg';
import blog02 from '../assets/img/blog/02.jpg';
import blog03 from '../assets/img/blog/03.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className="blog-wrapper blog-1 section-padding section-bg">
      <div className="shape">
        <img className="shape-1" src={shape5Black} alt="" />
        <img className="shape-2" src={shape1} alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR BLOG</span>
          </div>
          <h2>Our Latest Insights & Blog</h2>
        </div>
        <p className="text-center mt-3">
          Accelerate innovation with world-class tech teams We’ll match <br />
          you to an entire remote team of incredible
        </p>
        <div className="blog-inner">
          <div className="row">
            {/* Blog Post 1 */}
            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="200ms">
              <div className="single-blog-item">
                <div className="image">
                  <img src={blog01} alt="" />
                  <img src={blog01} alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Technology</li>
                    <li><FaCircle /></li>
                    <li>12 January, 2025</li>
                  </ul>
                  <h3>
                    <a href="blogs-details.html">Exploring the Exciting Features of Node.js Latest</a>
                  </h3>
                  <p>
                    Node.js, the popular runtime environment for executing JavaScript code server-side, continues to evolve with each new version,
                  </p>
                    <Link to= "blogs">
                  <a className="link-btn">
                    Read More 
                  </a></Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="400ms">
              <div className="single-blog-item">
                <div className="image">
                  <img src={blog02} alt="" />
                  <img src={blog02} alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Technology</li>
                    <li><FaCircle /></li>
                    <li>12 January, 2025</li>
                  </ul>
                  <h3>
                    <a href="blogs-details.html">Flutter: Empowering Mobile App Development with Speed</a>
                  </h3>
                  <p>
                    In the fast-paced world of mobile app development, developers are constantly seeking tools and frameworks that enable
                  </p>
                  <Link to= "blogs">
                  <a className="link-btn">
                    Read More 
                  </a></Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="600ms">
              <div className="single-blog-item">
                <div className="image">
                  <img src={blog03} alt="" />
                  <img src={blog03} alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Technology</li>
                    <li><FaCircle /></li>
                    <li>12 January, 2025</li>
                  </ul>
                  <h3>
                    <a href="blogs-details.html">.NET MAUI: Build Cross-Platform Apps with C#</a>
                  </h3>
                  <p>
                    seamless integration with scalable backend services built on ASP.NET Core, enabling real‑time sync, security, and cloud readiness.
                  </p>
                   <Link to= "blogs">
                  <a className="link-btn">
                    Read More 
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;