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
  { name: '+91-7385330961', value: 'Phone', link: 'tel:+919625265924' },
  {
    name: 'support@baha.co.in',
    value: 'Email',
    link: 'mailto:info@baha.co.in'
  },
  {
    name: 'D332, Desai Grandeur, Whitefield, 560066',
    value: 'Location',
    link: '#'
  },
  { name: 'India', value: 'Country', link: '#' }
]

const seasonalTreks = [
  {
    image: `https://mapmymap.github.io/baha-assets/images/seasons/summer.png`,
    title: 'Summer',
    description:
      'Experience the warmest season with long, sunny days perfect for high-altitude treks and exploring lush, green landscapes.',
    value: SEASONS.SUMMER
  },
  {
    image: 'https://mapmymap.github.io/baha-assets/images/seasons/winter.png',
    title: 'Winter',
    description:
      'Discover the beauty of snow-covered trails and crisp, cool air, making winter trekking a serene and magical adventure.',
    value: SEASONS.WINTER
  },
  {
    image: 'https://mapmymap.github.io/baha-assets/images/seasons/monsoon.png',
    title: 'Monsoon',
    description:
      'Embrace the challenge of monsoon treks with refreshing rains, verdant surroundings, and the vibrant energy of nature coming alive.',
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
