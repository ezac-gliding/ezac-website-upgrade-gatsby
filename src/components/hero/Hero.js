import React, { useMemo } from 'react';
import Button from 'src/components/button/Button';
import { fadeInAt } from 'util/animation';
import useViewport from 'src/hooks/useViewport';
import './Hero.scss';

export default ({
  scrollPosition,
  appearAt,
}) => {
  const {
    isMobile,
  } = useViewport();

  const heroBoxStyle = useMemo(() => ({
    left: isMobile ? '0' : '40px',
    top: isMobile ? `${400 - (scrollPosition / 3)}px` : `${Math.min(320 + (scrollPosition / 5), 400)}px`,
    opacity: isMobile ? 1 : fadeInAt(scrollPosition, appearAt),
  }), [scrollPosition]);

  return (
    <>
      <div className="hero-container">
        {
          isMobile ? '' : (
            <div className="wrapper">
              <div style={heroBoxStyle} className="hero-box">
                <h1>Leren vliegen aan de EZAC?</h1>
                <p>Kom proeven van de prachtige sport! Meld je aan voor een eerste proefvlucht, of voor de doop van een familie-lid</p>
                <Button>Ontdek de tarieven</Button>
              </div>
            </div>
          )
        }
      </div>
      {
        isMobile ? (
          <div className="hero-box">
            <h1>Leren vliegen aan de EZAC?</h1>
            <p>Kom proeven van de prachtige sport! Meld je aan voor een eerste proefvlucht, of voor de doop van een familie-lid</p>
            <Button>Ontdek de tarieven</Button>
          </div>
        ) : ''
      }
    </>
  );
};
