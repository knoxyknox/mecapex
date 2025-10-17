import React from 'react';
import './Expertise.css';
import { expertise } from '../../assets/assets';
import { useEffect } from 'react';

const Expertise = () => {
 
  return (
    <section className='expertise'>
      {expertise.map((item, index) => (
        <div className='container' key={index}>
          <div className='expertise-intro'>
            <h2 className='headers'>industries expertise</h2>
            <p>{item.intro}</p>
          </div>
          <div className='right-grid'>
            <div className='hse head'>
              <h3 className='headers'>HEALTH, SAFETY, AND ENVIRONMENT (HSE)</h3>
              <p>{item.hse}</p>
            </div>
            <div className='saer head'>
              <h3 className='headers'>
                SUSTAINABILITY AND ENVIRONMENT RESPONSIBILITY
              </h3>
              <p>{item.saer}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Expertise;
