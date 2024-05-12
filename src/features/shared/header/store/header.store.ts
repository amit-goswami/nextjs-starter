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
    href: '/all-treks'
  },
  {
    name: 'About',
    href: '/about-us'
  },
  {
    name: 'Contact',
    href: '/contact-us'
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy'
  },
  {
    name: 'Terms and Conditions',
    href: '/terms-and-conditions'
  },
  {
    name: 'Refund Policy',
    href: '/refund-and-cancellation'
  }
  // {
  //   name: 'Queries',
  //   href: '/queries'
  // }
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
