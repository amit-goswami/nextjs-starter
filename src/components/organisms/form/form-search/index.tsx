import React, { useState, useEffect } from 'react'
import { useFormContext } from '..'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { useDebounce } from '@/features/shared/hooks/useDebounceSearch'

interface IFormSearchDropdownProps {
  placeholder?: string
  name: string
  label: string
  labelRequired?: boolean
  className?: string
  disabled?: boolean
  getQuery?: (query: string) => Promise<{ name: string }[]>
}

export const FormSearchDropdown: React.FC<IFormSearchDropdownProps> = ({
  placeholder,
  name,
  label,
  labelRequired = false,
  disabled = false,
  className = '',
  getQuery = async () => Promise.resolve([])
}) => {
  const { values, errors, setValues } = useFormContext()
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<{ name: string }[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debouncedQuery = useDebounce(query)

  useEffect(() => {
    if (debouncedQuery) {
      getQuery(debouncedQuery).then((data) => {
        setSuggestions(data)
        setShowSuggestions(true)
      })
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [debouncedQuery, getQuery])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setValues({ ...values, [name]: event.target.value })
    setShowSuggestions(true)
  }

  const handleSuggestionClick = (suggestion: { name: string }) => {
    setValues({ ...values, [name]: suggestion.name })
    setShowSuggestions(false)
    setSuggestions([])
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
      <Container className="mt-2 relative">
        <input
          type="text"
          name={name}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 bg-transparent
           disabled:cursor-not-allowed disabled:text-gray-400 dark:text-gray-400"
          value={String(values[name] || query)}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {suggestions.length > 0 && showSuggestions && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
        {errors[name] && (
          <Text as="p" className="text-red-500 mt-1 text-sm">
            {errors[name]}
          </Text>
        )}
      </Container>
    </Container>
  )
}
