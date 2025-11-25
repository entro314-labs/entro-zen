import classNames from 'classnames';
import {
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
} from 'react-aria-components';
import styles from './Popover.module.css';

export interface PopoverProps extends AriaPopoverProps {
  isFullscreen?: boolean;
}

export function Popover({ children, isFullscreen, className, ...props }: PopoverProps) {
  return (
    <AriaPopover
      {...props}
      className={classNames(styles.popover, isFullscreen && styles.fullscreen, className)}
    >
      {children as any}
    </AriaPopover>
  );
}
