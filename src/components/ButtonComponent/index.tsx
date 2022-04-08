import React, { ButtonHTMLAttributes } from "react";

import { Button } from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <Button {...rest }>
    { children }
  </Button>
)

export { ButtonComponent }