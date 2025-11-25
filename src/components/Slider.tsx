import classNames from 'classnames';
import type { ReactNode } from 'react';
import {
  Slider as AriaSlider,
  type SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import { Label } from './Label';
import styles from './Slider.module.css';

export interface SliderProps extends AriaSliderProps {
  label?: ReactNode;
  showValue?: boolean;
}

export function Slider({ className, showValue = true, label, ...props }: SliderProps) {
  return (
    <AriaSlider {...props} className={classNames(styles.slider, className)}>
      <div className={styles.header}>
        {label && <Label className={styles.label}>{label}</Label>}
        {showValue && <SliderOutput className={styles.output} />}
      </div>
      <SliderTrack className={styles.track}>
        {({ state }) => {
          const isHorizontal = state.orientation === 'horizontal';
          return (
            <>
              <div
                className={styles.fill}
                style={{
                  [isHorizontal ? 'width' : 'height']:
                    (isHorizontal ? state.getThumbPercent(0) : 1 - state.getThumbPercent(0)) * 100 +
                    '%',
                }}
              />
              <SliderThumb className={styles.thumb} />
            </>
          );
        }}
      </SliderTrack>
    </AriaSlider>
  );
}
