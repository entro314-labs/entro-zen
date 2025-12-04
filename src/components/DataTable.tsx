import classNames from 'classnames';
import {
  Children,
  createElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import type { TableProps } from 'react-aria-components';
import { DataCard } from '@/components/DataCard';
import { Grid } from '@/components/Grid';
import styles from './DataTable.module.css';
import {
  Table,
  TableBody,
  TableCell,
  type TableCellProps,
  TableColumn,
  TableHeader,
  TableRow,
} from './Table';

export interface DataTableProps extends TableProps {
  data?: any[];
  rowKey?: string | ((row: any, index: number) => string);
  displayMode?: 'table' | 'cards';
}

export function DataTable({
  data = [],
  displayMode = 'table',
  className,
  children,
  rowKey,
  ...props
}: DataTableProps) {
  // Ensure data is always an array before processing
  const safeData = Array.isArray(data) ? data : [];

  // We must map an id for react-aria
  // Check if items need IDs - either array is empty or first item lacks a valid id
  const items =
    safeData.length === 0 || !safeData[0]?.id
      ? safeData.map((row, id) => ({ ...row, id }))
      : safeData;

  const widths: string[] = [];

  const columns = Children.map(children as ReactElement, (child?: ReactElement<any, any>) => {
    if (child) {
      widths.push(child?.props?.width || '1fr');

      return { ...(child?.props as DataColumnProps) };
    }
    return null;
  })?.filter(n => n);

  const gridTemplateColumns = widths.join(' ');

  if (displayMode === 'cards') {
    return (
      <Grid gap="6" width="100%">
        {items.map((row, index) => {
          const cardData = columns
            ?.filter(({ hidden }) => !hidden)
            .map(({ id, label, children }) => {
              const value =
                typeof children === 'function' ? children(row, index) : (children ?? row[id]);

              return { id, label, value };
            });

          return <DataCard key={row.id} data={cardData} />;
        })}
      </Grid>
    );
  }

  return (
    <Table {...props} className={classNames(styles.datatable, className)}>
      <TableHeader style={{ gridTemplateColumns }}>
        {columns?.map(({ id, label, as, hidden, width, ...columnProps }) => {
          if (hidden) {
            return null;
          }

          return (
            <TableColumn {...columnProps} key={id} id={id}>
              {label}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody>
        {items.map((row, index) => {
          // Generate a proper key for the row
          let key: string;

          try {
            if (rowKey) {
              if (typeof rowKey === 'function') {
                key = rowKey(row, index); // Also pass index to function for fallback
              } else {
                key = row?.[rowKey]; // Safe property access
              }
              // Fallback if key is null/undefined
              if (!key || key === 'undefined' || key === 'null') {
                console.warn('DataTable: rowKey returned invalid value for row:', row);
                key = `fallback-${index}-${Date.now()}`;
              }
            } else {
              key = row?.id || `item-${index}`;
            }

            // Ensure key is always a string
            key = String(key);
          } catch (error) {
            console.error('DataTable: Error generating row key:', error);
            key = `error-fallback-${index}-${Date.now()}`;
          }

          return (
            <TableRow key={key} style={{ gridTemplateColumns }}>
              {columns?.map(({ id, as, hidden, className, children, ...cellProps }) => {
                if (hidden) {
                  return null;
                }

                const value =
                  typeof children === 'function' ? children(row, index) : children || row[id];

                return (
                  <TableCell
                    {...(cellProps as TableCellProps)}
                    key={id}
                    className={classNames(styles.cell, className)}
                  >
                    {as ? createElement(as, {}, value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export interface DataColumnProps extends Omit<HTMLAttributes<any>, 'children'> {
  id: string;
  label?: ReactNode;
  align?: 'start' | 'center' | 'end';
  width?: string;
  as?: string;
  hidden?: boolean;
  children?: ReactNode | ((row: any, index: number) => void);
}

export function DataColumn(_props: DataColumnProps) {
  return null;
}
