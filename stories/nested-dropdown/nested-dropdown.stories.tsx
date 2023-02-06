import type { Meta, StoryFn } from '@storybook/react';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import NewIcon from '@mui/icons-material/InsertDriveFileOutlined';
import SaveAsIcon from '@mui/icons-material/SaveOutlined';
import SaveIcon from '@mui/icons-material/SaveRounded';
import React from 'react';

import { MenuItemData, NestedDropdown } from '../../src/index';

const meta: Meta = {
  title: 'Components/NestedDropdown',
  component: NestedDropdown,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - NestedDropdown ---------------------------------------------------------------- *//

const menuItemsData: MenuItemData = {
  label: 'File',
  items: [
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
      leftIcon: <SaveAsIcon />,
      items: [
        {
          label: 'Option 1',
          rightIcon: <SaveAsIcon />,
          callback: () => console.log('Save As > Option 1 clicked')
        },
        {
          label: 'Option 2',
          leftIcon: <SaveAsIcon />,
          callback: () => console.log('Save As > Option 2 clicked'),
          disabled: true
        }
      ]
    },
    {
      label: 'Export',
      leftIcon: <ImportExportRoundedIcon />,
      rightIcon: <ImportExportRoundedIcon />,
      items: [
        {
          label: 'File Type 1',
          items: [
            {
              label: 'Option 1',
              rightIcon: <SaveAsIcon />,
              callback: () => console.log('Export > FT1 > O1 clicked'),
              sx: { color: '#FF0000' }
            },
            {
              label: 'Option 2',
              leftIcon: <SaveAsIcon />,
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
  ]
};

const Template: StoryFn = () => {
  return (
    <NestedDropdown
      onClick={() => console.log('Clicked')}
      menuItemsData={menuItemsData}
      MenuProps={{ elevation: 3 }}
      ButtonProps={{ variant: 'outlined' }}
    />
  );
};

export const Default = Template.bind({});
