import React from 'react';
import './ImageBubble.scss';

export default function OrnamentalBubble({
  id,
  x,
  y,
  imgScale,
  scale,
  src,
  hasShadow,
  outlined,
  shadowOffset = '20px',
  fill,
}) {
  return (
    <div className="image-bubble">
      {
        hasShadow ? (
          <svg className="shadow" style={{ top: shadowOffset, left: shadowOffset }} width={scale || '560px'} viewBox="0 0 564 526" fill="none">
            {
              outlined ? (
                <path strokeWidth={4} stroke={fill} d="M527.033 389.622C436.448 532.623 235.205 564.82 104.875 458.088C40.8948 405.692 0.0615234 326.061 0.0615234 236.887C0.0615234 167.912 24.4915 104.646 65.1669 55.277C245.214 -124.247 681.887 172.448 527.033 389.622Z" />
              ) : (
                <path fill={fill} d="M527.033 389.622C436.448 532.623 235.205 564.82 104.875 458.088C40.8948 405.692 0.0615234 326.061 0.0615234 236.887C0.0615234 167.912 24.4915 104.646 65.1669 55.277C245.214 -124.247 681.887 172.448 527.033 389.622Z" />
              )
            }
          </svg>
        ) : ''
      }
      <svg className="image" width={scale || '560px'} viewBox="0 0 560 522" fill="none">
        <path fill={`url(#background-image-${id})`} d="M527.033 389.622C436.448 532.623 235.205 564.82 104.875 458.088C40.8948 405.692 0.0615234 326.061 0.0615234 236.887C0.0615234 167.912 24.4915 104.646 65.1669 55.277C245.214 -124.247 681.887 172.448 527.033 389.622Z" />
        <defs>
          <pattern id={`background-image-${id}`} patternUnits="userSpaceOnUse" width="560" height="522">
            <image href={src} x={x} y={y} width={imgScale || '687px'} />
          </pattern>
        </defs>
      </svg>
    </div>
  );
}
