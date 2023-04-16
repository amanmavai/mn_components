import cn from "classnames";
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className, children, ...rest }: ButtonProps){
  return (
    <button className={cn("tw-btn", className)} {...rest}>
      {children}
    </button>
  );
};