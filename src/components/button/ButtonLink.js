import React from 'react';
import './Button.scss';

export default ({
  children,
  className,
  ...props
}) => (
  <a className={`button ${className}`} {...props}>{children}</a>
)
