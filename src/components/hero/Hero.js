import React from 'react';
import './Hero.scss';

export default () => (
  <div className="hero-container">
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/USQGCsMXU0U?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=USQGCsMXU0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
  </div>
);
