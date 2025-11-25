import classNames from 'classnames';
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from 'react-aria-components';
import styles from './Label.module.css';

interface LabelProps extends AriaLabelProps {
  className?: string;
}

function Label({ className, ...props }: LabelProps) {
  return <AriaLabel {...props} className={classNames(styles.label, className)} />;
}

export { Label };
export type { LabelProps };
