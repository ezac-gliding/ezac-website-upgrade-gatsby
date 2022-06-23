import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import GliderDetails from 'src/components/glider/GliderDetails';
import { getURL } from 'src/util/url';
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

  const blueprintStyle = {
    padding: `10px ${110 - scale}px`,
  };

  return (
    <div className="glider-container">
      <h3>{type}</h3>
      <h4>{manufacturer}</h4>

      <Popover
        isOpen={detailIsOpen}
        onClickOutside={() => setDetailOpen(false)}
        positions={['bottom', 'left', 'right']} // preferred positions by priority
        padding={10}
        content={(
          <GliderDetails data={{
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
          />
        )}
      >
        <div style={blueprintStyle} onClick={() => setDetailOpen(!detailIsOpen)} className={`blueprint-container ${detailIsOpen ? 'open' : ''}`}>
          <img src={getURL(`../${blueprint}`)} alt={type} />
        </div>
      </Popover>
    </div>
  );
};
