import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT_WIDTH = 766;

/**
 * @author Rafaël Mindreau
 * Exposes window size to JS
 */
export default () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_WIDTH);

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_WIDTH);

      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    if (window) {
      window.addEventListener('resize', handleResize);
    }

    handleResize();

    return () => {
      if (window) {
        window.removeEventListener('scroll', handleResize);
      }
    };
  }, []);

  return {
    viewportHeight,
    viewportWidth,
    isMobile,
  };
};
