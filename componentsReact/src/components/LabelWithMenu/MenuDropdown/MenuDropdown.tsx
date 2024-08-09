// MenuDropdown.tsx
import React, { FC, useState } from 'react';
import './MenuDropdown.scope.scss';

interface MenuDropdownProps {
  isOpen: boolean;
  labelText: string;
}

const MenuDropdown: FC<MenuDropdownProps> = ({ isOpen, labelText }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  if (!isOpen) return null;

  return (
    <div className="menuDropdown">
      <label className="dropdownLabel">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {labelText}
      </label>
    </div>
  );
};

export default MenuDropdown;
