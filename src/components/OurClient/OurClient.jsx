import React from 'react';
import './OurClient.css';
import { clients } from '../../assets/assets';

const OurClient = () => {
  return (
    <section className='our-client'>
      <div className='container'>
        <h2>Our Clients</h2>
        <p>
          We are proud to have worked with a diverse range of clients across
          various industries. Here are some of the notable companies we have had
          the privilege to serve:
        </p>
        <div className='client-img-container'>
          {clients.map(client => (
            <div className='client-image' key={client.id}>
              <img src={client.img} alt={client.alt} />
            </div>
          ))}
        </div>
         <div className='partner'>
            <h2>Partner Affiliation</h2>
            <p>
              We collaborate with various partners, including leading suppliers,
              logistics providers, and industry regulators. Our affiliations
              ensure that we maintain quality standards, adhere to best
              practices, and continually improve our service offerings.
            </p>
          
          </div>
      </div>
    </section>
  );
};

export default OurClient;
