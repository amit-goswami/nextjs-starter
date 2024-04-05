'use client'

import gsap from 'gsap'
import useHomeStore from '../../store/home.store'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'
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
    <Container className="enquire-now -mx-10 sticky top-0 right-0 left-full bottom-0 max-w-24 max-h-24 cursor-pointer opacity-0 z-[9] p-4 rounded-full">
      <Container
        className="flex p-4 bg-gray-800 dark:bg-gray-600 dark:text-gray-800 bg-opacity-50 text-black ring ring-brand rounded-full items-center justify-center hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out space-x-2"
        onClick={() => setIsEnquireNowModalOpen(!isEnquireNowModalOpen)}
      >
        <ChatBubbleLeftEllipsisIcon className="h-auto w-auto text-brand" />
      </Container>
      <Container
        className={`${isEnquireNowModalOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center justify-center bottom-0 p-2 fixed right-0 h-auto w-[70vw] md:w-[30vw] transform transition-transform ease-in-out duration-300`}
      >
        <EnquireNowForm
          setIsEnquireNowModalOpen={setIsEnquireNowModalOpen}
          key={isEnquireNowModalOpen ? 1 : 0}
        />
      </Container>
    </Container>
  )
}
