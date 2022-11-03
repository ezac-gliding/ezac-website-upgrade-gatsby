import React, { useMemo } from 'react';
import Button from 'src/components/button/Button';
import { fadeInAt } from 'util/animation';
import './Hero.scss';

export default ({
  scrollPosition,
  appearAt,
}) => {
  const heroBoxStyle = useMemo(() => ({
    top: `${320 + (scrollPosition / 5)}px`,
    opacity: fadeInAt(scrollPosition, appearAt),
  }), [scrollPosition]);

  return (
    <div className="hero-container">
      <div className="wrapper">
        <div style={heroBoxStyle} className="hero-box">
          <h1>Leren vliegen aan de EZAC?</h1>
          <p>Kom proeven van de prachtige sport! Meld je aan voor een eerste proefvlucht, of voor de doop van een familie-lid</p>
          <Button>Ontdek de tarieven</Button>
        </div>
      </div>
    </div>
  );
};
