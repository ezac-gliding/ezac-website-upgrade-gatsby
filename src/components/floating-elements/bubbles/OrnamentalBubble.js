import React from 'react';

export default function OrnamentalBubble({
  fill,
  scale,
}) {
  return (
    <svg width={scale || '65'} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50.5639 1.75256C71.9247 16.5747 67.0056 54.6546 44.2315 62.8778C20.9809 66 -4.36566 44.3904 1.36228 22.5794C8.39443 5.76394 33.6477 -3.83582 50.5639 1.75256Z" fill={fill || '#ccc'} />
    </svg>
  );
}
