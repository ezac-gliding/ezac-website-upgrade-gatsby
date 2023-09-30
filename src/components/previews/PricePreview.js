import React from 'react';
import Button from '../button/Button';
import OrnamentalBubble from '../floating-elements/bubbles/OrnamentalBubble';

export default ({
  entry,
}) => (
  <div className="flex-container">
    <div key={entry.getIn('id')} className="price-container">
      <div className="bubble" style={{ transform: `rotate(${entry.getIn(['data', 'orientation'])}deg)` }}>
        <OrnamentalBubble scale="230px" fill={entry.getIn(['data', 'color'])} />
      </div>

      <div className="title">
        <h3 className="price-name">{entry.getIn(['data', 'title'])}</h3>
        <span className="price">
          {entry.getIn(['data', 'currency'])}
          {entry.getIn(['data', 'price'])}
        </span>
      </div>

      <div className="feature-list">
        {entry.getIn(['data', 'features']).map((feature) => (
          <div key={feature.get('id')} className="feature">
            <i className="material-symbols-outlined">check_circle</i>
            <p>{feature.get('description')}</p>
          </div>
        ))}

        <Button>Lid worden</Button>
      </div>
    </div>
  </div>
);
