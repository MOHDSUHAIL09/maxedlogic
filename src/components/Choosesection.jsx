import React from 'react';
import { FaGlobe, FaMobileAlt, FaTags, FaPaintBrush, FaCreditCard } from 'react-icons/fa';
import worldImg from '../assets/img/world.png';
import whyChoose04 from '../assets/img/about/06.png';

const Choosesection2 = () => {
  const cardsData = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile App",
      description: "We securely back up and manage mobile app data for safe storage, easy maintenance, and reliable performance."
    },
    {
      icon: <FaTags />,
      title: "Branding Strategy",
      description: "We build strong branding strategies that boost identity, recognition, and market presence."
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description: "We design creative graphics that strengthen brand identity and clearly communicate your message."
    },
    {
      icon: <FaCreditCard />,
      title: "Payment Gateways",
      description: "We integrate secure and reliable payment gateways to enable fast, seamless, and safe cryptocurrency transactions, ensuring a smooth and trustworthy payment experience for users"
    }
  ];

  return (
    <section className="choose-us-wrapper choose-us-3 section-padding section-bg ">
      <div className="container ">
        <div className="row g-5">
          <div className="col-xl-6 col-lg-12 col-md-12 mt-xl-4 wow fadeInLeft" data-wow-delay="300ms">
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="paragraph-shadow sub-title"><span>WHY CHOOSE US</span></div>
                <h2 className="split-text right">We Help You To Increase Your Sale Through Solutions.</h2>
              </div>
              <p clas className="paragraph-shadow mt-4">
               We focus on building strong, long-term relationships with our clients by truly understanding their business goals, challenges, and evolving needs. Our approach is centered on collaboration, transparency, and trust, ensuring that every solution we deliver aligns perfectly with our clients’ vision. By leveraging modern technologies, industry best practices, and a forward-thinking mindset, we create customized IT solutions that are not only efficient and scalable but also future-ready. Our commitment goes beyond delivery—we continuously support and adapt our solutions to help our clients grow, innovate, and achieve sustained success in a rapidly changing digital landscape.
              </p>


              <div className="reviews mt-4 d-flex justify-contant-spaceBetween gap-5">
                <div className="infu">
                  <img src={whyChoose04} alt="software-world-images" style={{ width: "250px", marginLeft: "-65px" }} />
                  <h4 >Join our 20+ <br />World Class Clients</h4>
                </div>
                <div className="infu mt-3">
                  <h4>Global Company</h4>
                  <p className='paragraph-shadow' style={{maxWidth: "300px"}}>Powered by 4️⃣+ expert software professionals, delivering reliable and innovative IT solutions worldwide.</p>
                </div>
              </div>






            </div>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight" data-wow-delay="300ms">
            <div className="choose-us-images">
              <img className="shape-1" src={worldImg} alt="" />
              <div className="row g-2">
                {cardsData.map((card, idx) => (
                  <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4" key={idx}>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="color-overlay"></div>
                          <div className="content">
                            <div className="icon">{card.icon}</div>
                            <h4>{card.title}</h4>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="icon">{card.icon}</div>
                          <h4>{card.title}</h4>
                          <p className='paragraph-shadow'>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Base card styles - no movement on hover */
          .flip-card {
            background-color: transparent;
            width: 100%;
            height: 250px;
            perspective: 1000px;
            cursor: pointer;
            transition: none; /* No layout shift */
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            /* SLOWER FLIP: increased duration from 0.6s to 1s for a more relaxed transition */
            transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
            border-radius: 16px;
            will-change: transform;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 16px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            top: 0;
            left: 0;
          }

          /* Front card base styles */
          .flip-card-front {
            background-color: #ffffff;
            color: #333;
            border: 1px solid #e0e0e0;
            position: relative;
            overflow: hidden;
          }

          /* Top-to-bottom blue overlay animation */
          .color-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, #2288f6, #0056b3);
            transform: translateY(-100%);
            transition: transform 0.4s ease-out;
            z-index: 1;
            pointer-events: none;
          }

          /* On hover: overlay slides down, turning the card blue */
          .flip-card:hover .color-overlay {
            transform: translateY(0);
          }

          /* Content sits above overlay */
          .flip-card-front .content {
            position: relative;
            z-index: 2;
            transition: color 0.2s ease;
          }

          /* CRITICAL: As soon as hover starts (blue overlay appears), text and icon turn white */
          .flip-card:hover .flip-card-front .content h4,
          .flip-card:hover .flip-card-front .content .icon {
            color: white;
          }

          /* Back card always has white text on blue gradient */
          .flip-card-back {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            transform: rotateY(180deg);
          }

          /* Force the icon on the back side to be white */
          .flip-card-back .icon {
            color: white;
          }

          /* Ensure any SVG inside back icon also uses white color */
          .flip-card-back .icon svg {
            fill: currentColor;
          }

          /* Icon styling both sides */
          .flip-card-front .icon, 
          .flip-card-back .icon {
            font-size: 48px;
            margin-bottom: 16px;
          }

          /* Ensure back text stays white and readable */
          .flip-card-back h4,
          .flip-card-back p {
            color: white;
          }

          .flip-card-back p {
            font-size: 14px;
            margin-top: 12px;
            line-height: 1.4;
          }

          /* Responsive adjustment */
          @media (max-width: 768px) {
            .flip-card {
              height: 220px;
            } 
            .flip-card-front .icon, 
            .flip-card-back .icon {
              font-size: 36px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Choosesection2;