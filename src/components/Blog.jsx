import React from 'react';
import { FaCircle, FaLongArrowAltRight } from 'react-icons/fa';

import shape5Black from '../assets/img/shape/shape-5-black.png';
import blog01 from '../assets/img/blog/blog-01.jpg';
import blog02 from '../assets/img/blog/blog-02.jpg';
import blog03 from '../assets/img/blog/blog-03.jpg';
import { Link } from 'react-router-dom';


 const blogPosts = [
    {
      id: 1,
      date: 'March 10, 2025',
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Node.js has become the go‑to runtime for building fast, scalable back‑end services. In this article, we explore how to structure Express.js applications, handle asynchronous operations efficiently, integrate with databases like MongoDB, and deploy to cloud platforms such as AWS or Heroku. Perfect for developers moving from frontend to full‑stack.',
      image: blog01,
      alt: 'Node.js development',
      button01: "Read More",
    },
    {
      id: 2,
      date: 'March 8, 2025',
      title: 'Flutter 3.0: Cross‑Platform Magic for Mobile & Web',
      excerpt: 'Flutter continues to dominate cross‑platform development. Learn how to build beautiful, high‑performance apps for iOS, Android, and even the web from a single codebase. This guide covers state management, custom animations, platform channels, and real‑world project tips to speed up your development cycle.',
      image: blog02,
      alt: 'Flutter mobile development',
      button01: "Read More",
    },
    {
      id: 3,
      date: 'March 5, 2025',
      title: 'Modern .NET 8: Performance Boosts and Minimal APIs',
      excerpt: 'Microsoft’s .NET 8 brings significant performance improvements and simplified API development. We’ll walk through creating minimal APIs, leveraging native AOT compilation, and integrating with Entity Framework Core. Whether you maintain legacy apps or start new ones, these features will boost your productivity.',
      image: blog03,
      alt: '.NET 8 development',
      button01: "Read More",
    },
  ];

const Blog = () => {
  return (
    <section className="blog-wrapper blog-1 section-padding">
      <div className="shape">
        <img className="shape-1" src={shape5Black} alt="" />
      
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR BLOG</span>
          </div>
          <h2>Our Latest Insights & Blog</h2>
        </div>
        <p className="paragraph-shadow text-center mt-3">
          Accelerate innovation with world-class tech teams We’ll match <br />
          you to an entire remote team of incredible
        </p>
           <div className="news-grid mt-5 mb-5">
            {blogPosts.map((post) => (
              <div className="news-card" key={post.id}>
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="news-image"
                  loading="lazy"
                />
                <div className="news-date">{post.date}</div>
                <h3 className="news-title">{post.title}</h3>
                <p className="news-excerpt">{post.excerpt}</p>
                <Link to="blogs" className='Read-more-button'>{post.button01}</Link>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Blog;