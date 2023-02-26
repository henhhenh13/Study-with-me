import React, { type HTMLAttributes, type PropsWithChildren } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variants: 'primary' | 'danger'
}

export const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>): React.ReactElement => {
  return <button {...props}>{children}</button>
}
