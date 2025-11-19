import classNames from 'classnames';
import { Box, type BoxProps } from './Box';
import { Dots } from './Dots';
import { Spinner } from './Spinner';
import styles from './Loading.module.css';

export interface LoadingProps extends Omit<BoxProps, 'position'> {
  size?: 'sm' | 'md' | 'lg';
  icon?: 'dots' | 'spinner';
  position?: 'page' | 'center' | 'inline';
  className?: string;
}

export function Loading(props: LoadingProps) {
  const { size, position = 'inline', icon = 'spinner', className, ...domProps } = props;
  return (
    <Box {...domProps} className={classNames(styles.loading, className, styles[position])}>
      {icon === 'dots' && <Dots size={size} />}
      {icon === 'spinner' && <Spinner size={size} />}
    </Box>
  );
}
