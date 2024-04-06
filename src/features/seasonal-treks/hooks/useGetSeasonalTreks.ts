import seasonalTreksService from '../seasonal-treks.service'
import { useQuery } from '@tanstack/react-query'
import { SEASONAL_TREKS_QUERY_KEYS, SEASONS } from '../seasonal-treks.interface'

export const useGetSeasonalTreksList = (genre: SEASONS) => {
  return useQuery({
    queryKey: [SEASONAL_TREKS_QUERY_KEYS.GET_SEASONAL_TREKS, genre],
    queryFn: () => seasonalTreksService.getSeasonalTreksList(genre),
    enabled: !!genre
  })
}
