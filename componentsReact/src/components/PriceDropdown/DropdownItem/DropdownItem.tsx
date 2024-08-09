import { FC } from 'react';
import './DropdownItem.scope.scss';
import { DropdownItemProps } from '../typings/typings';



export const DropdownItem: FC<DropdownItemProps> = ({ label, price, onClick }) => {
  return (
    <div className="dropdownItem" onClick={onClick}>
      <span>{label}</span>
      <span>{price}</span>
    </div>
  );
};
