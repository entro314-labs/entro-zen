import classNames from 'classnames';
import type { ReactNode } from 'react';
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
  type ModalRenderProps,
} from 'react-aria-components';
import styles from './Modal.module.css';

interface ModalProps extends AriaModalOverlayProps {
  placement?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
  offset?: string;
  children?: ReactNode | ((values: ModalRenderProps & { defaultChildren: ReactNode }) => ReactNode);
}

function Modal({
  placement = 'center',
  offset,
  children,
  className,
  style = {},
  ...props
}: ModalProps) {
  if (offset) {
    // @ts-expect-error
    style[`--modal-offset`] = offset;
  }

  return (
    <AriaModalOverlay {...props} className={styles.overlay} style={style} isDismissable>
      <AriaModal className={classNames(styles.modal, placement && styles[placement], className)}>
        {children}
      </AriaModal>
    </AriaModalOverlay>
  );
}

export { Modal };
export type { ModalProps };
