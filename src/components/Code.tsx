import type { HTMLAttributes } from 'react';
import type { FontWeight, Responsive, TextWrap } from '@/lib/types';
import styles from './Code.module.css';
import { Slot } from './Slot';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
}

export function Code({ asChild, children }: CodeProps) {
  const Component = asChild ? Slot : 'code';

  return <Component className={styles.code}>{children}</Component>;
}
