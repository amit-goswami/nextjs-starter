import React, { ChangeEvent } from 'react'
import { useFormContext } from '..'

interface IFormOptionProps {
  name: string
  options: Array<{ value: string; label: string }>
  label: string
  labelRequired?: boolean
  width?: string
}

export const FormOption: React.FC<IFormOptionProps> = ({
  name,
  options,
  label,
  labelRequired = false,
  width = '100%'
}) => {
  const { values, errors, setValues } = useFormContext()

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation()
    const { value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <div>
      <div className="flex items-center mb-2">
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
          {label}
        </label>
        {labelRequired && <div className="text-red-500">*</div>}
      </div>
      <div style={{ width }}>
        <select
          name={name}
          value={values[name] || ''}
          onChange={(e) => handleSelectChange(e)}
          className="block w-full bg-gray-200 rounded-md px-4 py-2 appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-300 dark:focus:ring-brand dark:focus:ring-opacity-50"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors[name] && (
          <p className="flex items-center text-sm text-red-500 mt-1">
            {errors[name]}
          </p>
        )}
      </div>
    </div>
  )
}
