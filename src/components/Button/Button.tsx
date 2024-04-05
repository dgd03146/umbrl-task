import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

export const ButtonVariants = cva(
  `flex justify-center items-center rounded-lg`,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-primary',
      },
      size: {
        base: 'w-[124px] h-[50px]',
        lg: 'w-[205px] h-[59px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
);

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
    VariantProps<typeof ButtonVariants> {
  right?: ReactNode;
}

const Button = ({
  variant,
  size,
  children,
  className,
  right,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children && children}
      {right && right}
    </button>
  );
};

export default Button;
