import { FC, useState, ReactNode } from 'react';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import './LabelWithMenu.scope.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface LabelWithMenuProps {
  menuIcon?: ReactNode;  // Las props son opcionales con el signo ?
  labelButtonContent?: ReactNode;
}

export const LabelWithMenu: FC<LabelWithMenuProps> = ({
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
