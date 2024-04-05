import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/atoms/container'

type AccordionProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container className="bg-transparent py-4 rounded-sm overflow-hidden shadow-md hover:scale-[1.02] transition-all">
      <Container
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 cursor-pointer"
      >
        <Container className="text-lg font-medium text-gray-800 h-6 rounded">
          {title}
        </Container>
        <Container>
          {isOpen && <ChevronUpIcon className="h-6 w-6" />}
          {!isOpen && <ChevronDownIcon className="h-6 w-6" />}
        </Container>
      </Container>
      <Container className={`px-6 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </Container>
    </Container>
  )
}

export default Accordion
