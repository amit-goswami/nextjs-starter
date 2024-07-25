import React from 'react'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

interface IEvent {
  title: string
  description: string
  date: string
}

interface ITimelineProps {
  events: IEvent[]
}

export const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  return (
    <Container>
      {events.map((event, index) => (
        <Container key={index}>
          <Container>
            <Text as="h3">{event.title}</Text>
            <Text as="p">{event.description}</Text>
            <Text>{event.date}</Text>
          </Container>
        </Container>
      ))}
    </Container>
  )
}
