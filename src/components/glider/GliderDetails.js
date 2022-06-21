import React from 'react';
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
}) => (
  <div className="glider-detail-card">
    <h1 className="type">{type}</h1>
    <p className="manufacturer">{manufacturer}</p>

    <p className="yellow">Best glide ratio</p>
    <h2 className="yellow glide-ratio-number">{glide_ratio}</h2>

    <div className="data-group">
      <var>Wing area</var>
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
      <var>Fuselage length</var>
      <p>
        {fuselage_length}
        m
      </p>
    </div>

    <div className="data-group">
      <var>Empty weight</var>
      <p>
        {empty_weight}
        kg
      </p>
    </div>

    <div className="data-group">
      <var>Max speed</var>
      <p>
        {max_speed}
        km/h
      </p>
    </div>

    <div className="data-group">
      <var>Min sink</var>
      <p>
        {min_sink}
        m/s
      </p>
    </div>
  </div>
);
