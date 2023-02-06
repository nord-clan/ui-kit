import type { Meta, StoryFn } from '@storybook/react';
import { Box } from '@mui/material';
import React from 'react';

import { Card, Button, CardActions, CardContent, Typography } from '../../src';

const meta: Meta = {
  title: 'Components/Cards/Card',
  component: Card,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - Card ---------------------------------------------------------------- *//

const bull = (
  <Box component="span" sx={{ display: 'inline-block',
mx: '2px',
transform: 'scale(0.8)' }}>
    •
  </Box>
);

const Template: StoryFn = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export const Default = Template.bind({});
