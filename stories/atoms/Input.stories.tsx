import { Input } from '@/components/atoms/input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    name: { control: 'text' },
    type: { control: 'text' },
    value: { control: 'text' },
    className: { control: 'text' },
    label: { control: 'text' },
    labelRequired: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    onChange: { action: 'changed' }
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    name: 'default',
    type: 'text',
    value: '',
    className: 'my-4',
    label: 'Default Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}

export const Required: Story = {
  args: {
    placeholder: 'Enter text...',
    name: 'required',
    type: 'text',
    value: '',
    className: 'my-4',
    label: 'Required Input',
    labelRequired: true,
    disabled: false,
    readOnly: false
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    name: 'disabled',
    type: 'text',
    value: '',
    className: 'my-4',
    label: 'Disabled Input',
    labelRequired: false,
    disabled: true,
    readOnly: false
  }
}

export const ReadOnly: Story = {
  args: {
    placeholder: 'Enter text...',
    name: 'readonly',
    type: 'text',
    value: 'Read only',
    className: 'my-4',
    label: 'Read Only Input',
    labelRequired: false,
    disabled: false,
    readOnly: true
  }
}

export const Password: Story = {
  args: {
    placeholder: 'Enter password...',
    name: 'password',
    type: 'password',
    value: '',
    className: 'my-4',
    label: 'Password Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}

export const Number: Story = {
  args: {
    placeholder: 'Enter number...',
    name: 'number',
    type: 'number',
    value: '',
    className: 'my-4',
    label: 'Number Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}

export const Email: Story = {
  args: {
    placeholder: 'Enter email...',
    name: 'email',
    type: 'email',
    value: '',
    className: 'my-4',
    label: 'Email Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}

export const Date: Story = {
  args: {
    placeholder: 'Enter date...',
    name: 'date',
    type: 'date',
    value: '',
    className: 'my-4',
    label: 'Date Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}

export const Time: Story = {
  args: {
    placeholder: 'Enter time...',
    name: 'time',
    type: 'time',
    value: '',
    className: 'my-4',
    label: 'Time Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}

export const DateTime: Story = {
  args: {
    placeholder: 'Enter date and time...',
    name: 'datetime',
    type: 'datetime-local',
    value: '',
    className: 'my-4',
    label: 'Date and Time Input',
    labelRequired: false,
    disabled: false,
    readOnly: false
  }
}
