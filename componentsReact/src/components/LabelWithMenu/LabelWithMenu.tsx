import { FC, useState } from 'react';
import './LabelWithMenu.scope.scss';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const LabelWithMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="labelWithMenu">
      <button className="labelButton">Desc. ($)</button>
      <button className="menuButton" onClick={toggleDropdown}>
        <i className="fas fa-ellipsis-v"></i>
      </button>
      {isOpen && <MenuDropdown />}
    </div>
  );
};
