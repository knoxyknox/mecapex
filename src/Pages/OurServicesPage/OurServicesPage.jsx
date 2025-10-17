import React, { useEffect } from 'react';
import './OurServicesPage.css';
import { servicesList } from '../../assets/assets';
import { useLocation } from 'react-router-dom';

const OurServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;

        const nav = document.querySelector('nav');
        const headerHeight = nav ? nav.offsetHeight : 0;
        const target = el.querySelector('h3') || el;
        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          12; 
        window.scrollTo({ top, behavior: 'smooth' });

        try {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        } catch (e) {}
      }, 50);
    }
  }, [location.hash]);

  return (
    <section className='our-services-page'>
      <div className='background-image'>
        {' '}
        <h1>Our Services</h1>
      </div>
      <div className='container'>
        {servicesList.map((item, index) => {
          const slug = item.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          return (
            <div className='services-wrapper' key={index} id={slug}>
              <h3>{item.title}</h3>
              <div className='services-content'>
                <div className='services-image'>
                  <img src={item.img} alt='' />
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServicesPage;
