import React from 'react'

interface ITableHeader<T> {
  column: T[]
}

export const TableHeader = <T extends { key: string; title: string }>({
  column
}: ITableHeader<T>) => {
  return (
    <thead>
      <tr>
        {column.map((i) => (
          <td key={i.key}>{i.title}</td>
        ))}
      </tr>
    </thead>
  )
}
