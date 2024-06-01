import { Container } from '@/components/atoms/container'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  title: 'atoms/Container',
  component: Container,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    id: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: 'This is a container',
    className: 'p-4 border rounded',
    style: { backgroundColor: '#f0f0f0' }
  }
}
