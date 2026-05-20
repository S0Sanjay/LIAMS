import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  variant = 'up',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  const hidden = {
    up: { opacity: 0, y: 32 },
    fade: { opacity: 0 },
    scale: { opacity: 0, scale: 0.96 },
  }[variant];

  const visible = {
    up: { opacity: 1, y: 0 },
    fade: { opacity: 1 },
    scale: { opacity: 1, scale: 1 },
  }[variant];

  const Component = motion[as] ?? motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </Component>
  );
}
