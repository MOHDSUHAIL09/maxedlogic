import React, { useEffect, useRef } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

// Breadcrumb background
import breadcrumbImg from '../assets/img/blog/Blogs-img.jpg';

// Blog post images (adjust extensions as needed – .jpg, .png, etc.)
import blog01 from '../assets/img/blog/blog-01.jpg';
import blog02 from '../assets/img/blog/blog-02.jpg';
import blog03 from '../assets/img/blog/blog-03.jpg';
import blog04 from '../assets/img/blog/blog-04.jpg';
import blog05 from '../assets/img/blog/blog-05.jpg';
import blog06 from '../assets/img/blog/blog-06.jpg';
import blog07 from '../assets/img/blog/blog-07.png';
import blog08 from '../assets/img/blog/blog-08.jpg';
import blog09 from '../assets/img/blog/blog-09.jpg';

const Blogs = () => {
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

  // 9 blog posts with local images
  const blogPosts = [
    {
      id: 1,
      date: 'March 10, 2025',
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Node.js has become the go‑to runtime for building fast, scalable back‑end services. In this article, we explore how to structure Express.js applications, handle asynchronous operations efficiently, integrate with databases like MongoDB, and deploy to cloud platforms such as AWS or Heroku. Perfect for developers moving from frontend to full‑stack.',
      image: blog01,
      alt: 'Node.js development'
    },
    {
      id: 2,
      date: 'March 8, 2025',
      title: 'Flutter 3.0: Cross‑Platform Magic for Mobile & Web',
      excerpt: 'Flutter continues to dominate cross‑platform development. Learn how to build beautiful, high‑performance apps for iOS, Android, and even the web from a single codebase. This guide covers state management, custom animations, platform channels, and real‑world project tips to speed up your development cycle.',
      image: blog02,
      alt: 'Flutter mobile development'
    },
    {
      id: 3,
      date: 'March 5, 2025',
      title: 'Modern .NET 8: Performance Boosts and Minimal APIs',
      excerpt: 'Microsoft’s .NET 8 brings significant performance improvements and simplified API development. We’ll walk through creating minimal APIs, leveraging native AOT compilation, and integrating with Entity Framework Core. Whether you maintain legacy apps or start new ones, these features will boost your productivity.',
      image: blog03,
      alt: '.NET 8 development'
    },
    {
      id: 4,
      date: 'March 1, 2025',
      title: 'ChatGPT and Generative AI: Revolutionising Software Development',
      excerpt: 'Generative AI, especially ChatGPT, is changing how we write code, debug, and document. This post explores practical use cases – from generating boilerplate code to explaining complex algorithms, writing unit tests, and even creating technical blog posts. Learn how to integrate OpenAI APIs into your own projects.',
      image: blog04,
      alt: 'ChatGPT AI development'
    },
    {
      id: 5,
      date: 'February 25, 2025',
      title: 'iOS + Blockchain: Building Secure dApps on Apple Ecosystem',
      excerpt: 'Combine the power of iOS (SwiftUI) with blockchain technology. We’ll show you how to integrate Web3 libraries, connect to Ethereum/Solana networks, manage wallets, and execute smart contracts directly from your iPhone or iPad app. A must‑read for mobile developers entering Web3.',
      image: blog05,
      alt: 'iOS Blockchain integration'
    },
    {
      id: 6,
      date: 'February 20, 2025',
      title: 'PHP 8.3: Modern Features That Keep It Relevant',
      excerpt: 'PHP is far from dead. With typed properties, match expressions, and JIT compilation, PHP 8.x offers performance close to compiled languages. This article covers new features, frameworks like Laravel and Symfony, and how to optimise your legacy codebase for modern PHP standards.',
      image: blog06,
      alt: 'PHP 8 development'
    },
    {
      id: 7,
      date: 'February 15, 2025',
      title: 'Google Cloud Run vs Firebase: Which One for Your Startup?',
      excerpt: 'Google’s serverless offerings – Cloud Run and Firebase – can drastically reduce infrastructure costs. We compare use cases, pricing, scalability, and developer experience. Learn when to use Cloud Run for containerised microservices and Firebase for real‑time databases and authentication.',
      image: blog07,
      alt: 'Google Cloud services'
    },
    {
      id: 8,
      date: 'February 10, 2025',
      title: 'Social Media Algorithms: How to Grow Your Audience in 2025',
      excerpt: 'Understanding Instagram, LinkedIn, and TikTok algorithms is key to organic growth. This post breaks down ranking signals, content strategies, and engagement tactics. Plus, we share tools to schedule posts, analyse analytics, and automate social media management for your brand.',
      image: blog08,
      alt: 'Social media marketing'
    },
    {
      id: 9,
      date: 'February 5, 2025',
      title: 'React 19 and Server Components: The Future of Frontend',
      excerpt: 'React 19 introduces stable Server Components, improving initial load times and SEO. We explain the difference between client and server components, how to use React Server Actions, and migrate existing projects. Ideal for developers building modern Next.js or Remix applications.',
      image: blog09,
      alt: 'React 19 development'
    }
  ];

  return (
    <>
      <Seo
        title="Blogs – Maxedlogic Technologies | IT Insights & News"
        description="Read latest blogs from Maxedlogic Technologies on web development, app development, blockchain, SEO strategies, and tech startup guides. Stay updated with industry trends."
        path="/blogs"
      />

      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{
          backgroundImage: `url(${breadcrumbImg})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center 0px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        ref={breadcrumbRef}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">Blogs</h1>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li><Link to="/">Home</Link></li>
                <li><FaAngleDoubleRight /></li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="latest-news section-padding">
        <div className="container">
          <div className="section-header text-center">
         
            <h2>Our Latest News</h2>
               <div className="sub-title"><span> Discover the Latest from Our Blog</span></div>
          </div>
          <div className="news-grid">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS (same as before) */}
      <style>{`
        .latest-news {
          padding: 80px 0;
          background: #f8faff;
        }
        .section-header {
          margin-bottom: 48px;
        }
        .section-header .sub-title span {
          font-size: 14px;
          color: #1e69ba;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 12px;
        }
        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          margin: 0;
          color: #1e2a3a;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .news-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .news-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .news-date {
          font-size: 14px;
          color: #1397de;
          margin: 20px 24px 12px 24px;
          font-weight: 500;
        }
        .news-title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 24px 16px 24px;
          color: #1e2a3a;
        }
          .news-title:hover{
          color: #1397de;
          cursor: pointer
          }
        .news-excerpt {
          font-size: 15px;
          line-height: 1.6;
          color: #4a5568;
          margin: 0 24px 28px 24px;
          flex: 1;
        }
        @media (max-width: 992px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
          .section-header h2 {
            font-size: 28px;
          }
          .news-title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Blogs;