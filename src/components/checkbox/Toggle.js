import React, { useEffect, useState } from 'react';
import './Toggle.scss';

export default ({
  className = '',
  handleChange,
  value = undefined,
  disabled = false,
}) => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setToggled(value);
  }, [value]);

  const handleToggle = () => {
    if (disabled) {
      return;
    }

    setToggled(!toggled);
    handleChange();
  };

  return (
    <div onClick={handleToggle} className={`toggle-container ${className} ${toggled ? 'toggled' : ''} ${disabled ? 'disabled' : ''}`}>
      <span className={`thumb ${toggled ? 'toggled' : ''}`} />
    </div>
  );
};
