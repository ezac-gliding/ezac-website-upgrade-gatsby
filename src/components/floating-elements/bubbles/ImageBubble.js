import React from 'react';

export default function OrnamentalBubble({
  x,
  y,
  imgScale,
  scale,
  src,
}) {
  return (
    <svg width={scale || '687px'} viewBox="0 0 687 691" fill="none">
      <path fill="url(#background-image)" d="M687 351.691C663.076 631.9 281.541 790.759 82.9365 621.36C-70.6365 420.028 -4.73323 65.8816 229.376 2.19823C423.869 -22.3545 648.583 162.894 687 351.691Z" />
      <defs>
        <pattern id="background-image" patternUnits="userSpaceOnUse" width="687" height="691">
          <image href={src} x={x} y={y} width={imgScale || '687px'} />
        </pattern>
      </defs>
    </svg>
  );
}
