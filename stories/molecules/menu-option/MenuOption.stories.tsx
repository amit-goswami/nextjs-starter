import { MenuOption } from '@/components/molecules/menu-option'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'molecules/MenuOption',
  component: MenuOption
}

export default meta

type Story = StoryObj<typeof MenuOption>

export const Default: Story = (args: {
  title: string
  discription: string
  onClick: () => void
}) => <MenuOption {...args} />

Default.args = {
  title: 'Sample Title',
  discription: 'Sample Description',
  onClick: () => console.log('Clicked')
}
