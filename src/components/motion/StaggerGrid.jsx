import { motion, useInView } from 'framer-motion';
import { Children, useRef } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StaggerGrid({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={child?.key ?? i} variants={item} className="stagger-grid__cell">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
