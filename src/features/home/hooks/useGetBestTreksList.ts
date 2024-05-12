import homeService from '../home.service'
import { useQuery } from '@tanstack/react-query'
import { BEST_TREKS_QUERY_KEYS } from '../home.interface'

export const useGetBestTreksList = () => {
  return useQuery({
    queryKey: [BEST_TREKS_QUERY_KEYS.GET_BEST_TREKS],
    queryFn: () => homeService.getBestTreksList()
  })
}
