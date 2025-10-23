
import React, {  useMemo } from 'react';
import './OurServices.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import { Navigation, Pagination } from 'swiper/modules';
import { services } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OurServices = () => {

  const slugs = useMemo(() => {
    return services.map((service) =>
      service.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    );
  }, []);

  return (
    <motion.section className='our-services'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='heading'
        >
          <h2>Our Services</h2>
        </motion.div>
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
              const slug = slugs[index]; 
              return (
                <SwiperSlide key={index} className='card'>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className='card-container'>
                      <div className='card-wrapper'>
                        <div className='card-image'>
                          <img 
                            src={service.img} 
                            alt={service.title} 
                            loading="lazy" 
                          />
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
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default OurServices; 
