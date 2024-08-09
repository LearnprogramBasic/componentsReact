export interface DropdownItemProps {
    label: string;
    price: string;
    onClick: () => void;
  }

  export interface DropdownListProps {
    onSelectPrice: (price: string) => void;
    listTitle?: string;
    priceTitle?: string; 
  }
  

  export interface PriceDropdownProps {
    icon?: string;
    isDropdownVisible?: boolean;
  }