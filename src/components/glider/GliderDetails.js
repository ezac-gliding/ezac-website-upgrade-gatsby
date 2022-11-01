import React from 'react';
import Button from 'src/components/button/Button';
import './glider-details.scss';

export default ({
  data: {
    empty_weight,
    fuselage_length,
    glide_ratio,
    manufacturer,
    max_speed,
    min_sink,
    type,
    wing_area,
    wing_aspect,
  },
  closeDetails,
  isMobile,
}) => (
  <div className={`glider-detail-card ${isMobile ? 'mobile' : ''}`}>
    <h1 className="type">{type}</h1>
    <p className="manufacturer">{manufacturer}</p>

    <p className="yellow">Beste glijgetal</p>
    <h2 className="yellow glide-ratio-number">{glide_ratio}</h2>

    <div className="specific-details">
      <div className="data-group">
        <var>Vleugeloppervlakte</var>
        <p>
          {wing_area}
          m
          <sup>
            &#178;
          </sup>
        </p>
      </div>

      <div className="data-group">
        <var>Wing aspect ratio</var>
        <p>
          {wing_aspect}
        </p>
      </div>

      <div className="data-group">
        <var>Lengte romp</var>
        <p>
          {fuselage_length}
          m
        </p>
      </div>

      <div className="data-group">
        <var>Gewicht in lege toestand</var>
        <p>
          {empty_weight}
          kg
        </p>
      </div>

      <div className="data-group">
        <var>Maximale snelheid</var>
        <p>
          {max_speed}
          km/h
        </p>
      </div>

      <div className="data-group">
        <var>Minste dalen</var>
        <p>
          {min_sink}
          m/s
        </p>
      </div>
    </div>

    <Button onClick={closeDetails}>Sluiten</Button>
  </div>
);
