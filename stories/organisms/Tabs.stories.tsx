import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '@/components/organisms/tabs'

const meta: Meta = {
  title: 'organisms/Tabs',
  component: Tabs
}

export default meta

type Story = StoryObj<typeof Tabs>

const TabContent = ({ title }: { title: string }) => {
  return <div>{title} Content</div>
}

export const Default: Story = () => {
  const [tabsState, setTabsState] = useState(0)
  const tabs = [
    <TabContent key={0} title="Tab 1" />,
    <TabContent key={1} title="Tab 2" />,
    <TabContent key={2} title="Tab 3" />
  ]

  return <Tabs tabsState={tabsState}>{tabs}</Tabs>
}

Default.args = {}
