import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Outlet } from 'react-router-dom';

export default function AdminPageTransition() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
