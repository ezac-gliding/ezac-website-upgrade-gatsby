import React from 'react';
import Button from 'src/components/button/Button';
import './Hero.scss';

export default () => (
  <div className="hero-container">
    <div className="wrapper">
      <div className="hero-box">
        <h1>Leren vliegen aan de EZAC?</h1>
        <p>Kom proeven van de prachtige sport! Meld je aan voor een eerste proefvlucht, of voor de doop van een familie-lid</p>
        <Button>Ontdek de tarieven</Button>
      </div>
    </div>
  </div>
);
