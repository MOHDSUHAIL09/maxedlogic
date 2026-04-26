import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

// Import all images
import shape15 from '../assets/img/shape/shape-15.png';
import teamShape1 from '../assets/img/team/shape-1.png';
import teamShape2 from '../assets/img/team/shape-2.png';
import teamImg01 from '../assets/img/team/01.jpg';
import teamImg02 from '../assets/img/team/02.jpg';
import teamImg03 from '../assets/img/team/03.jpg';
import teamImg04 from '../assets/img/team/04.jpg';

const Teamsection = () => {
  return (
    <section className="team-wrapper team-1 section-padding">
      <div className="shape-1">
        <img src={shape15} alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TEAM MEMBER</span>
          </div>
          <h2 className="split-text left">Meet with Our Expert</h2>
        </div>
        <p className="text-center">
          Accelerate innovation with world-class tech teams We’ll match you <br /> to an entire remote team of incredible freelance.
        </p>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="single-team-item">
              <div className="shape">
                <img className="shape-2" src={teamShape1} alt="" />
                <img className="shape-3" src={teamShape2} alt="" />
              </div>
              <div className="team-image">
                <div className="image">
                  <img src={teamImg01} alt="team-img" />
                </div>
                <div className="social-icon">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaPinterestP /></a>
                </div>
              </div>
              <div className="content text-center pt-3">
                <p>Warehouse Manager</p>
                <h3>
                  Christopher Donovan
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="single-team-item">
              <div className="shape">
                <img className="shape-2" src={teamShape1} alt="" />
                <img className="shape-3" src={teamShape2} alt="" />
              </div>
              <div className="team-image">
                <div className="image">
                  <img src={teamImg02} alt="team-img" />
                </div>
                <div className="social-icon">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaPinterestP /></a>
                </div>
              </div>
              <div className="content text-center pt-3">
                <p>Operations Manager</p>
                <h3>
                  Michael Carter
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="single-team-item">
              <div className="shape">
                <img className="shape-2" src={teamShape1} alt="" />
                <img className="shape-3" src={teamShape2} alt="" />
              </div>
              <div className="team-image">
                <div className="image">
                  <img src={teamImg03} alt="team-img" />
                </div>
                <div className="social-icon">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaPinterestP /></a>
                </div>
              </div>
              <div className="content text-center pt-3">
                <p>Fleet Supervisor</p>
                <h3>
                  James Anderson
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
            <div className="single-team-item">
              <div className="shape">
                <img className="shape-2" src={teamShape1} alt="" />
                <img className="shape-3" src={teamShape2} alt="" />
              </div>
              <div className="team-image">
                <div className="image">
                  <img src={teamImg04} alt="team-img" />
                </div>
                <div className="social-icon">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaPinterestP /></a>
                </div>
              </div>
              <div className="content text-center pt-3">
                <p>Project Manager</p>
                <h3>
                  Daniel Thompson
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teamsection;