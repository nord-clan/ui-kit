//* - helpers - *//
export { Size, TControllerRef, getId, setupFormStores } from './helpers';
export { shadeColor } from './helpers/shade-color';
export {
  setController,
  useGetController,
  useMemorizeNewStore,
  useNewStore,
  useSetComponentId,
} from './helpers/stores';

//* - form - *//
export { Form } from './components/form/form';
export { FormStore } from './components/form/form.store';

//* - search - *//
export { Search } from './components/search/search';
export { SearchStore } from './components/search/search.store';

//* - dialog - *//
export { Dialog,IDialogProps} from './components/dialog/dialog';
export { BaseDialogStore,IBaseDialogStoreParams } from './components/dialog/dialog.store';

//* - stores - *//
export {
  BaseStore,
  IBaseParams,
  IBaseState,
  IBaseStoreParams,
  IBaseValidator,
  IBaseValidatorExtended,
  IValidationErrors,
} from './helpers/base.store';
export {
  ControlStore,
  IControlStoreComponents,
  IControlStoreParams,
  IControlValidator,
} from './helpers/control.store';
