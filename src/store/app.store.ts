import { create } from 'zustand'

type AppManagementState = {
  selected: number
  isTabOpen: boolean
  setSelected: (selected: number) => void
  setIsTabOpen: (isTabOpen: boolean) => void
}

const useAppStore = create<AppManagementState>((set) => ({
  selected: 0,
  isTabOpen: false,
  setSelected: (selected: number) => set({ selected }),
  setIsTabOpen: (isTabOpen: boolean) => set({ isTabOpen })
}))

export default useAppStore
