
import React, { memo, useEffect } from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, A11y } from 'swiper/modules';
import { heroImg } from '../../assets/assets';
import { useLocation, Link } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);



  return (
    <section className="hero" role="banner">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={heroImg && heroImg.length > 1}
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        className="hero-carousel"
      >
        {heroImg && heroImg.length > 0 ? (
          heroImg.map((list) => (
            <SwiperSlide key={list.id}>
              <img
                src={list.img}
                alt={list.alt}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'; 
                  e.target.parentElement.style.backgroundColor = '#ccc'; 
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <h1>no images available</h1>
          </SwiperSlide>
        )}
      </Swiper>
      <div className="container">
        <div className="hero-container">
          <h1>
            Your Trusted Partner for Procurement, Logistics, Petroleum, Oil & Gas
            Services and More
          </h1>
          <p>Delivering excellence from 2024 and beyond</p>
          <Link to="/Contact-Us">
            <button aria-label="Contact us for services">Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);