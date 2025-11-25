import classNames from 'classnames';
import {
  type AlignContent,
  type AlignItems,
  type FlexDirection,
  type FlexDisplay,
  type FlexWrap,
  type Gap,
  type JustifyContent,
  type JustifyItems,
  type Responsive,
  Spacing,
} from '@/lib/types';
import { Box, type BoxProps } from './Box';
import { useDesignProps } from './hooks/useDesignProps';

export interface FlexboxProps extends Omit<BoxProps, 'display' | 'gap'> {
  display?: Responsive<FlexDisplay>;
  direction?: Responsive<FlexDirection>;
  wrap?: Responsive<FlexWrap>;
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  gap?: Responsive<Gap>;
  gapX?: Responsive<Gap>;
  gapY?: Responsive<Gap>;
}

export function Flexbox({
  display = 'flex',
  direction,
  wrap,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  gapX,
  gapY,
  className,
  style,
  children,
  ...props
}: FlexboxProps) {
  const [classes, styleProps] = useDesignProps({
    display,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    gap,
    gapX,
    gapY,
  });

  return (
    <Box {...props} className={classNames(className, classes)} style={{ ...styleProps, ...style }}>
      {children}
    </Box>
  );
}
