import type { Meta, StoryFn } from '@storybook/react';

import AdbIcon from '@mui/icons-material/Adb';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import NewIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveIcon from '@mui/icons-material/SaveRounded';
import React from 'react';

import { ContextMenu, MenuItemData } from '../../src/index';

const meta: Meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - ContextMenu ---------------------------------------------------------------- *//

const menuItemsData: MenuItemData[] = [
  {
    label: 'New',
    leftIcon: <NewIcon />,
    callback: () => console.log('New clicked')
  },
  {
    label: 'Save',
    leftIcon: <SaveIcon />,
    callback: () => console.log('Save clicked')
  },
  {
    label: 'Save As',
    leftIcon: <FlutterDashIcon />,
    items: [
      {
        label: 'Option 1',
        rightIcon: <FlutterDashIcon />,
        callback: () => console.log('Save As > Option 1 clicked')
      },
      {
        label: 'Option 2',
        leftIcon: <AdbIcon />,
        callback: () => console.log('Save As > Option 2 clicked')
      }
    ]
  },
  {
    label: 'Export',
    leftIcon: <AdbIcon />,
    rightIcon: <AdbIcon />,
    items: [
      {
        label: 'File Type 1',
        items: [
          {
            label: 'Option 1',
            rightIcon: <FlutterDashIcon />,
            callback: () => console.log('Export > FT1 > O1 clicked')
          },
          {
            label: 'Option 2',
            leftIcon: <AdbIcon />,
            callback: () => console.log('Export > FT1 > O2 clicked')
          }
        ]
      },
      {
        label: 'File Type 2',
        callback: () => console.log('Export > FT2 clicked')
      }
    ]
  }
];

const Template: StoryFn = () => {
  return (
    <ContextMenu menuItemsData={menuItemsData}>
      <div>Right Click Me!</div>
    </ContextMenu>
  );
};

export const Default = Template.bind({});
