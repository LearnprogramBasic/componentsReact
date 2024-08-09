import { FC, useState } from 'react';
import './PriceDropdown.scope.scss';
import { DropdownList } from './DropdownList/DropdownList';
import { PriceDropdownProps } from './typings/typings';

export const PriceDropdown: FC<PriceDropdownProps> = ({ icon = "fas fa-angle-down", isDropdownVisible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('10.000,00');

  const toggleDropdown = () => {
    if (isDropdownVisible) {
      setIsOpen(!isOpen);
    }
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
        <i className={icon}></i>
      </button>
      {isOpen && isDropdownVisible && (
        <DropdownList onSelectPrice={handleSelectPrice} />
      )}
    </div>
  );
};
