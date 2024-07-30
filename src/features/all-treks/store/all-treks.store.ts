import { create } from 'zustand'
import allTreksConstants from '../constants'

type AllTreksStore = {
  selectedFilters: string[]
  selectedCity: string
  searchText: string
  setSelectedFilters: (filters: string[]) => void
  setSelectedCity: (city: string) => void
  setSearchText: (text: string) => void
}

const useAllTreksStore = create<AllTreksStore>((set) => ({
  selectedFilters: ['All Seasons'],
  selectedCity: allTreksConstants.selectDropDownOptions[0].value,
  searchText: '',
  setSelectedFilters: (filters) => set({ selectedFilters: filters }),
  setSelectedCity: (city) => set({ selectedCity: city }),
  setSearchText: (text) => set({ searchText: text })
}))

export default useAllTreksStore
