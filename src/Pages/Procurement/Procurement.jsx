import React from 'react';
import './Procurement.css';
import { images } from '../../assets/assets';

const Procurement = () => {
  return (
    <section className='procurement'>
      <div className='background-image'></div>
      <div className='container'>
        <div className='procurement-content'>
          <h1>Procurement</h1>
          <p className='grid-p'>
             <div className='procurement-image'>
            <img src={images.procurement_services} alt='' />
          </div>Our Procurement Services are designed to streamline your supply chain
          and ensure you receive the highest quality materials, equipment, and
          products for your business needs. We specialize in sourcing and
          supplying a wide range of items for industries such as oil & gas,
          construction, manufacturing, and more.</p>
          
          <br />
          <br />
          <p>
            With a strong network of reputable suppliers, we guarantee timely
            delivery, competitive pricing, and strict adherence to industry
            standards and specifications. Our experienced team manages the
            entire procurement process—from identifying requirements and
            negotiating with vendors to quality assurance and logistics—so you
            can focus on your core operations with confidence.
            <br />
            <br />
            Whether you need specialized tools, safety equipment, industrial
            machinery, or consumables, we are committed to providing tailored
            solutions that meet your unique project demands. Partner with us for
            reliable, efficient, and transparent procurement services that drive
            your business forward.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Procurement;
