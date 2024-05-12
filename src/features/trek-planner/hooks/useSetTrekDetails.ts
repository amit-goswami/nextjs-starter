import useTrekPlannerStore from '../store/trek-planner.store'
import { useEffect } from 'react'
import { ITrekDetail } from '../trek-planner.interface'

export const useSetTrekDetails = (
  trekDetails: ITrekDetail | null | undefined
) => {
  const { setTrekDetails } = useTrekPlannerStore()
  useEffect(() => {
    trekDetails && setTrekDetails(trekDetails)
  }, [trekDetails])
}
