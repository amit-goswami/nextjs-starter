import { create } from 'zustand'

const navigation = [
  {
    name: 'Go Home',
    href: '/'
  },
  {
    name: 'Seasonal Treks',
    href: '#seasonal-treks'
  },
  {
    name: 'Best Treks',
    href: '#best-treks'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
]

type HomeManagementState = {
  sideBarOpen: boolean
  navigation: typeof navigation
  setSideBarOpen: (value: boolean) => void
}

const useHeaderStore = create<HomeManagementState>((set) => ({
  sideBarOpen: false,
  navigation: navigation,
  setSideBarOpen: (value) => set({ sideBarOpen: value })
}))

export default useHeaderStore
