import type { SearchStore } from './search.store';
import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { CgSearchLoading } from 'react-icons/cg';
import { SearchStyled } from './search.style';

export const Search: FC<{ store?: SearchStore }> = observer(({ store }) => {
  if (!store) return null;
  const { params, state } = store;

  if (!state.isSearchVisible) return null;

  return (
    <SearchStyled>
      <div className="input">
        <input value={state.term} onChange={store.onChangeSearch} placeholder="Search..." />
        <CgSearchLoading />
      </div>
      <div className="settings">
        <div className="settings-wrapper">
          {params.optionsItems?.map(({ id, name }) => (
            <div key={id} className="items">
              {name}
            </div>
          ))}
        </div>
      </div>
    </SearchStyled>
  );
});
