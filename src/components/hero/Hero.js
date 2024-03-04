import React, { useEffect, useState } from 'react';
import useCookie from 'hooks/useCookie';
import './Hero.scss';

const videoUrl = 'q4AEXXGz4b8';

export default () => {
  const { getCookie } = useCookie('cookie-consent');
  const [youtubeCookies, setYoutubeCookies] = useState(false);

  useEffect(() => {
    setYoutubeCookies(getCookie()?.indexOf('youtube') !== -1);
  }, []);

  return (
    <div className="hero-container">
      <div className="video-container">
        {
          youtubeCookies ? (
            <iframe src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&vq=hd1080&playlist=${videoUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          ) : (
            <iframe src={`https://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&vq=hd1080&playlist=${videoUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )
        }
      </div>
    </div>
  );
};
