import React from 'react';
// Import all images
import worldImg from '../assets/img/world.png';
import heroBg from '../assets/img/hero/hero-1-1-bg.png';
import googleImg from '../assets/img/google.png';
import ratingImg from '../assets/img/rating.png';
import heroMainImg from '../assets/img/hero/hero-1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (

        <>
            <section className="hero-wrapper hero-1 mx-xl-5">
                <div className="shape">
                    <img className="shape-1" src={worldImg} alt="Decorative world map icon" />
                </div>
                <div
                    className="hero-bg bg-cover"
                    style={{ backgroundImage: `url(${heroBg})` }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div className="hero-content pe-xl-3 text-lg-start text-center tp-play-up">
                                <h1>Empowering Ideas with Technological Excellence</h1>
                                <p>We are a team of skilled professionals dedicated to providing innovative and effective solutions to your technology needs. We offer a wide range of services and expertise in various fields of information technology.</p>
                                <div className="hero-button mt-4">
                                    <Link to="/contact" className="theme-btn">Explore More</Link>
                                </div>
                                <div className="feedback d-flex mt-xl-5">
                                    <div className="infu">
                                        <img src={googleImg} alt="Google rating 4.8 stars from 799 reviews" />
                                        <p><span>4.8</span>From 799+ reviews</p>
                                    </div>
                                    <div className="infu">
                                        <img src={ratingImg} alt="Clutch rating 4.9 stars from 200 reviews" />
                                        <p><span>4.9</span>From 200+ reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="hero-image">
                                <img src={heroMainImg} alt="Maxedlogic team working on innovative technology solutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;