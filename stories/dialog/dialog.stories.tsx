import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Typography } from '../../src';

const meta: Meta = {
  argTypes: {
    children: {}
  },
  component: Dialog,
  parameters: {
    controls: { expanded: true }
  },
  title: 'Components/Dialogs/Dialog',
};

export default meta;

//* - Dialog ---------------------------------------------------------------- *//
const Template: StoryFn = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DemoComponent = () => (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
          vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <DemoComponent open={open} onClose={handleClose} />
    </div>
  );
};

export const Default = Template.bind({});
