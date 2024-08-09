import { FC } from 'react';
import './DropdownList.scope.scss';

interface DropdownListProps {
  onSelectPrice: (price: string) => void;
}

export const DropdownList: FC<DropdownListProps> = ({ onSelectPrice }) => {
  const prices = [
    { label: 'Lista 1', price: '2.500' },
    { label: 'Lista 2', price: '5.000' },
    { label: 'Lista 3', price: '10.000' },
    { label: 'Lista 4', price: '2.500' },
    { label: 'Lista 5', price: '5.000' },
    { label: 'Lista 6', price: '10.000' },
  ];

  return (
    <div className="dropdownList">
      <div className="dropdownHeader">
        <span>Lista</span>
        <span>Precio (COP)</span>
      </div>
      {prices.map((item, index) => (
        <div
          key={index}
          className="dropdownItem"
          onClick={() => onSelectPrice(item.price)}
        >
          <span>{item.label}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};
