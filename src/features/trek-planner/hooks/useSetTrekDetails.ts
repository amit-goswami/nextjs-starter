import useTrekPlannerStore from '../store/trek-planner.store'
import { useEffect } from 'react'
import { ITrekDetail } from '../trek-planner.interface'

export const useSetTrekDetails = (
  trekDetails: ITrekDetail | null | undefined,
  id: string | string[]
) => {
  const { setTrekDetails } = useTrekPlannerStore()
  useEffect(() => {
    setTrekDetails(null)
    trekDetails && setTrekDetails(trekDetails)
  }, [trekDetails, id])
}
