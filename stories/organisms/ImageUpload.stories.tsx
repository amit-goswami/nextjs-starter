import { FileUpload } from '@/components/organisms/image-upload'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'organisms/FileUpload',
  component: FileUpload,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    labelRequired: { control: 'boolean' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    maxSize: { control: 'number' },
    btnLabel: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof FileUpload>

export const Default: Story = (args: {
  name: string
  label: string
  labelRequired: boolean
  className: string
  disabled: boolean
  maxSize: number
  btnLabel: string
}) => {
  return <FileUpload {...args} />
}

Default.args = {
  label: 'Upload File',
  btnLabel: 'Choose File'
}
