import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import GliderDetails from 'src/components/glider/GliderDetails';
import { getURL } from 'src/util/url';
import useViewport from 'hooks/useViewport';
import './glider.scss';

export default ({
  data: {
    blueprint,
    empty_weight,
    fuselage_length,
    glide_ratio,
    manufacturer,
    max_speed,
    min_sink,
    type,
    wing_area,
    wing_aspect,
    scale,
  },
}) => {
  const [detailIsOpen, setDetailOpen] = useState(false);
  const {
    isMobile,
  } = useViewport();

  const blueprintStyle = {
    width: `${scale}%`,
  };

  return (
    <div className="glider-container">
      <h3>{type}</h3>
      <h4>{manufacturer}</h4>

      {
        isMobile ? (
          <>
            <div onClick={() => setDetailOpen(!detailIsOpen)} className={`blueprint-container ${detailIsOpen ? 'open' : ''}`}>
              <img style={blueprintStyle} src={getURL(`../${blueprint}`)} alt={type} />
            </div>
            {
              detailIsOpen ? (
                <GliderDetails
                  data={{
                    empty_weight,
                    fuselage_length,
                    glide_ratio,
                    manufacturer,
                    max_speed,
                    min_sink,
                    type,
                    wing_area,
                    wing_aspect,
                  }}
                  isMobile
                  closeDetails={() => setDetailOpen(false)}
                />
              ) : ''
            }
          </>
        ) : (
          <Popover
            isOpen={detailIsOpen}
            onClickOutside={() => setDetailOpen(false)}
            align="top"
            positions={['bottom', 'left', 'right']} // preferred positions by priority
            padding={10}
            contentLocation={isMobile ? { top: 0, left: 0 } : ''}
            content={(
              <GliderDetails
                data={{
                  empty_weight,
                  fuselage_length,
                  glide_ratio,
                  manufacturer,
                  max_speed,
                  min_sink,
                  type,
                  wing_area,
                  wing_aspect,
                }}
                closeDetails={() => setDetailOpen(false)}
              />
            )}
          >
            <div onClick={() => setDetailOpen(!detailIsOpen)} className={`blueprint-container ${detailIsOpen ? 'open' : ''}`}>
              <img style={blueprintStyle} src={getURL(`../${blueprint}`)} alt={type} />
            </div>
          </Popover>
        )
      }
    </div>
  );
};
