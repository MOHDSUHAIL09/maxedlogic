  import React from 'react';
  import { FaAngleDoubleRight } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  import Seo from '../components/Seo';

  // Breadcrumb background image
  // import breadcrumbImg from '../assets/img/product-image.jpg';

  // Product images – make sure these files exist in your project
  import prodImg1 from '../assets/img/product/01.jpg';
  import prodImg2 from '../assets/img/product/02.jpg';
  import prodImg3 from '../assets/img/product/03.jpg';
  import prodImg4 from '../assets/img/product/04.jpg';
  import prodImg5 from '../assets/img/product/05.jpg';
  import prodImg6 from '../assets/img/product/06.jpg';

  const Products = () => {
    // const breadcrumbRef = useRef(null);

    // Parallax effect
    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (breadcrumbRef.current) {
    //       const scrollY = window.scrollY;
    //       const parallaxY = scrollY * 0.5;
    //       breadcrumbRef.current.style.backgroundPosition = `center ${parallaxY}px`;
    //     }
    //   };
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // 6 products with unique ids and improved SEO descriptions
    const products = [
      {
        id: 1,
        title: 'Ecommerce Solution',
        excerpt: 'A fully customizable, scalable e‑commerce platform with integrated payment gateways, inventory management, order tracking, and customer analytics. Built for high performance and seamless user experience across devices.',
        image: prodImg1,
        alt: 'Ecommerce solution dashboard'
      },
      {
        id: 2,
        title: 'Social Media App',
        excerpt: 'Engage your audience with a feature‑rich social media application. Includes news feed, friend requests, real‑time messaging, stories, push notifications, and admin panel for content moderation.',
        image: prodImg2,
        alt: 'Social media mobile app'
      },
      {
        id: 3,
        title: 'Chatting App',
        excerpt: 'A real‑time chat application with one‑on‑one and group messaging, file sharing, voice notes, end‑to‑end encryption, and online/offline status. Perfect for both personal and business communication.',
        image: prodImg3,
        alt: 'Chatting app interface'
      },
      {
        id: 4,
        title: 'Banking App',
        excerpt: 'Secure, compliant, and user‑friendly mobile banking solution. Supports fund transfers, bill payments, transaction history, biometric login, and real‑time alerts. Built with multi‑layer encryption to protect sensitive financial data.',
        image: prodImg4,
        alt: 'Banking mobile app dashboard'
      },
      {
        id: 5,
        title: 'Food Delivery App',
        excerpt: 'End‑to‑end food delivery platform with restaurant discovery, cart management, live order tracking, integrated payment gateways, and rating/review system. Includes separate panels for customers, delivery partners, and administrators.',
        image: prodImg5,
        alt: 'Food delivery app UI'
      },
      {
        id: 6,
        title: 'Music App',
        excerpt: 'Stream high‑quality audio with personalized playlists, offline downloads, social sharing, and AI‑based recommendations. Features include equalizer, lyrics display, and integration with major music libraries.',
        image: prodImg6,
        alt: 'Music streaming app interface'
      }
    ];

    return (
      <>
        {/* Page SEO */}
        <Seo
          title="Products – Maxedlogic Technologies | Custom Software & Apps"
          description="Explore our products: Ecommerce Solution, Social Media App, Chatting App, Banking App, Food Delivery App, and Music App. Scalable, secure, and user‑centric solutions for modern businesses."
          path="/products"
        />

        {/* Breadcrumb with Parallax */}
        {/* <div
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
                <h1 className="wow fadeInUp" data-wow-delay=".3s">Products</h1>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li><Link to="/">Home</Link></li>
                  <li><FaAngleDoubleRight /></li>
                  <li>Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        {/* Products Grid Section */}
        <section className="latest-news section-padding">
          <div className="container">
            <div className="section-header text-center">
              <div className="sub-title"><span>Our Products</span></div>
              <h2>Innovative Solutions for Modern Businesses</h2>
            </div>
            <div className="news-grid">
              {products.map((product) => (
                <div className="news-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="news-image"
                    loading="lazy"
                  />
                  <h3 className="news-title">{product.title}</h3>
                  <p className="news-excerpt">{product.excerpt}</p>
                  {/* No "Read More" button (as requested) */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSS – identical to blog cards (no Read More) */}
        <style>{`
  
          .section-header {
            margin-bottom: 48px;
          }
          .section-header .sub-title span {
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #007bff;
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
          .news-title {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.3;
            margin: 20px 24px 12px 24px;
            color: #1e2a3a;
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

  export default Products;