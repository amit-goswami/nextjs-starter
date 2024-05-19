import { create } from 'zustand'
import {
  GlobeAltIcon,
  GlobeAmericasIcon,
  PuzzlePieceIcon,
  WrenchIcon
} from '@heroicons/react/20/solid'
import { SEASONS } from '@/features/seasonal-treks/seasonal-treks.interface'

const bestSeasonalTreks = [
  {
    image: '/assets/summer.jpg',
    title: 'Summer',
    description:
      'Summer is the hottest of the four temperate seasons, falling after spring and before autumn.'
  },
  {
    image: '/assets/winter.jpg',
    title: 'Winter',
    description:
      'Winter is the coldest season of the year in polar and temperate zones. It occurs after autumn and before spring in each year.'
  },
  {
    image: '/assets/spring.jpg',
    title: 'Monsoon',
    description:
      'Monsoon is traditionally defined as a seasonal reversing wind accompanied by corresponding changes in precipitation.'
  },
  {
    image: '/assets/summer.jpg',
    title: 'Summer',
    description:
      'Summer is the hottest of the four temperate seasons, falling after spring and before autumn.'
  },
  {
    image: '/assets/winter.jpg',
    title: 'Winter',
    description:
      'Winter is the coldest season of the year in polar and temperate zones. It occurs after autumn and before spring in each year.'
  },
  {
    image: '/assets/spring.jpg',
    title: 'Monsoon',
    description:
      'Monsoon is traditionally defined as a seasonal reversing wind accompanied by corresponding changes in precipitation.'
  }
]

const features = [
  {
    name: 'Explore Our Services Further',
    description:
      'Browse our range of services to see how we can meet your specific needs.',
    icon: WrenchIcon
  },
  {
    name: 'Dive Deeper into Our Solutions',
    description:
      'Explore detailed information about our solutions and how they can benefit you.',
    icon: GlobeAltIcon
  },
  {
    name: 'Learn More About Our Company',
    description: 'Get to know our company story, values, and mission.',
    icon: PuzzlePieceIcon
  },
  {
    name: 'Discover Our Products and Offerings',
    description:
      'Check out our diverse product lineup and find the perfect fit for your requirements.',
    icon: GlobeAmericasIcon
  }
]

const stats = [
  { name: '+91-7385330961', value: 'Phone' },
  { name: 'support@baha.co.in', value: 'Email' },
  { name: 'D332, Desai Grandeur, Whitefield, 560066', value: 'Location' },
  { name: 'India', value: 'Country' }
]

const seasonalTreks = [
  {
    image: '/assets/summer.jpg',
    title: 'Summer',
    description:
      'Summer is the hottest of the four temperate seasons, falling after spring and before autumn.',
    value: SEASONS.SUMMER
  },
  {
    image: '/assets/winter.jpg',
    title: 'Winter',
    description:
      'Winter is the coldest season of the year in polar and temperate zones. It occurs after autumn and before spring in each year.',
    value: SEASONS.WINTER
  },
  {
    image: '/assets/spring.jpg',
    title: 'Monsoon',
    description:
      'Monsoon is traditionally defined as a seasonal reversing wind accompanied by corresponding changes in precipitation.',
    value: SEASONS.MONSOON
  }
]

type HomeManagementState = {
  features: typeof features
  stats: typeof stats
  seasonalTreks: typeof seasonalTreks
  bestSeasonalTreks: typeof bestSeasonalTreks
  isEnquireNowModalOpen: boolean
  selectedGenre: SEASONS | null
  setIsEnquireNowModalOpen: (isOpen: boolean) => void
  setSelectedGenre: (selectedGenre: SEASONS) => void
}

const useHomeStore = create<HomeManagementState>((set) => ({
  features: features,
  stats: stats,
  seasonalTreks: seasonalTreks,
  bestSeasonalTreks: bestSeasonalTreks,
  isEnquireNowModalOpen: false,
  selectedGenre: null,
  setIsEnquireNowModalOpen: (isOpen) => set({ isEnquireNowModalOpen: isOpen }),
  setSelectedGenre: (selectedGenre: SEASONS) => set({ selectedGenre })
}))

export default useHomeStore
