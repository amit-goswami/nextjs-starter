import { Card } from '@/components/molecules/card'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  title: 'molecules/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    location: { control: 'text' },
    distance: { control: 'text' },
    duration: { control: 'text' },
    imageSrc: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = (args: {
  title: string
  location: string
  distance: string
  duration: string | number
  imageSrc: string
}) => <Card {...args} />

Default.args = {
  title: 'Sample Title',
  location: 'Sample Location',
  distance: '10 km',
  duration: 5,
  imageSrc: '/assets/hero.jpg'
}
