import React from 'react'
import { TableHeader } from './table-header'
import { TableBody } from './table-body'
import { TableFooter } from './table-footer'

interface ITableComponentProps<T, V> {
  column: T[]
  rowData: V[]
  page: number
  pageLimit: number
  rowsPerPageOptions: number[]
  isNextPagebuttonDisabled: boolean
  handlePageChange: (page: string) => void
  handlePageLimitChange: (pageLimit: number) => void
}

export const Table = <
  T extends { key: string; title: string },
  V extends { id: number }
>({
  column,
  rowData,
  page,
  pageLimit,
  rowsPerPageOptions,
  isNextPagebuttonDisabled,
  handlePageChange,
  handlePageLimitChange
}: ITableComponentProps<T, V>) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHeader column={column} />
      <TableBody column={column} rows={rowData} />
      <TableFooter
        page={page}
        pageLimit={pageLimit}
        perPageOptions={rowsPerPageOptions}
        isNextPagebuttonDisabled={isNextPagebuttonDisabled}
        handlePageChange={handlePageChange}
        handlePageLimitChange={handlePageLimitChange}
      />
    </table>
  )
}
