import type { Meta, StoryFn } from '@storybook/react';
import { Avatar, Box, CardContent, Divider } from '@mui/material';
import React from 'react';

import { Button, Card, CardActions, Typography } from '../../src';

const meta: Meta = {
  title: 'Components/Cards/CardActions',
  component: CardActions,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - CardActions ---------------------------------------------------------------- *//
const Template: StoryFn = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar src="https://animesher.com/orig/0/13/138/1383/animesher.com_serial-experiments-lain-girl-gif-138347.gif" />
          <Typography color="textPrimary" gutterBottom variant="h3">
            user.name
          </Typography>
          <Typography color="textSecondary" variant="body1">
            user.city user.country
          </Typography>
          <Typography color="textSecondary" variant="body1">
            hh:mm A
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

export const Default = Template.bind({});
