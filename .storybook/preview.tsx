import React from 'react';

// Default Setting
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  // Add Custom Background
  backgrounds: {
    default: 'bgWhite',
    values: [
      {
        name: 'bgWhite',
        value: '#fafafa'
      },
      {
        name: 'white',
        value: '#FFFFFF'
      },
      {
        name: 'black',
        value: '#212121'
      }
    ]
  }
};

export const decorators = [(Story) => <Story />];
