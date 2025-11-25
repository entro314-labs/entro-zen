import classNames from 'classnames';
import type { HTMLAttributes } from 'react';
import { useDesignProps } from '@/components/hooks/useDesignProps';
import type { FillColor, FontColor, StrokeColor } from '@/lib/types';
import styles from './Icon.module.css';
import { Slot } from './Slot';

export interface IconProps extends Omit<HTMLAttributes<HTMLElement>, 'color' | 'size'> {
  color?: FontColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'input';
  rotate?: number;
  strokeWidth?: string;
  strokeColor?: StrokeColor;
  fillColor?: FillColor;
}

export function Icon({
  color,
  size = 'sm',
  variant,
  rotate,
  strokeWidth,
  strokeColor,
  fillColor,
  style,
  className,
  children,
  ...props
}: IconProps) {
  const [classes, styleProps] = useDesignProps({
    strokeColor,
    fillColor,
    color,
  });

  return (
    <Slot
      {...props}
      className={classNames(styles.icon, className, classes, size && styles[size])}
      style={{
        ...styleProps,
        ...style,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        strokeWidth: strokeWidth,
      }}
    >
      {children}
    </Slot>
  );
}
