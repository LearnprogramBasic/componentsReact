import { FC, useState } from 'react';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import './ColumnHeaderMenu.scope.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LabelWithMenuProps } from './typings/typings';



export const ColumnHeaderMenu: FC<LabelWithMenuProps> = ({
  menuIcon = <i className="fas fa-ellipsis-v"></i>,  // Valor por defecto
  labelButtonContent = "Desc. ($)"  // Valor por defecto
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="labelWithMenu">
      <button className="labelButton">
        {labelButtonContent}
      </button>
      <button className="menuButton" onClick={toggleDropdown}>
        {menuIcon}
      </button>
      {isOpen && <MenuDropdown isOpen={isOpen} labelText="Descuento por valor" />}
    </div>
  );
};
