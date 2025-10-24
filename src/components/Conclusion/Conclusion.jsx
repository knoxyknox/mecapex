import React, { memo } from 'react';
import './Conclusion.css';
import { motion } from 'framer-motion';

const Conclusion = () => {

  
  return (
    <section className='conclusion'>
    
      <div className='container'>
        <motion.div
          className='content-container'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: 'tween',
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
        >
          <h3>
            MECAPEX is not only a leader in the oil and gas procurement sector
            but also a key player in promoting Indigenous involvement and
            sustainable practices. With its focus on innovation, empowerment,
            and integrity, the company is poised to make a lasting impact in the
            energy industry and the communities it serves.
          </h3>
        </motion.div>
      </div>
     
    </section>
  );
};

export default memo(Conclusion);
