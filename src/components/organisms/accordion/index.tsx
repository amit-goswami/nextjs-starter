import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/atoms/container'

type AccordionProps = {
  title: string
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container className="bg-transparent py-4 rounded-sm overflow-hidden shadow-md hover:scale-[1.02] transition-all">
      <Container
        onClick={toggleAccordion}
        className="flex items-center justify-between px-6 cursor-pointer"
      >
        <Container className="text-lg font-medium text-gray-800 h-6 rounded">
          {title}
        </Container>
        <Container>
          {isOpen ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </Container>
      </Container>
      {isOpen && <Container className="px-6">{children}</Container>}
    </Container>
  )
}

export default Accordion
