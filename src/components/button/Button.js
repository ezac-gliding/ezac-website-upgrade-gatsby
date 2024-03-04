import React from 'react';
import './Button.scss';

export default ({
  children,
  className,
  ...props
}) => (
  <button className={`button ${className}`} {...props}>{children}</button>
);
