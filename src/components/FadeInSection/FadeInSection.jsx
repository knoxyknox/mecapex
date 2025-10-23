import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >{children}</motion.div>
    </section>
  );
};

export default FadeInSection;
