import classNames from 'classnames';
import type { HTMLAttributes } from 'react';
import { useDesignProps } from '@/components/hooks/useDesignProps';
import type { BorderRadius, BoxShadow, ObjectFit, Responsive } from '@/lib/types';
import styles from './Image.module.css';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  objectFit?: ObjectFit;
  isCentered?: boolean;
  borderRadius?: Responsive<BorderRadius>;
  shadow?: Responsive<BoxShadow>;
}

export function Image({
  src,
  alt,
  objectFit,
  isCentered,
  borderRadius,
  shadow,
  className,
  style,
  ...props
}: ImageProps) {
  const [classes, styleProps] = useDesignProps({ borderRadius, shadow });

  return (
    <img
      {...props}
      className={classNames(
        styles.image,
        className,
        classes,
        objectFit && styles[objectFit],
        objectFit && styles.fit,
        isCentered && styles.centered,
      )}
      style={{ ...style, ...styleProps }}
      src={src}
      alt={alt}
    />
  );
}
