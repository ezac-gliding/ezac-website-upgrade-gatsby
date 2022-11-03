import React from 'react';
import './ClubValue.scss';

export default ({
  title,
  children,
}) => (
  <div className="club-value-container">
    <h3>{title}</h3>
    <span className="bullet" />
    <p>{children}</p>
  </div>
);
