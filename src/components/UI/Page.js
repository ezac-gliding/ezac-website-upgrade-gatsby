import React from 'react';
import './Page.scss';

export default function Page({
  children,
  className,
}) {
  return (
    <div className={`page ${className}`}>
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
}
