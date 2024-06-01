import { Loader } from '@/components/molecules/loader'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'molecules/Loader',
  component: Loader
}

export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = () => <Loader />

Default.args = {}
