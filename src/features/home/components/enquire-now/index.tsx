'use client'

import gsap from 'gsap'
import useHomeStore from '../../store/home.store'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/20/solid'
import { Container } from '@/components/atoms/container'
import { useGSAP } from '@gsap/react'
import { EnquireNowForm } from './components/EnquireNowForm'

export const EnquireNow: React.FC = ({}) => {
  const { isEnquireNowModalOpen } = useHomeStore()
  const { setIsEnquireNowModalOpen } = useHomeStore()

  useGSAP(() => {
    gsap.to('.enquire-now', { opacity: 1, x: -40, delay: 0.5, duration: 1 })
  }, [])

  return (
    <Container className="enquire-now -mx-10 sticky top-0 right-0 left-full bottom-0 max-w-36 cursor-pointer opacity-0">
      <Container
        className="flex px-4 py-1 bg-gray-200 dark:bg-gray-600 dark:text-gray-800 bg-opacity-50 text-black ring ring-brand rounded-full items-center justify-center hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={() => setIsEnquireNowModalOpen(!isEnquireNowModalOpen)}
      >
        {!isEnquireNowModalOpen && (
          <ChevronDoubleLeftIcon className="h-6 w-6" />
        )}
        <span className="text-sm font-medium">Enquire Now</span>
        {isEnquireNowModalOpen && (
          <ChevronDoubleRightIcon className="h-6 w-6" />
        )}
      </Container>
      <Container
        className={`${isEnquireNowModalOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center justify-center inset-y-0 p-1 fixed right-0 h-auto w-[30vw] transform transition-transform ease-in-out duration-300`}
      >
        <EnquireNowForm
          setIsEnquireNowModalOpen={setIsEnquireNowModalOpen}
          key={isEnquireNowModalOpen ? 1 : 0}
        />
      </Container>
    </Container>
  )
}
