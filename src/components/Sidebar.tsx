import classNames from 'classnames';
import { createContext, type ReactNode, useContext } from 'react';
import { Focusable, TooltipTrigger } from 'react-aria-components';
import { Column, type ColumnProps } from '@/components/Column';
import { Icon } from '@/components/Icon';
import { Row, type RowProps } from '@/components/Row';
import { Text } from '@/components/Text';
import { Tooltip } from '@/components/Tooltip';
import styles from './Sidebar.module.css';

export interface SidebarProps extends ColumnProps {
  itemBackgroundColor?: string;
  isCollapsed?: boolean;
  muteItems?: boolean;
  children?: ReactNode;
}

const SidebarContext = createContext(null as any);

export function Sidebar({
  itemBackgroundColor = '2',
  isCollapsed,
  muteItems,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <SidebarContext.Provider value={{ isCollapsed, itemBackgroundColor }}>
      <Column
        border="right"
        {...props}
        className={classNames(
          styles.sidebar,
          isCollapsed && styles.collapsed,
          muteItems && styles.muted,
          className,
        )}
      >
        {children}
      </Column>
    </SidebarContext.Provider>
  );
}

export function SidebarSection({
  title,
  className,
  children,
  ...props
}: { title?: string; children: ReactNode } & ColumnProps) {
  return (
    <Column {...props} className={classNames(styles.section, className)}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </Column>
  );
}

export function SidebarHeader({
  label,
  icon,
  className,
  children,
  ...props
}: {
  label: string;
  icon?: ReactNode;
  children?: ReactNode;
} & RowProps) {
  return (
    <Row {...props} className={classNames(styles.header, className)}>
      {icon && <Icon size="sm">{icon}</Icon>}
      {label && <div className={styles.label}>{label}</div>}
      {children}
    </Row>
  );
}

export interface SidebarItemProps extends RowProps {
  isSelected?: boolean;
}

export function SidebarItem({
  label,
  icon,
  isSelected,
  className,
  children,
  ...props
}: {
  label?: string;
  icon?: ReactNode;
} & SidebarItemProps) {
  const { isCollapsed, itemBackgroundColor } = useContext(SidebarContext);

  return (
    <TooltipTrigger delay={0} closeDelay={0} isDisabled={!isCollapsed}>
      <Focusable>
        <Row
          {...props}
          backgroundColor={isSelected && itemBackgroundColor}
          hoverBackgroundColor={itemBackgroundColor}
          className={classNames(styles.item, className, isSelected && styles.selected)}
        >
          {icon && <Icon size="sm">{icon}</Icon>}
          {label && <Text className={classNames(styles.label)}>{label}</Text>}
          {children}
        </Row>
      </Focusable>
      <Tooltip placement="right">{label}</Tooltip>
    </TooltipTrigger>
  );
}
