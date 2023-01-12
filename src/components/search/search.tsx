import type { SearchStore } from './search.store';
import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { HiFingerPrint } from 'react-icons/hi';
import { useSetComponentId } from '#/helpers/stores';
import { SearchStyled } from './search.style';

export const Search: FC<{ store?: SearchStore }> = observer(({ store }) => {
  if (!store) return null;
  useSetComponentId(store);

  return (
    <SearchStyled>
      <HiFingerPrint />
    </SearchStyled>
  );
});
