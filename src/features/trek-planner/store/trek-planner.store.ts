import { create } from 'zustand'
import { ITrekDetail } from '../trek-planner.interface'

type TrekPlannerStore = {
  trekDetails: ITrekDetail | null
  setTrekDetails: (value: ITrekDetail) => void
}

const useTrekPlannerStore = create<TrekPlannerStore>((set) => ({
  trekDetails: null,
  setTrekDetails: (value) => set({ trekDetails: value })
}))

export default useTrekPlannerStore
