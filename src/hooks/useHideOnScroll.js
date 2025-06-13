import { useState, useEffect, useRef } from 'react';

const useHideOnScroll = () => {
  const [hidden, setHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        // Scrolling down and past 100px
        setHidden(true);
      } else if (currentScrollY < prevScrollY.current) {
        // Scrolling up
        setHidden(false);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return hidden;
};

export default useHideOnScroll; 