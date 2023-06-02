import React from 'react';

export default function BigSolidBubble({
  fill,
  scale,
}) {
  return (
    <svg width={scale || '176'} viewBox="0 0 176 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M131.5 44V147.5L45 116.5" stroke={fill || '#ccc'} strokeWidth="88" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
