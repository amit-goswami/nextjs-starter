'use client'

import Link from 'next/link'
import React from 'react'
import allTreksConstants from './constants'
import useAllTreksStore from './store/all-treks.store'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Container } from '@/components/atoms/container'
import { SeasonalTreks } from '../home/components/seasonal-treks'
import { Text } from '@/components/atoms/text'
import { Card } from '@/components/molecules/card'
import { CardSkeleton } from '@/components/molecules/card/card-skeleton'
import { Input } from '@/components/atoms/input'
import { useGetBestTreksList } from '../home/hooks/useGetBestTreksList'
import { FiltersList } from './filters-list'
import { useGetFilteredTreks } from './hooks/useGetFilteredTreks'
import { ROUTES } from '../shared/shared.interface'

type AllTreksComponentProps = {
  className?: string
}

export const AllTreksComponent = ({
  className = 'w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-230px)] overflow-y-scroll'
}: AllTreksComponentProps) => {
  const {
    selectedFilters,
    selectedCity,
    searchText,
    setSelectedFilters,
    setSelectedCity,
    setSearchText
  } = useAllTreksStore()

  const { data: bestTreksList, isLoading } = useGetBestTreksList()

  const { filteredTreks } = useGetFilteredTreks({
    selectedFilters,
    selectedCity,
    bestTreksList,
    searchText
  })

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setSelectedCity(value)
  }

  return (
    <BackGroundDiv>
      <Container className={`${className}`}>
        <Container className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
          <Text
            as="h2"
            className="text-4xl font-bold text-gray-800 dark:text-gray-400 text-center"
          >
            Our Offerings
          </Text>
          <Container className="my-6 flex justify-center items-center gap-4 overflow-auto">
            <FiltersList
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <select
              className="rounded-full bg-transparent flex items-center justify-center gap-2 py-[3px] px-4 m-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-700"
              value={selectedCity}
              onChange={handleSelectChange}
            >
              {allTreksConstants.selectDropDownOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
            <Input
              name="search"
              type="text"
              placeholder="Search by trek name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="rounded-full bg-transparent flex items-center justify-center gap-2 px-4 m-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-700"
            />
          </Container>
          <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks &&
              filteredTreks?.treks?.map((trek, index) => {
                const trekName =
                  trek.trek_name.length > 29
                    ? trek.trek_name.slice(0, 29) + '...'
                    : trek.trek_name
                const imageSrc = trek.media[0]
                  ? `https://mapmymap.github.io/baha-assets/${trek.media[0].replace('.jpg', '.png')}`
                  : '/assets/hero.jpg'
                return (
                  <Link
                    href={ROUTES.TREK_PLANNER.replace(':id', trek.trek_id)}
                    key={index}
                  >
                    <Card
                      title={trekName}
                      imageSrc={imageSrc}
                      location={trek.state}
                      distance={trek.altitude}
                      duration={trek.days}
                    />
                  </Link>
                )
              })}
            {isLoading &&
              new Array(9)
                .fill(0)
                .map((_, index) => <CardSkeleton key={index} />)}
          </Container>
          {!filteredTreks && (
            <Container className="text-center h-[50vh] flex items-center justify-center">
              <Text
                as="h3"
                className="text-2xl font-semibold text-gray-800 dark:text-gray-400 text-center"
              >
                No treks found
              </Text>
            </Container>
          )}
        </Container>
        <SeasonalTreks />
      </Container>
    </BackGroundDiv>
  )
}
