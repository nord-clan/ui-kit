import { useEffect, useMemo, useRef } from 'react';
import { IControlStoreComponents } from '../components/stores/control.store';
import { getId, TControllerRef } from '.';

//* ---- MobX store helpers ------------------------------ * //

export const useNewStore = <T, P>(
  Store: new (args: P) => T,
  args: P = {} as P,
  dependencies: [] = [],
): T => useMemo(() => new Store(args), dependencies);

export const useGetController = <T>(store: { controller: T }): TControllerRef<T> => {
  const controller = useRef<T>();
  controller.current = store.controller;
  return controller;
};

export const setController = <T>(
  store: { controller: T },
  controllerRef?: TControllerRef<T>,
): T => {
  const { controller } = store;
  return controllerRef === undefined ? controller : (controllerRef.current = controller);
};

export const useMemorizeNewStore = <TStore, TDependencies>(
  store: TStore,
  dependencies: TDependencies[] = [],
): TStore => useMemo(() => store, dependencies);

export const useSetComponentId = <T extends { components: IControlStoreComponents }>(
  store: T,
  dependencies: unknown[] = [],
): TControllerRef<string> => {
  const id = useRef<string>(getId());

  useEffect(() => {
    store.components.add(id.current);
    return () => {
      store.components.remove(id.current);
    };
  }, dependencies);

  return id;
};
