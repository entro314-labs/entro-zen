import classNames from 'classnames';
import { type ChangeEvent, type ReactNode, useState } from 'react';
import { AlertDialog, type AlertDialogProps } from './AlertDialog';
import styles from './ConfirmationDialog.module.css';
import { Text } from './Text';
import { TextField } from './TextField';

interface ConfirmationDialogProps extends AlertDialogProps {
  value: string;
  confirmMessage?: ReactNode;
}

function ConfirmationDialog({
  value,
  confirmMessage,
  className,
  children,
  ...props
}: ConfirmationDialogProps) {
  const [canSave, setCanSave] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCanSave(e.target.value === value);
  };

  return (
    <AlertDialog
      {...props}
      className={classNames(styles.dialog, className)}
      isConfirmDisabled={!canSave}
    >
      {({ close }) => {
        return (
          <>
            {typeof children === 'function' ? children({ close }) : children}
            <Text>{confirmMessage || 'Type the following value to confirm'}:</Text>
            <div className={styles.value}>{value}</div>
            <TextField autoFocus={true} aria-label="Confirmation" onChange={handleChange} />
          </>
        );
      }}
    </AlertDialog>
  );
}

export { ConfirmationDialog };
export type { ConfirmationDialogProps };
