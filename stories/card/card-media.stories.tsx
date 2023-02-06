import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { CardActions, CardContent, CardMedia, Card, Button, Typography } from '../../src';

const meta: Meta = {
  title: 'Components/Cards/CardMedia',
  component: CardMedia,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - CardMedia ---------------------------------------------------------------- *//
const Template: StoryFn = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://animesher.com/orig/0/13/138/1383/animesher.com_serial-experiments-lain-girl-gif-138347.gif"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export const Default = Template.bind({});
