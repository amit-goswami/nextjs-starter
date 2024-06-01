import { CardSkeleton } from '@/components/molecules/card/card-skeleton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'molecules/Card/CardSkeleton',
  component: CardSkeleton
}

export default meta

type Story = StoryObj<typeof CardSkeleton>

export const Default: Story = () => <CardSkeleton />

Default.args = {}
