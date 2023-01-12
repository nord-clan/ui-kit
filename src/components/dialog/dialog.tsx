/* eslint-disable import/no-cycle */
import type { BaseDialogStore } from './dialog.store';
import type { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import { DialogWrapperStyled } from './dialog.style';
import { useScrollLock } from '#/hooks/use-scroll-lock';

export interface IDialogProps extends PropsWithChildren {
  store: BaseDialogStore;
  className?: string;
}

export const Dialog: FC<IDialogProps> = observer((props) => {
  const { children, store, className } = props;
  const { isDialogHidden, isNotAnimate, isOutsideClick, state, hideDialog } = store;
  const { isLock, isVisible } = state;

  const { switchLock } = useScrollLock();

  observe(state, 'isVisible', ({ newValue }) => switchLock(newValue as boolean));

  return isDialogHidden ? null : (
    <DialogWrapperStyled
      onMouseDown={() => isOutsideClick && hideDialog()}
      isNotAnimate={isNotAnimate}
      isVisible={isVisible}
      isLock={isLock}>
      <div onMouseDown={(e) => e.stopPropagation()} className={cn('dialog', className)}>
        {children}
      </div>
    </DialogWrapperStyled>
  );
});
