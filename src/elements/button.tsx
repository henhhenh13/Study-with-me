import clsx from 'clsx';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'danger' | 'common' | 'normally';
  variants: 'background' | 'text';
}

const transition = ' transition-all duration-200';

const textButtonClassNames = {
  primary:
    'text-blue-500 hover:text-blue-600 active:text-blue-700 hover:underline' +
    transition,
  danger: 'hover:text-red-500 active:text-red-600 hover:underline' + transition,
  normally: 'bg-gray-300 hover:bg-gray-400 active:bg-gray-500' + transition,
  common: 'hover:underline' + transition,
};

const bgButtonClassNames = {
  primary:
    'hover:bg-blue-600 active:bg-blue-700 bg-blue-500 text-white rounded-lg disabled:!bg-blue-200' +
    transition,
  danger: 'hover:text-red-500 hover:underline' + transition,
  normally:
    'bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded-lg' + transition,
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
        'disabled:cursor-not-allowed flex items-center justify-center',
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
