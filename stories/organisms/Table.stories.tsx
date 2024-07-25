import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table } from '@/components/organisms/table'

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

const meta: Meta = {
  title: 'organisms/Table',
  component: Table,
  argTypes: {
    rowData: { control: 'object' },
    page: { control: 'number' },
    pageLimit: { control: 'number' },
    rowsPerPageOptions: { control: 'object' },
    isNextPagebuttonDisabled: { control: 'boolean' }
  }
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = (args: {
  column: IColumn[]
  rowData: IRowData[]
  page: number
  pageLimit: number
  rowsPerPageOptions: number[]
  isNextPagebuttonDisabled: boolean
  handlePageChange: (page: string) => void
  handlePageLimitChange: (pageLimit: number) => void
}) => {
  return <Table {...args} />
}

Default.args = {
  column: [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'email', title: 'Email' }
  ],
  rowData: [
    { id: 1, name: 'John Doe', age: 30, email: 'johnDoe@gmail.com' },
    { id: 2, name: 'Jane Doe', age: 25, email: 'janeDoe@gmail.com' },
    {
      id: 3,
      name: 'Joke Doe',
      age: 30,
      email: 'jakeDoe@gmail.com'
    }
  ] as IRowData[],
  page: 1,
  pageLimit: 10,
  rowsPerPageOptions: [5, 10, 20],
  isNextPagebuttonDisabled: false,
  handlePageChange: (page) => console.log(page),
  handlePageLimitChange: (pageLimit) => console.log(pageLimit)
}
