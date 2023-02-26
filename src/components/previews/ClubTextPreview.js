import React from 'react';
import ReactMarkdown from 'react-markdown';
import OrnamentalBubble from '../floating-elements/bubbles/OrnamentalBubble';
import ImageBubble from '../floating-elements/bubbles/ImageBubble';
// import ImageBubbleAlternate from '../floating-elements/bubbles/ImageBubbleAlternate';

export default ({
  entry,
}) => (
  <div className="club-story-preview-block">
    <div className="block space-below" style={{ backgroundColor: entry.getIn(['data', 'backgroundColor']) }}>
      <div className="wrapper">
        <div
          style={{
            top: entry.getIn(['data', 'bubble', 'yOffset']),
            right: entry.getIn(['data', 'bubble', 'fromRight']) ? `${entry.getIn(['data', 'bubble', 'xOffset'])}px` : 'unset',
            left: !entry.getIn(['data', 'bubble', 'fromRight']) ? `${entry.getIn(['data', 'bubble', 'xOffset'])}px` : 'unset',
            zIndex: 0,
          }}
          className="floating-bubble"
        >
          <OrnamentalBubble scale={`${entry.getIn(['data', 'bubble', 'scale'])}px`} fill={entry.getIn(['data', 'bubble', 'color'])} />
        </div>

        <div className="content">
          <div className="story-block">
            <ReactMarkdown>
              {entry.getIn(['data', 'content'])}
            </ReactMarkdown>
          </div>
        </div>

        {
          entry.getIn(['data', 'image', 'source']) ? (
            <div
              style={{
                top: `${entry.getIn(['data', 'image', 'yOffset'])}px`,
                right: entry.getIn(['data', 'image', 'fromRight']) ? `${entry.getIn(['data', 'image', 'xOffset'])}px` : 'unset',
                left: !entry.getIn(['data', 'image', 'fromRight']) ? `${entry.getIn(['data', 'image', 'xOffset'])}px` : 'unset',
                zIndex: 3,
              }}
              className="floating-bubble image"
            >
              <ImageBubble
                hasShadow={entry.getIn(['data', 'image', 'shadow'])}
                fill={entry.getIn(['data', 'image', 'color'])}
                x={entry.getIn(['data', 'image', 'imagePosX'])}
                y={entry.getIn(['data', 'image', 'imagePosY'])}
                scale="500px"
                imgScale="1000px"
                src={entry.getIn(['data', 'image', 'source'])}
                outlined={entry.getIn(['data', 'image', 'outline'])}
              />
            </div>
          ) : ''
        }
      </div>
    </div>
  </div>
);
