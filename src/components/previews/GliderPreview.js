import React from 'react';
import Glider from '../glider/Glider';
import GliderDetails from '../glider/GliderDetails';

export default ({
  entry,
}) => {
  const gliderData = {
    blueprint: entry.getIn(['data', 'blueprint']),
    empty_weight: entry.getIn(['data', 'empty-weight']),
    fuselage_length: entry.getIn(['data', 'fuselage-length']),
    glide_ratio: entry.getIn(['data', 'glide-ratio']),
    manufacturer: entry.getIn(['data', 'manufacturer']),
    max_speed: entry.getIn(['data', 'max-speed']),
    min_sink: entry.getIn(['data', 'min-sink']),
    type: entry.getIn(['data', 'type']),
    wing_area: entry.getIn(['data', 'wing-area']),
    wing_aspect: entry.getIn(['data', 'wing-aspect']),
  };

  return (
    <>
      <Glider data={gliderData} />
      <GliderDetails data={gliderData} />
    </>
  );
};
