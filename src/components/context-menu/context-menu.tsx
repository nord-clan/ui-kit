import Menu from '@mui/material/Menu';
import React, { useState, FC, useRef } from 'react';
import { nestedMenuItemsFromObject } from './nested-menu-items-from-object';
import { MenuItemData } from './types';

export interface ContextMenuProps {
  children?: React.ReactNode;
  menuItems?: React.ReactNode[];
  menuItemsData?: MenuItemData[];
}

interface Position {
  top: number;
  left: number;
}

const ContextMenu: FC<ContextMenuProps> = ({ children, menuItems, menuItemsData }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [menuPosition, setMenuPosition] = useState<Position | null>(null);

  const [mouseDownPosition, setMouseDownPosition] = useState<Position | null>(null);

  const handleItemClick = () => setMenuPosition(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (menuPosition !== null) setMenuPosition(null);

    if (e.button !== 2) return;

    const wrapperBounds = wrapperRef.current.getBoundingClientRect();

    // Check mouse coordinates are inside the rect
    if (
      e.clientX < wrapperBounds.left ||
      e.clientX > wrapperBounds.right ||
      e.clientY < wrapperBounds.top ||
      e.clientY > wrapperBounds.bottom
    ) {
      return;
    }

    setMouseDownPosition({ top: e.clientY,
left: e.clientX });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const top = e.clientY;
    const left = e.clientX;

    if (mouseDownPosition === null) return;

    if (mouseDownPosition.top === top && mouseDownPosition.left === left) {
      setMenuPosition({ top: e.clientY,
left: e.clientX });
    }
  };

  const menuContents =
    menuItems ??
    (menuItemsData &&
      nestedMenuItemsFromObject({
        menuItemsData: menuItemsData,
        isOpen: !!menuPosition,
        handleClose: handleItemClick
      }));

  return (
    <div
      ref={wrapperRef}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      {menuPosition && (
        <Menu
          onContextMenu={(e) => e.preventDefault()}
          open={!!menuPosition}
          onClose={() => setMenuPosition(null)}
          anchorReference="anchorPosition"
          anchorPosition={menuPosition}>
          {menuContents}
        </Menu>
      )}
      {children}
    </div>
  );
};

ContextMenu.displayName = 'ContextMenu';
export { ContextMenu };
