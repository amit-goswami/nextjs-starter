import React from 'react'
import { IBestTreksList } from '@/features/home/home.interface'

export const useGetFilteredTreks = ({
  selectedFilters,
  selectedCity,
  bestTreksList
}: {
  selectedFilters: string[]
  selectedCity: string
  bestTreksList: IBestTreksList | null | undefined
}) => {
  const [filteredTreks, setFilteredTreks] = React.useState<
    IBestTreksList | null | undefined
  >(null)

  React.useEffect(() => {
    if (selectedCity.includes('All Cities'))
      return setFilteredTreks(bestTreksList)

    const filteredTreksWithSelectedState = bestTreksList?.treks?.filter(
      (trek) => {
        if (selectedFilters.includes(trek.state))
          return trek.state === selectedCity
      }
    )

    if (filteredTreksWithSelectedState?.length === 0)
      return setFilteredTreks(null)

    setFilteredTreks({
      treks: filteredTreksWithSelectedState || []
    })
  }, [selectedFilters, bestTreksList])

  return { filteredTreks }
}
