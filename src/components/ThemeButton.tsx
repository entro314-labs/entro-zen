import { animated, useTransition } from '@react-spring/web';
import classNames from 'classnames';
import type { PressEvent } from 'react-aria-components';
import { Moon, Sun } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { useTheme } from './hooks/useTheme';
import { Icon } from './Icon';
import styles from './ThemeButton.module.css';

export function ThemeButton({ className, variant = 'quiet', onPress, ...props }: ButtonProps) {
  const { theme, setTheme } = useTheme();

  const transitions = useTransition(theme, {
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: `translateY(${theme === 'light' ? '20px' : '-20px'}) scale(0.5)`,
    },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1.0)' },
    leave: {
      opacity: 0,
      transform: `translateY(${theme === 'light' ? '-20px' : '20px'}) scale(0.5)`,
    },
  });

  function handleClick(e: PressEvent) {
    setTheme(theme === 'light' ? 'dark' : 'light');
    onPress?.(e);
  }

  return (
    <Button
      {...props}
      className={classNames(styles.button, className)}
      variant={variant}
      onPress={handleClick}
    >
      {transitions((style, item) => (
        <animated.div key={item} style={style}>
          <Icon size="sm">{item === 'light' ? <Sun /> : <Moon />}</Icon>
        </animated.div>
      ))}
      &nbsp;
    </Button>
  );
}
