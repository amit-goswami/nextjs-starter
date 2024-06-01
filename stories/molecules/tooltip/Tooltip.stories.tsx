import { Tooltip } from '@/components/molecules/tooltip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'molecules/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
    position: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] }
    },
    children: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = (args: {
  text: string
  position: 'top' | 'right' | 'bottom' | 'left'
  children: string
}) => {
  return <Tooltip text={args.text}>{args.children}</Tooltip>
}

Default.args = {
  text: 'This is a tooltip',
  position: 'top',
  children: 'Hover me'
}
