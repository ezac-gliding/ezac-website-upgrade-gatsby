import React, { useEffect, useState } from 'react';
import useCookie from 'hooks/useCookie';
import './Hero.scss';

export default () => {
  const { getCookie } = useCookie('cookie-consent');
  const [youtubeCookies, setYoutubeCookies] = useState(false);

  useEffect(() => {
    setYoutubeCookies(getCookie().indexOf('youtube') !== -1);
  }, []);

  return (
    <div className="hero-container">
      <div className="video-container">
        {
          youtubeCookies ? (
            <iframe src="https://www.youtube.com/embed/USQGCsMXU0U?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=USQGCsMXU0U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          ) : (
            <iframe src="https://www.youtube-nocookie.com/embed/USQGCsMXU0U?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=USQGCsMXU0U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )
        }
      </div>
    </div>
  );
};
