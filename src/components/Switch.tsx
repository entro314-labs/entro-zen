import classNames from 'classnames';
import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from 'react-aria-components';
import { Column } from './Column';
import { Label } from './Label';
import styles from './Switch.module.css';

export interface SwitchProps extends AriaSwitchProps {
  label?: string;
}

export function Switch({ label, children, className, ...props }: SwitchProps) {
  return (
    <Column>
      {label && <Label>{label}</Label>}
      <AriaSwitch {...props} className={classNames(styles.switch, className)}>
        <div className={styles.track}>
          <div className={styles.knob} />
        </div>
        {children as any}
      </AriaSwitch>
    </Column>
  );
}
