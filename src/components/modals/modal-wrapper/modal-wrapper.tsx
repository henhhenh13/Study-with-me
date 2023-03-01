import clsx from 'clsx';
import React, { type HTMLAttributes, type PropsWithChildren } from 'react';

import {
  ModalTransitionWrapper,
  type ModalTransitionWrapperProps,
} from './modal-transition-wrapper';

interface ModalWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    ModalTransitionWrapperProps {
  size?: string;
  customSize?: string;
  isIconCloseVisible?: boolean;
}

export interface ModalBaseProps {
  isShow?: ModalTransitionWrapperProps['isShow'];
  isDisabled?: boolean;
  isLoading?: boolean;
  isIconCloseVisible?: boolean;
  onCancel: ModalTransitionWrapperProps['close'];
  onAfterCancel: ModalTransitionWrapperProps['onAfterClose'];
}

const sizeObj: Record<string, string> = {
  md: 'min-w-[420px] max-w-[420px]',
  lg: 'min-w-[600px] max-w-[600px]',
};

export const ModalWrapper = ({
  isShow,
  isIconCloseVisible = true,
  size = 'md',
  className,
  customSize,
  close,
  onAfterClose,
  children,
  ...props
}: PropsWithChildren<ModalWrapperProps>): React.ReactElement => {
  return (
    <ModalTransitionWrapper
      onAfterClose={onAfterClose}
      close={close}
      isShow={isShow}
    >
      <div
        className={clsx(
          'bg-white transform overflow-hidden rounded-xl text-left align-middle shadow-xl transition-all',
          customSize !== undefined ? customSize : sizeObj[size],
          className,
        )}
        {...props}
        data-testid="modal-wrapper-inner"
      >
        {children}
      </div>
    </ModalTransitionWrapper>
  );
};
