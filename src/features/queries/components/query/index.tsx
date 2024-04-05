import React from 'react'
import { Container } from '@/components/atoms/container'
import { IQuery } from '../../queries.interface'

type QueryProps = {
  query: IQuery
}

export const Query = ({ query }: QueryProps) => {
  const date = new Date(query.createdAt)
  return (
    <React.Fragment>
      <Container className="text-sm text-gray-600 h-4 my-2 rounded">
        {query.mobileNumber}
      </Container>
      <Container className="mt-2 flex items-center justify-between flex-wrap gap-2">
        <Container className="text-sm text-gray-700 h-4 rounded">
          {date.toDateString()}
        </Container>
        <Container className="flex items-center justify-center space-x-1">
          <Container className="h-4 w-4 bg-brand rounded-full"></Container>
          <Container className="text-sm text-gray-700 rounded">
            {query.status}
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  )
}
