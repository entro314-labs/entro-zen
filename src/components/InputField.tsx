import classNames from 'classnames';
import type { ReactNode } from 'react';
import { Box, type BoxProps } from './Box';
import styles from './InputField.module.css';
import { Label } from './Label';
import { Slot } from './Slot';

export interface InputFieldProps extends BoxProps {
  label?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}

export function InputField({
  label,
  isReadOnly,
  isDisabled,
  className,
  children,
  ...props
}: InputFieldProps) {
  return (
    <Box>
      {label && <Label>{label}</Label>}
      <Slot
        {...props}
        className={classNames(
          styles.field,
          isReadOnly && styles.readonly,
          isDisabled && styles.disabled,
          className,
        )}
      >
        {children}
      </Slot>
    </Box>
  );
}
