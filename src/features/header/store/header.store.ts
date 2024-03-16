import { create } from 'zustand'

const navigation = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

type HomeManagementState = {
  navigation: typeof navigation
}

const useHeaderStore = create<HomeManagementState>(() => ({
  navigation: navigation
}))

export default useHeaderStore
