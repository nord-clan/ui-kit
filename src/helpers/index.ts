import type { ControlStore } from '../components/control.store';
import type { FormStore } from '../components/form/form.store';
import type { MutableRefObject } from 'react';
import { v4 } from 'uuid';

export type TControllerRef<T> = MutableRefObject<T | undefined>;
export type Size = 's' | 'm' | 'l';
export const getId = (): string => {
  let uuid = v4();
  const possible = 'abcdef';
  uuid = uuid.replace(uuid.charAt(0), possible.charAt(Math.floor(Math.random() * possible.length)));
  return uuid;
};

export const setupFormStores = (stores: unknown[], form: FormStore): void => {
  stores.forEach((store) => form.addStore(store as ControlStore<unknown>));
};
