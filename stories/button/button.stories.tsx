import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Button } from '../../src';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - Button ---------------------------------------------------------------- *//

const Template: StoryFn = () => {
  return <Button>Button</Button>;
};

export const Default = Template.bind({});
