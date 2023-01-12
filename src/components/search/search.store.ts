import { makeAutoObservable } from 'mobx';

//* ---- Store ---------------------------------------------------------------- *//
export class SearchStore {
  private _params: ISearchStoreParams;

  private _state: ISearchStoreState = {
    isSearchVisible: false,
    term: '',
  };

  constructor(params: ISearchStoreParams) {
    this._params = params;

    makeAutoObservable(this);
  }

  private _setValue = (value: string) => (this._state.term = value);

  setIsSearchVisible = (value: boolean): boolean => (this._state.isSearchVisible = value);

  onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => this._setValue(e.target.value);

  get state() {
    return this._state;
  }

  get params() {
    return this._params;
  }
}

//* ---- Interfaces ---------------------------------------------------------------- *//
export interface IOptionsItems {
  id: string;
  name: string;
}

export interface ISearchStoreParams {
  optionsItems?: IOptionsItems[];
}

export interface ISearchStoreState {
  isSearchVisible: boolean;
  term: string;
}
