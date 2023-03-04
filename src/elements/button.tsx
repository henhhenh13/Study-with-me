import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'primary' | 'danger' | 'common';
}

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>): React.ReactElement => {
  return <button {...props}>{children}</button>;
};
