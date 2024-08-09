import { FC } from 'react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import './DropdownList.scope.scss';
import { DropdownListProps } from '../typings/typings';
import { prices } from '../Mock/Mock';

export const DropdownList: FC<DropdownListProps> = ({ onSelectPrice, listTitle = "Lista", priceTitle = "Precio (COP)" }) => {
 

  return (
    <div className="dropdownList">
      <div className="dropdownHeader">
        <span>{listTitle}</span>
        <span>{priceTitle}</span>
      </div>
      {prices.map((item, index) => (
        <DropdownItem
          key={index}
          label={item.label}
          price={item.price}
          onClick={() => onSelectPrice(item.price)}
        />
      ))}
    </div>
  );
};
