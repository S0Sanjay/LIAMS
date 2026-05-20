import { motion } from 'framer-motion';

export default function AnimatedListItem({ children, className = '' }) {
  return (
    <motion.li
      className={className}
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.li>
  );
}
