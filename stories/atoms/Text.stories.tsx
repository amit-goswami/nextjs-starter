import { Text } from '@/components/atoms/text'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Text> = {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    as: {
      control: {
        type: 'select',
        options: ['span', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'This is some text.',
    className: 'text-gray-900',
    as: 'span'
  }
}

export const Heading1: Story = {
  args: {
    children: 'This is a heading 1.',
    className: 'text-2xl font-bold',
    as: 'h1'
  }
}

export const Heading2: Story = {
  args: {
    children: 'This is a heading 2.',
    className: 'text-xl font-bold',
    as: 'h2'
  }
}

export const Heading3: Story = {
  args: {
    children: 'This is a heading 3.',
    className: 'text-lg font-bold',
    as: 'h3'
  }
}

export const Heading4: Story = {
  args: {
    children: 'This is a heading 4.',
    className: 'text-base font-bold',
    as: 'h4'
  }
}

export const Heading5: Story = {
  args: {
    children: 'This is a heading 5.',
    className: 'text-sm font-bold',
    as: 'h5'
  }
}

export const Heading6: Story = {
  args: {
    children: 'This is a heading 6.',
    className: 'text-xs font-bold',
    as: 'h6'
  }
}
