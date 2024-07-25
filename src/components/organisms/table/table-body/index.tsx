import { EmptyData } from '../empty-data'
import { TableCell } from '../table-cell'

interface ITableCellProps<T, V> {
  column: T[]
  rows: V[]
}

export const TableBody = <
  T extends { key: string; title: string },
  V extends { id: string | number }
>({
  column,
  rows
}: ITableCellProps<T, V>) => {
  if (rows.length === 0) {
    return <EmptyData column={column} />
  }
  return (
    <tbody>
      {rows.map((row: V, index) => (
        <tr key={row.id.toString()}>
          {column.map((col: T) => (
            <TableCell
              key={`${col.key}-${row.id}`}
              col={col}
              rowId={row.id.toString()}
              rowData={row}
              index={index}
            />
          ))}
        </tr>
      ))}
    </tbody>
  )
}
