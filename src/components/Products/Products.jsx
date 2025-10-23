import React from 'react';
import './Products.css';
import { productsList } from '../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, FreeMode } from 'swiper/modules';

const Products = () => {
  return (
    <section className='products'>
      <div className='container'>
        <div className='product-content'>
          <h2>Our Products</h2>
          <p>
            Explore our range of high-quality products for oil & gas, safety,
            and industrial needs.
            <span>oil field tools</span>, <span>safety equipment & PPE</span>,
            <span>industrial PPE</span>, <span>drilling tools</span>.
          </p>
        </div>

        <div className='product'>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={0}
            freeMode={true}
            slidesPerView={7}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              767: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
            className='product-carousel'
          >
            {productsList.map((product, idex) => (
              <SwiperSlide key={idex} className='product-card'>
                <div className='product-card-container'>
                  <div className='product-card-wrapper'>
                    <div className='product-card-image'>
                      <img src={product.img} alt={product.alt}  loading='lazy'/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Products;
