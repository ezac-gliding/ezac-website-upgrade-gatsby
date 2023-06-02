import React from 'react';

export default function BigSolidBubble({
  fill,
  scale,
}) {
  return (
    <svg width={scale || '474'} viewBox="0 0 474 423" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.5 93.1358C65 37.6358 152.5 -16.3642 239.5 4.63584C301.253 19.5418 360.5 80.1359 414 101.136C467.5 122.136 484.724 232.529 467.5 284.636C434.182 385.433 304.5 422.136 204.5 422.136C42.5 422.136 0 274.136 0 223.136C0 172.136 14 148.636 39.5 93.1358Z" fill={fill || '#ccc'} />
    </svg>
  );
}
