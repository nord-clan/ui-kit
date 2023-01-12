import { action, computed, makeObservable, observable } from 'mobx';

export interface IBaseDialogStoreParams {
  delay?: number;
  isNotAnimate?: boolean;
  isOutsideClick?: boolean;
}

interface IBaseDialogStoreState {
  isVisible: boolean;
  isLock: boolean;
}

export class BaseDialogStore {
  private _params?: IBaseDialogStoreParams;

  private _timeout?: ReturnType<typeof setTimeout> | null;

  state: IBaseDialogStoreState = {
    isVisible: false,
    isLock: false,
  };

  constructor(params?: IBaseDialogStoreParams) {
    this._params = {
      ...params,
      isOutsideClick: params?.isOutsideClick ?? true,
    };

    makeObservable(this, {
      setIsVisible: action,
      setIsLock: action,
      lockDialog: action,
      isDialogHidden: computed,
    });

    makeObservable(this.state, {
      isVisible: observable,
      isLock: observable,
    });
  }

  setIsVisible = (isVisible: boolean): boolean => (this.state.isVisible = isVisible);

  setIsLock = (isLock: boolean): boolean => (this.state.isLock = isLock);

  switchVisible = (): void => (this.state.isVisible ? this.hideDialog() : this.showDialog());

  lockDialog = (): void => {
    this.setIsLock(true);
    const delay = !this.isNotAnimate ? this._params?.delay ?? 250 : 0;

    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    this._timeout = setTimeout(() => {
      this.setIsLock(false);
      this.setIsVisible(false);
    }, delay);
  };

  showDialog = (): void => {
    this.setIsVisible(true);
  };

  hideDialog = (withoutLock?: boolean): void => {
    const { isVisible, isLock } = this.state;

    if (!isVisible || isLock) {
      return;
    }

    if (withoutLock) {
      this.setIsVisible(false);
    } else {
      this.lockDialog();
    }
  };

  get isDialogHidden(): boolean {
    return !this.state.isLock && !this.state.isVisible;
  }

  get isNotAnimate(): boolean {
    return !!this._params?.isNotAnimate;
  }

  get isOutsideClick(): boolean {
    return !!this._params?.isOutsideClick;
  }
}
