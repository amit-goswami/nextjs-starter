import React from 'react'
import { Container } from '@/components/atoms/container'

interface IFilterOptions {
  id: number
  title: string
  value: string
  svg: JSX.Element
}

type FiltersListProps = {
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
}

const filtersOptionsList = [
  {
    id: 1,
    title: 'All Seasons',
    value: 'All Seasons',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Summer',
    value: 'Summer',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Winter',
    value: 'Winter',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Monsoon',
    value: 'Monsoon',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
        />
      </svg>
    )
  }
]

export const FiltersList = ({
  selectedFilters,
  setSelectedFilters
}: FiltersListProps) => {
  const handleSelectedFilter = (option: IFilterOptions) => {
    if (selectedFilters.includes(option.value.toString())) {
      return setSelectedFilters(
        selectedFilters.filter((filter) => filter !== option.value)
      )
    }
    setSelectedFilters([...selectedFilters, option.value])
  }

  return (
    <React.Fragment>
      {filtersOptionsList.map((option, index) => {
        const isSelected = selectedFilters.includes(option.value.toString())
        return (
          <Container
            key={index}
            className={`rounded-full flex items-center justify-center gap-2 m-2 px-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-700 ${
              isSelected ? 'bg-brand text-white' : ''
            }`}
            onClick={() => handleSelectedFilter(option)}
          >
            <Container className={`${isSelected ? '' : ''}`}>
              {option.svg}
            </Container>
            <Container className="w-[max-content]">{option.title}</Container>
          </Container>
        )
      })}
    </React.Fragment>
  )
}
