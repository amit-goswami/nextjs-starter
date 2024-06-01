import { Button } from '@/components/atoms/button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    btnText: { control: 'text' },
    className: { control: 'text' },
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    btnText: 'Button',
    className:
      'rounded-full px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-700'
  }
}
