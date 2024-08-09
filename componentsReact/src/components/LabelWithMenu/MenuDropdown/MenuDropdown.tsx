import React, { useState } from 'react';
import './MenuDropdown.scope.scss';

const MenuDropdown: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="menuDropdown">
      <label className="dropdownLabel">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        Descuento por valor
      </label>
    </div>
  );
};

export default MenuDropdown;
