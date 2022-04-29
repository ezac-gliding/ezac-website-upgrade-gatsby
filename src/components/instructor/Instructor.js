import React from 'react';
import Belt from 'src/components/belt/Belt';
import { getURL } from 'src/components/util/url';
import './Instructor.scss';

export default ({
  name,
  title,
  belt,
  description,
  photo,
}) => (
  <div className="instructor-container">
    <h3>{name}</h3>
    <h4>{title}</h4>

    <div className="instructor-picture-container">
      <div className="instructor-picture">
        <img src={getURL(photo)} alt={`photo of ${name}`} />
      </div>
      <Belt beltColor={belt} />
    </div>

    {
      description ? (
        <p className="quote-text">
          {description}
        </p>
      ) : ''
    }
  </div>
);
