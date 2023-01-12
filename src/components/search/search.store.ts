import type { IControlStoreParams } from '../stores/control.store';
import { ControlStore } from '../stores/control.store';

export interface ISearchStoreParams extends IControlStoreParams<boolean> {
  className?: string;
}

export class SearchStore extends ControlStore<boolean> {
  constructor(params: ISearchStoreParams) {
    super(params);

    this.setValue(params.defaultValue || false);
  }

  show = (): void => this.setIsVisible(true);

  hide = (): void => this.setIsVisible(false);
}
