import React from 'react';
import './Footer.css';
import { images } from '../../assets/assets';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='wrapper'>
        {' '}
        <div className='container'>
          <div className='footer-logo'>
            <div>
              <div className='logo'>
                {' '}
                <div className='logo-img'>
                  <img src={images.logo_m} alt='logo' />
                </div>
                <div className='logo-content'>
                  <h1>Mecapex Service </h1>
                  <p>Limited</p>
                </div>
              </div>
              <div className='social-icons'>
                <i className='bx bxl-facebook'></i>
                <i className='bx bx-x'></i>
                <i className='bx bxl-linkedin'></i>
              </div>
            </div>

            <div className='contact'>
              <h4>contact</h4>
              <p className='address'>
                <i className='bx bx-phone'></i>{' '}
                <span>08030604117, +234 09114626119</span>{' '}
              </p>
              <p className='address'>
                <i className='bx bx-envelope'></i>
                <span>mecapexserviceltd@gmail.com Benidoko205@gmail.com</span>
              </p>
              <p className='address'>
                <i className='bx bx-location-plus'></i>
                <span>No11 Rumualugu, along NTA/Choba Rd. Port Harcourt.</span>
              </p>
            </div>
            <div className='key-differentiator'>
              <h4>Key Differentiators</h4>
              <div>
                <h5>Comprehensive Solutions</h5>
                <p>
                  We provide end-to-end services across multiple industries.
                </p>
                <h5>Expert Team</h5>
                <p>
                  Our experienced professionals offer expertise in procurement,
                  logistics, petroleum, and contracting.
                </p>
                <h5>Reliability</h5>
                <p>
                  We ensure timely delivery and consistent service quality
                  across all projects.
                </p>
                <h5>Safety Compliance</h5>
                <p>
                  We adhere to strict safety and environmental regulations to
                  protect our staff, clients, and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>© 2025 Mecapex Service Limited. All rights reserved.</p>
        </div>
    </section>
  );
};

export default Footer;
