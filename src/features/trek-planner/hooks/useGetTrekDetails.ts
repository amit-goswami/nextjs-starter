import trekDetailService from '../trek-planner.service'
import { useQuery } from '@tanstack/react-query'
import { TREK_DETAIL_QUERY_KEYS } from '../trek-planner.interface'

export const useGetTrekDetails = (trekId: string) => {
  return useQuery({
    queryKey: [TREK_DETAIL_QUERY_KEYS.GET_TREK_DETAIL],
    queryFn: () => trekDetailService.getTrekDetail(trekId),
    enabled: !!trekId
  })
}
