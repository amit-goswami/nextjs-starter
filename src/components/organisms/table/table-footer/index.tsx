import { useState } from 'react'

enum PAGE_DIRECTION {
  Increment = 'Increment',
  Decrement = 'Decrement'
}

interface ITableFooter {
  page: number
  pageLimit: number
  perPageOptions: number[]
  isNextPagebuttonDisabled: boolean
  handlePageChange: (page: string) => void
  handlePageLimitChange: (pageLimit: number) => void
}

export const TableFooter = ({
  page,
  pageLimit,
  perPageOptions,
  isNextPagebuttonDisabled,
  handlePageChange,
  handlePageLimitChange
}: ITableFooter) => {
  const [rowsPerPageOptions] = useState(perPageOptions)

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10)
    handlePageLimitChange(selectedValue)
  }

  return (
    <tfoot>
      <tr>
        <td>View</td>
        <td>
          <select value={pageLimit} onChange={handleOptionChange}>
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </td>
        <td>per page</td>
      </tr>
      <tr>
        <td>Page</td>
        <td
          onClick={() => handlePageChange(PAGE_DIRECTION.Decrement)}
          style={{ cursor: 'pointer' }}
        >
          {'<'}
        </td>
        <td>{page}</td>
        <td
          onClick={() =>
            isNextPagebuttonDisabled &&
            handlePageChange(PAGE_DIRECTION.Increment)
          }
          style={{ cursor: 'pointer' }}
        >
          {'>'}
        </td>
      </tr>
    </tfoot>
  )
}
