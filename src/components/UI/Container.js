import React from 'react';
import './Container.scss';

export default ({
  children,
  className,
}) => (
  <div className={`container ${className ? className : ''}`}>
    <div className="wrapper">
      {children}
    </div>
  </div>
);
