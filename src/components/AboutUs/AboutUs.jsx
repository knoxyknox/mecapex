import React from 'react';
import './AboutUs.css';
import { images } from '../../assets/assets';

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='background-image'><h1>who we are</h1></div>
      <div className='container'>
        <div className='about-container'>
          <div className='about-content'>
            {' '}
            <h1 className='about-heading headings'>ABOUT US</h1>
            <p>
              MECAPEX is a prominent indigenous oil and gas company, primarily
              focused on providing procurement, logistics, haulage, petroleum
              products supply, oil and gas services, and general contracting.
              With a team of experienced professionals and a dedication to
              delivering excellence, we cater to the growing needs of the oil
              and gas sector, as well as other industries in need of dependable
              service solutions
            </p>
          </div>
          <div className='right-image'>
            <img src={images.procurement_services} alt='' />
            <img src={images.pump_1} alt='' />
            <img src={images.truck} alt='' />
            <img src={images.contractors} alt='' />
          </div>
        </div>
        <div className='mission'>
          <div className='mission-content'>
            <h1 className='mission-heading headings'>Our Mission</h1>
            <p>
              To deliver quality and cost-effective solutions across industries,
              while prioritizing safety, sustainability, and client
              satisfaction. We aim to bridge gaps in supply chains, provide.
              timely delivery, and ensure reliable access to essential
              commodities and services.
            </p>
          </div>
          <div className='vision-container'>
            <img src={images.mission} alt='' />
            <div className='vision'>
              <h1 className='vision-heading headings'>OUR VISION</h1>
              <p>
                To be the leading provider of comprehensive procurement,
                logistics, petroleum, and oil & gas services by delivering
                consistent value, innovation, and efficiency to all our clients.
                and stakeholders.
              </p>
            </div>
          </div>
          <div className='core-values'>
            <h1 className='headings'>core values</h1>
            <ul>
              <li>
                <h3>Integrity</h3>
                <p>
                  We uphold high ethical standards and transparency in all our
                  dealings.
                </p>
              </li>
              <li>
                <h3>Efficiency</h3>
                <p>
                  {' '}
                  We ensure timely and cost-effective service delivery to meet
                  customer expectations.
                </p>
              </li>
              <li>
                <h3> Innovation</h3>
                <p>
                  {' '}
                  We continually improve our processes and leverage technology
                  to optimize services.
                </p>
              </li>
              <li>
                <h3> Customer Satisfaction</h3>
                <p>
                  {' '}
                  Our customers' success is our priority; we build long-term
                  relationships based on trust and quality service. Safety: We
                  maintain stringent safety protocols, especially in handling
                  petroleum and oil & gas products, ensuring zero harm to the
                  environment and people.
                </p>
              </li>
            </ul>
          </div>
          <div className='our-strengths'>
            <h1>Our Strengths</h1>
            <div className='grid-our-strength'>
              <ul>
                <li>
                  <h3>Experienced Team</h3>
                  <p>
                    Our workforce comprises industry professionals with years of
                    experience in the oil and gas sector.
                  </p>
                </li>
                <li>
                  <h3>Timely Delivery</h3>
                  <p>
                    We understand the critical nature of time in our industry
                    and consistently deliver on time.
                  </p>
                </li>
                <li>
                  <h3>Quality Assurance</h3>
                  <p>
                    We adhere to the highest standards of quality, ensuring the
                    products and services we provide meet international
                    specifications.
                  </p>
                </li>
                <li>
                  <h3>Strategic Partnerships:</h3>
                  <p>
                    Our partnerships with key industry players enable us to
                    offer unparalleled services and value to our clients. Safety
                    and Compliance: We prioritize safety in all our operations
                    and strictly comply with regulatory requirements and best
                    practices.
                  </p>
                </li>
                <li>
                  <h3>Technology-Driven</h3>
                  <p>
                    We leverage cutting-edge technology to enhance efficiency
                    and accuracy in our services.
                  </p>
                </li>
                <li>
                  <h3>Corporate Social Responsibility (CSR)</h3>
                  <p>
                    MECAPEX is committed to enhancing the well-being of
                    Indigenous communities through its CSR initiatives. The
                    company invests in local education, infrastructure, and
                    environmental protection projects to ensure long-term
                    benefits for all stakeholders
                  </p>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
