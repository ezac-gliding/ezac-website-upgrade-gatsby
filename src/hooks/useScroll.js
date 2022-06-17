import { useState, useEffect } from 'react';

/**
 * @author Rafaël Mindreau
 * Exposes scroll data into JS
 */
export default () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWindowScroll = ({
      srcElement: {
        scrollingElement: {
          scrollTop,
        },
      },
    }) => {
      setScrollPosition(scrollTop);
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return scrollPosition;
}
