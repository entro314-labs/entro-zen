import classNames from 'classnames';
import type { FontSize, FontWeight, LetterSpacing, Responsive, TextAlign } from '@/lib/types';
import { Box, type BoxProps } from './Box';
import styles from './Heading.module.css';
import { useDesignProps } from './hooks/useDesignProps';

interface HeadingProps extends BoxProps {
  size?: Responsive<FontSize>;
  weight?: Responsive<FontWeight>;
  spacing?: Responsive<LetterSpacing>;
  align?: Responsive<TextAlign>;
}

function Heading({
  size = '3',
  weight,
  align,
  spacing = '1',
  className,
  style,
  children,
  ...props
}: HeadingProps) {
  const [classes, styleProps] = useDesignProps({
    headingSize: size,
    textAlign: align,
    fontWeight: weight,
    letterSpacing: spacing,
  });

  return (
    <Box
      {...props}
      className={classNames(styles.heading, className, classes)}
      style={{ ...styleProps, ...style }}
    >
      {children}
    </Box>
  );
}

export { Heading };
export type { HeadingProps };
