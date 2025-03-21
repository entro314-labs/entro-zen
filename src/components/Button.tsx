import { forwardRef, ReactNode, Ref } from 'react';
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Slot } from './Slot';
import styles from './Button.module.css';

interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'danger' | 'zero';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  slot?: string;
  children?: ReactNode;
}

const Button = forwardRef(
  (
    {
      variant = 'secondary',
      size = 'md',
      asChild,
      preventFocusOnPress = true,
      className,
      children,
      ...props
    }: ButtonProps,
    ref: Ref<any>,
  ) => {
    const Component = asChild ? Slot : AriaButton;
    const buttonProps = Component === AriaButton ? { preventFocusOnPress } : undefined;

    return (
      <Component
        {...props}
        {...buttonProps}
        ref={ref}
        className={classNames(
          styles.button,
          className,
          variant && styles[variant],
          size && styles[size],
        )}
      >
        {children as ReactNode}
      </Component>
    );
  },
);

export { Button };
export type { ButtonProps };
