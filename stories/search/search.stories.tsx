import type { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';

import { Search } from '../../src/components/search/search';
import { ISearchStoreParams, SearchStore } from '../../src/components/search/search.store';
import { IStoryThemeProps, ThemesArgs } from '../themes.stories';

const meta: Meta<ISearchStoreParams> = {
  title: 'Components/Search',
  argTypes: {},
};

export default meta;

//* - 1 ---------------------------------------------------------------- *//

interface IStoryProps extends IStoryThemeProps, ISearchStoreParams {}

const Template: Story<IStoryProps> = (props) => {
  const { themesAvailable, theme, name, ...rest } = props;

  const store = new SearchStore({
    name,
    ...rest,
  });

  const DemoComponent = () => <Search store={store} />;

  return (
    <ThemeProvider theme={themesAvailable[theme]}>
      <DemoComponent />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...ThemesArgs,
  name: 'search',
};
