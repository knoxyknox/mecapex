import React from 'react';
import './ContactUs.css';
import FadeInSection from '../../components/FadeInSection/FadeInSection';

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <div className='background-image'>
        <FadeInSection>
          <div className='contact-info'>
            <h5>Contact Information</h5>
            <p>
              <span>Phone</span>: 08030604117, 09114626119
            </p>
            <p>
              <span>
                Email: mecapexserviceltd@gmail.com / Benidoko205@gmail.com
              </span>
            </p>
            <p>
              <span>
                Address: No11 Rumualugu, along NTA/Choba Rd. Port Harcourt.
              </span>
            </p>
          </div>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className='container'>
          <div className='contact-wrapper'>
            <h2>Get In Touch</h2>
            <form>
              <div className='field-box'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  required
                />
                <input
                  type='text'
                  placeholder='Email Address'
                  name='email'
                  required
                />
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='number'
                  required
                />
                <input
                  type='text'
                  placeholder='Email Subject'
                  name='subject'
                  required
                />
                <textarea
                  name='message'
                  id=''
                  placeholder='your Message'
                  required
                ></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ContactUs;
