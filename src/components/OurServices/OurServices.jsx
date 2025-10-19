import React from 'react';
import './OurServices.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { services } from '../../assets/assets';
import { Link } from 'react-router-dom';
const OurServices = () => {
  return (
    <section className='our-services'>
      <div className='container'>
        <div className='heading'>
          <h2>Our Services</h2>
        </div>

        <div className='services-card'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            navigation
            pagination={{
              clickable: true,
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'swiper-button-disabled',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              629: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='my-swiper'
          >
            {services.map((service, index) => {
              const slug = service.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <SwiperSlide key={index} className='card'>
                  <div className='card-container'>
                    <div className='card-wrapper'>
                      <div className='card-image'>
                        <img src={service.img} alt={service.title} />
                      </div>
                      <div className='card-content'>
                        <h5>{service.title}</h5>
                        <p>{service.description}</p>
                      </div>
                      <Link to={`/Our-Services#${slug}`}>
                        <button>{service.btn}</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
