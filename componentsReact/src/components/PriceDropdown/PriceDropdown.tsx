import { FC, useState } from 'react';

import './PriceDropdown.scope.scss'
import { DropdownList } from './DropdownList/DropdownList';


export const PriceDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('10.000,00');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectPrice = (price: string) => {
    setSelectedPrice(price);
    setIsOpen(false);
  };

  return (
    <div className="priceDropdown">
      <input
        type="text"
        value={selectedPrice}
        readOnly
        className="input"
      />
      <button onClick={toggleDropdown} className="button">
      </button>
      {isOpen && (
        <DropdownList onSelectPrice={handleSelectPrice} />
      )}
    </div>
  );
};

