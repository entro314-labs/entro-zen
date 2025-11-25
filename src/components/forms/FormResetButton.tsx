'use client';

import type { PressEvent } from 'react-aria-components';
import { type FieldValues, useFormContext } from 'react-hook-form';
import { Button, type ButtonProps } from '../Button';

interface FormResetButtonProps extends ButtonProps {
  values?: FieldValues | { [p: string]: any };
}

function FormResetButton({ values = {}, children, onPress, ...props }: FormResetButtonProps) {
  const { reset } = useFormContext();

  const handleReset = (e: PressEvent) => {
    reset(values);
    onPress?.(e);
  };

  return (
    <Button {...props} type="reset" onPress={handleReset}>
      {children}
    </Button>
  );
}

export { FormResetButton };
export type { FormResetButtonProps };
