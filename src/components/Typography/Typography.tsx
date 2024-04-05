import { HTMLAttributes, PropsWithChildren } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

export const TypographyVariants = cva(`font-normal`, {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      base: '',
    },
    size: {
      '3xl': 'text-[60px] leading-[65px]',
      '2xl': 'text-[48px] leading-[58px]',
      xl: 'text-[24px] leading-[28.44px]',
      lg: 'text-[21px] leading-[32px]',
      md: 'text-[19px] leading-[32px]',
      normal: 'text-[17px] leading-[29px]',
      sm: 'text-[15px] leading-[26px]',
      xs: 'text-[13px] leading-[15.72px] tracking-[1.63px]',
    },
    weight: {
      light: 'font-light',
      base: 'font-normal',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'normal',
    weight: 'light',
  },
});

interface Props
  extends PropsWithChildren<
      HTMLAttributes<
        HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
      >
    >,
    VariantProps<typeof TypographyVariants> {
  as?: ComponentType;
}

const Typography = ({
  as,
  variant,
  size,
  weight,
  children,
  className,
  ...props
}: Props) => {
  const Component = as || 'p';
  return (
    <Component
      className={cn(TypographyVariants({ variant, size, weight }), className)}
      {...props}
    >
      {children && children}
    </Component>
  );
};

export default Typography;
