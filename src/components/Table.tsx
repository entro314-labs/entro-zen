import classNames from 'classnames';
import {
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  Cell,
  type CellProps,
  Column,
  type ColumnProps,
  Row,
  type RowProps,
  type TableBodyProps,
  type TableHeaderProps,
  type TableProps,
} from 'react-aria-components';
import styles from './Table.module.css';

const gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';

interface TableColumnProps extends ColumnProps {
  align?: 'start' | 'center' | 'end';
}

interface TableCellProps extends CellProps {
  align?: 'start' | 'center' | 'end';
}

function Table({ children, className, ...props }: TableProps) {
  return (
    <AriaTable aria-label="Table" {...props} className={classNames(styles.table, className)}>
      {children}
    </AriaTable>
  );
}

function TableHeader({ children, className, style, ...props }: TableHeaderProps<any>) {
  return (
    <AriaTableHeader
      {...props}
      className={classNames(styles.header, className)}
      style={{ gridTemplateColumns, ...style }}
    >
      {children}
    </AriaTableHeader>
  );
}

function TableBody({ children, className, ...props }: TableBodyProps<any>) {
  return (
    <AriaTableBody {...props} className={classNames(styles.body, className)}>
      {children}
    </AriaTableBody>
  );
}

function TableRow({ children, className, style, ...props }: RowProps<any>) {
  return (
    <Row
      {...props}
      className={classNames(styles.row, className)}
      style={{ gridTemplateColumns, ...style }}
    >
      {children}
    </Row>
  );
}

function TableColumn({ children, className, align, ...props }: TableColumnProps) {
  return (
    <Column
      {...props}
      className={classNames(styles.column, className, align && styles[align])}
      isRowHeader
    >
      {children}
    </Column>
  );
}

function TableCell({ children, className, align, ...props }: TableCellProps) {
  return (
    <Cell {...props} className={classNames(styles.cell, className, align && styles[align])}>
      {children}
    </Cell>
  );
}

export { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell };
export type { TableCellProps, TableColumnProps, TableBodyProps };
