import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../lib/scrollToSection';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => scrollToSection(id), 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}
