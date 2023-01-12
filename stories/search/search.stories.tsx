import type { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';

import { v4 } from 'uuid';
import { Search } from '../../src/components/search/search';
import { ISearchStoreParams, SearchStore } from '../../src/components/search/search.store';
import { IStoryThemeProps, ThemesArgs } from '../themes.stories';

const meta: Meta<ISearchStoreParams> = {
  title: 'Components/Search',
  argTypes: {},
};

export default meta;

//* - Default ---------------------------------------------------------------- *//

interface IStoryProps extends IStoryThemeProps, ISearchStoreParams {}

const Template: Story<IStoryProps> = (props) => {
  const { themesAvailable, theme, ...rest } = props;

  const store = new SearchStore({
    ...rest,
    optionsItems: [
      {
        id: v4(),
        name: 'Tables',
      },
      {
        id: v4(),
        name: 'Users',
      },
    ],
  });

  return (
    <ThemeProvider theme={themesAvailable[theme]}>
      <div style={{ marginTop: '20px', position: 'relative' }}>
        <Search store={store} />
        <button
          type="button"
          onClick={() => store.setIsSearchVisible(!store.state.isSearchVisible)}>
          Search
        </button>
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...ThemesArgs,
};
