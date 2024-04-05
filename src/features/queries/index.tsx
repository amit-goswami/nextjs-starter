'use client'

import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { useGetQueries } from './hooks/useGetQueries'
import { ADMIN } from '@/shared/shared.interface'
import { QueriesLoader } from './components/queries-loader'

export const QueriesComponent = () => {
  const email = ADMIN.EMAIL
  const { isLoading, data } = useGetQueries(email)

  if (isLoading) return <QueriesLoader />
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <Container className="p-4">
          {data?.map((query) => {
            const date = new Date(query.createdAt)
            return (
              <Container
                className="bg-transparent rounded-sm overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
                key={query._id}
              >
                <Container className="p-6">
                  <Container className="text-lg font-bold text-gray-800 h-6 rounded">
                    {query.name} {query.email}
                  </Container>
                  <Container className="text-sm text-gray-600 h-4 mt-2 rounded">
                    {query.mobileNumber}
                  </Container>
                  <Container className="mt-4 flex items-center justify-between flex-wrap gap-2">
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
                </Container>
              </Container>
            )
          })}
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
