interface RenderProps {
  rowData: Record<string, string | number>
  col: { key: string; render?: (renderProps: RenderProps) => JSX.Element }
}

interface ITableCell<T, V> {
  col: T
  index: number
  rowId: string | number
  rowData: Record<string, string | number>
}

export const TableCell = <
  T extends { key: string; render?: (renderProps: RenderProps) => JSX.Element },
  V extends { id: string | number }
>({
  col,
  rowId,
  rowData,
  index
}: ITableCell<T, V>) => {
  if (col.render) {
    const RenderComponent = col.render
    return (
      <td key={`${col.key}-${rowId}`}>
        <RenderComponent col={col} rowData={rowData} />
      </td>
    )
  }
  if (col.key === 'sNo') {
    return <td key={index}>{index + 1}</td>
  }
  return <td key={`${col.key}-${rowId}`}>{rowData[col.key]}</td>
}
