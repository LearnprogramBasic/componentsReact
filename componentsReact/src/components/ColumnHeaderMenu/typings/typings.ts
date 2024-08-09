import { ReactNode } from "react";

export interface MenuDropdownProps {
    isOpen: boolean;
    labelText: string;
  }

  export interface LabelWithMenuProps {
    menuIcon?: ReactNode;
    labelButtonContent?: ReactNode;
  }