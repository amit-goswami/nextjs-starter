import '@testing-library/jest-dom'
import { Table } from '@/components/organisms/table'
import { render, screen } from '@testing-library/react'

interface IColumn {
  key: string
  title: string
}

interface IRowData {
  id: number
  name: string
  age: number
  email: string
}

const columns: IColumn[] = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
  { key: 'email', title: 'Email' }
]

const rowData: IRowData[] = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', age: 45, email: 'mike@example.com' }
]

const emptyRowData: IRowData[] = []

const mockHandlePageChange = jest.fn()
const mockHandlePageLimitChange = jest.fn()

const renderTable = (data = rowData) => {
  render(
    <Table
      column={columns}
      rowData={data}
      page={1}
      pageLimit={10}
      rowsPerPageOptions={[5, 10, 20]}
      isNextPagebuttonDisabled={false}
      handlePageChange={mockHandlePageChange}
      handlePageLimitChange={mockHandlePageLimitChange}
    />
  )
}

beforeEach(() => {
  mockHandlePageChange.mockClear()
  mockHandlePageLimitChange.mockClear()
})

describe('Table Component', () => {
  it('renders table with data', () => {
    renderTable()

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
  })

  it('renders empty data message', () => {
    renderTable(emptyRowData)
    expect(screen.getByText('Oops! No Results Found')).toBeInTheDocument()
  })
})
