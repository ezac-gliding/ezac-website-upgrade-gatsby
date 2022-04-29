import React from 'react';
import './Checkbox.scss';

export default ({
  className,
  handleChange,
}) => (
  <div className={`checkbox-container ${className}`}>
    <input onChange={handleChange} className="control" type="checkbox" />
    <span className="checkbox" />
  </div>
);
