import React from 'react'
import { useFormContext } from '..'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

interface IFormDateInputProps {
  name: string
  label: string
  labelRequired?: boolean
  className?: string
  disabled?: boolean
  minDate?: string
}

export const FormDateRangeInput: React.FC<IFormDateInputProps> = ({
  name,
  label,
  labelRequired = false,
  disabled = false,
  className = '',
  minDate
}) => {
  const { values, setValues, errors } = useFormContext()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Container className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
      >
        {label}
        {labelRequired && <span className="text-red-500"> * </span>}
      </label>
      <Container className="mt-2">
        <input
          type="date"
          name={name}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-transparent
           disabled:cursor-not-allowed disabled:text-gray-400 dark:text-gray-400"
          value={String(values[name] || '')}
          onChange={handleInputChange}
          disabled={disabled}
          min={minDate}
        />
        {errors[name] && (
          <Text as="p" className="text-red-500 mt-1 text-sm">
            {errors[name]}
          </Text>
        )}
      </Container>
    </Container>
  )
}
