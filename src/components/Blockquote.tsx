import type { HTMLAttributes } from 'react';
import type { FontWeight, Responsive, TextWrap } from '@/lib/types';
import styles from './Blockquote.module.css';
import { Slot } from './Slot';

export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
}

export function Blockquote({ asChild, children }: BlockquoteProps) {
  const Component = asChild ? Slot : 'blockquote';

  return <Component className={styles.blockquote}>{children}</Component>;
}
