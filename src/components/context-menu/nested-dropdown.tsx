import Button, { ButtonProps } from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import React, { FC } from 'react';
import { ChevronDown } from './icon/chevron-down';
import { nestedMenuItemsFromObject } from './nested-menu-items-from-object';
import { MenuItemData } from './types';

interface NestedDropdownProps {
  children?: React.ReactNode;
  menuItemsData?: MenuItemData;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ButtonProps?: Partial<ButtonProps>;
  MenuProps?: Partial<MenuProps>;
}

export const NestedDropdown: FC<NestedDropdownProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const { menuItemsData: data, onClick, ButtonProps, MenuProps, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    onClick && onClick(e);
  };

  const handleClose = () => setAnchorEl(null);

  const menuItems = nestedMenuItemsFromObject({
    menuItemsData: data?.items ?? [],
    isOpen: open,
    handleClose
  });

  return (
    <div {...rest}>
      <Button onClick={handleClick} endIcon={<ChevronDown />} {...ButtonProps}>
        {data?.label ?? 'Menu'}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} {...MenuProps}>
        {menuItems}
      </Menu>
    </div>
  );
};
