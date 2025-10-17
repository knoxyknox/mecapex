import React from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, FreeMode, A11y } from 'swiper/modules';
import { heroImg } from '../../assets/assets';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Hero = () => {
  const locatiion = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [locatiion.pathname]);
  return (
    <section className='hero' role='banner'>
      <Swiper
        modules={[Autoplay, FreeMode, A11y]}
        spaceBetween={0}
        freeMode={true}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className='hero-carousel'
      >
        {heroImg && heroImg.length > 0 ? (
          heroImg.map((list, index) => (
            <SwiperSlide key={index}>
              <img
                src={list.img}
                alt={list.alt}
                onError={e => (e.target.src = 'path/to/fallback-image.jpg')}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img src='path/to/fallback-image.jpg' alt='Fallback' />
          </SwiperSlide>
        )}
      </Swiper>
      <div className='container'>
        <div className='hero-container'>
          <h1>
            Your Trusted Partner for Procurement, Logistics, Petroleum, Oil &
            Gas Services and More
          </h1>
          <p>Delivering excellence from 2024 and beyond</p>
          <Link to='/Contact-Us'>
            <button aria-label='Contact us for services'>Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
