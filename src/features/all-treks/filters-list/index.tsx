import React from 'react'
import allTreksConstants from '../constants'
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

export const FiltersList = ({
  selectedFilters,
  setSelectedFilters
}: FiltersListProps) => {
  const handleSelectedFilter = (option: IFilterOptions) => {
    setSelectedFilters([option.value])
  }

  return (
    <React.Fragment>
      {allTreksConstants.filtersOptionsList.map((option, index) => {
        const isSelected = selectedFilters.includes(option.value.toString())
        return (
          <Container
            key={index}
            className={`rounded-full 
            flex items-center justify-center gap-2 m-2 px-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-700 ${
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
