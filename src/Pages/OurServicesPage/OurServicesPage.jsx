import React from 'react';
import './OurServicesPage.css';
import { servicesList } from '../../assets/assets';

const OurServicesPage = () => {
  return (
    <section className='our-services-page'>
      <div className='background-image'>
        {' '}
        <h1>Our Services</h1>
      </div>
      <div className='container'>
        {servicesList.map((item, index) => (
          <div className='services-wrapper' key={index}>
            <h3>{item.title}</h3>
            <div className='services-content'>
              <div className='services-image'>
                <img src={item.img} alt='' />
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesPage;
