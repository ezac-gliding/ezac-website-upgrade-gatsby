import React from 'react';

export default ({
  entry,
}) => (
  <>
    <h3>{entry.getIn(['data', 'title'])}</h3>
    <p>
      {entry.getIn(['data', 'text'])}
    </p>
  </>
);
