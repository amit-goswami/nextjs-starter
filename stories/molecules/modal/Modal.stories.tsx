import { Modal } from '@/components/molecules/modal'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'molecules/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = (args: {
  isOpen: boolean
  title: string
  content: string
  onClose: () => void
}) => {
  return <Modal {...args} />
}

Default.args = {
  isOpen: true,
  title: 'Sample Modal Title',
  content: 'Sample Modal Content',
  onClose: () => console.log('Modal closed')
}
