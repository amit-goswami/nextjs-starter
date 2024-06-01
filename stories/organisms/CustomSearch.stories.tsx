import { CustomSearch } from '@/components/organisms/custom-search'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'organisms/CustomSearch',
  component: CustomSearch,
  argTypes: {
    placeholder: { control: 'text' },
    name: { control: 'text' },
    type: { control: { type: 'select', options: ['text', 'number', 'email'] } },
    debounceTime: { control: 'number' },
    charLimit: { control: 'number' }
  }
}

export default meta

type Story = StoryObj<typeof CustomSearch>

export const Default: Story = (args: {
  placeholder: string
  name: string
  type: 'text' | 'number' | 'email'
  debounceTime: number
  charLimit: number
  getSuggestions: (value: string) => Promise<string[]>
}) => {
  return <CustomSearch {...args} />
}

Default.args = {
  placeholder: 'Search...',
  name: 'search'
}
