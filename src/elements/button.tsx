import clsx from 'clsx';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'danger' | 'common';
  variants: 'background' | 'text';
}

const transition = ' transition-all duration-200';

const textButtonClassNames = {
  primary:
    'hover:text-blue-500 active:text-blue-600 hover:underline' + transition,
  danger: 'hover:text-red-500 active:text-red-600 hover:underline' + transition,
  common: 'hover:underline' + transition,
};

const bgButtonClassNames = {
  primary: 'hover:bg-blue-600 active:bg-blue-700' + transition,
  danger: 'hover:text-red-500 hover:underline' + transition,
  common: 'hover:underline' + transition,
};

export const Button = ({
  variants,
  color,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>): React.ReactElement => {
  return (
    <button
      className={clsx(
        'disabled:cursor-not-allowed flex items-center',
        variants === 'background'
          ? bgButtonClassNames[color]
          : textButtonClassNames[color],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
