import Accordion from '@/components/organisms/accordion'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'organisms/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' }
  }
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = (args: { title: string; children: string }) => {
  return (
    <Accordion {...args}>
      <div>Accordion content</div>
    </Accordion>
  )
}

Default.args = {
  title: 'Accordion Title'
}
